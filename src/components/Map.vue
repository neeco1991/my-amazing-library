<script setup lang="ts">
import { computed, onMounted, provide, ref, useSlots } from 'vue';

const props = withDefaults(
  defineProps<{
    clickAllowed?: boolean;
    center?: [number, number];
    projection?: string;
    zoom?: number;
    rotation?: number;
    tileUrl?: string;
  }>(),
  {
    projection: 'EPSG:4326',
    // @ts-ignore
    center: [40, 40],
    zoom: 8,
    rotation: 0,
    clickAllowed: true,
    tileUrl: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  }
);

const slots = useSlots();

const olmap = ref<any>();

const selectedFeature = ref(null);

const clickAllowed = ref(true);

provide(
  'selectedFeature',
  computed(() => selectedFeature.value)
);

onMounted(() => {
  if (props.clickAllowed === false) {
    return;
  }

  if (slots.default !== undefined) {
    const features = slots
      .default()
      // @ts-ignore
      .filter((child) => child.type.__name === 'IconFeature');

    olmap.value.map.on('click', (e: any) => {
      if (!clickAllowed.value) {
        return;
      }

      const zoom = e.map.getView().getZoom() as number;
      const squaredZoom = Math.pow(2, zoom);

      const reorderedFeatures = features.sort((f1, f2) => {
        // @ts-ignore
        const f1Coordinates = f1.props.coordinates as [number, number];
        // @ts-ignore
        const f2Coordinates = f2.props.coordinates as [number, number];

        const f1X = f1Coordinates[0];
        const f1Y = f1Coordinates[1];

        const f2X = f2Coordinates[0];
        const f2Y = f2Coordinates[1];

        const f1Distance = Math.sqrt(
          Math.pow(f1X - e.coordinate[0], 2) +
            Math.pow(f1Y - e.coordinate[1], 2)
        );
        const f2Distance = Math.sqrt(
          Math.pow(f2X - e.coordinate[0], 2) +
            Math.pow(f2Y - e.coordinate[1], 2)
        );

        return f1Distance - f2Distance;
      });

      const closestFeature = reorderedFeatures[0];

      if (closestFeature !== undefined) {
        const distance = Math.sqrt(
          // @ts-ignore
          Math.pow(closestFeature.props.coordinates[0] - e.coordinate[0], 2) +
            // @ts-ignore
            Math.pow(closestFeature.props.coordinates[1] - e.coordinate[1], 2)
        );

        if (distance < 40 / squaredZoom) {
          // @ts-ignore
          selectedFeature.value = closestFeature.props.id;
        } else {
          // @ts-ignore
          selectedFeature.value = null;
        }
      }
    });
  }
});
</script>

<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px; width: 1000px"
    ref="olmap"
  >
    <ol-view
      ref="view"
      :center="props.center"
      :rotation="props.rotation"
      :zoom="props.zoom"
      :projection="props.projection"
    />

    <ol-tile-layer>
      <ol-source-osm :url="props.tileUrl" />
    </ol-tile-layer>

    <!-- <div ref="features"> -->
    <slot :test="1"></slot>
    <!-- </div> -->
  </ol-map>
</template>
