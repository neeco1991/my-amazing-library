<script setup lang="ts">
// import format from 'vue3-openlayers';
import markerIcon from '../assets/marker-icon.png';
import { inject, ref, watch } from 'vue';
// const reference = ref();

const props = defineProps<{
  coordinates: [number, number];
  selected?: boolean;
  icon?: string;
  id: string;
}>();

const overlayActive = ref<boolean>(false);

const format = inject('ol-format');

// @ts-ignore
const geoJson = new format.GeoJSON();

const selectConditions = inject('ol-selectconditions');

// @ts-ignore
const selectCondition = selectConditions.pointerMove;

// @ts-ignore
const featureSelected = (event: any) => {};

const selectInteactionFilter = (feature: any) => {
  return feature.values_.id != undefined;
};
const message = inject('selectedFeature');

watch(
  [message],
  () => {
    // @ts-ignore
    if (message && message.value === props.id) {
      overlayActive.value = true;
    } else {
      overlayActive.value = false;
    }
  },
  { immediate: true }
);
</script>

<template>
  <ol-overlay :position="coordinates">
    <div v-if="overlayActive">
      <slot name="overlay"></slot>
    </div>
  </ol-overlay>

  <ol-interaction-select
    @select="featureSelected"
    :condition="selectCondition"
    :filter="selectInteactionFilter"
  >
    <ol-style>
      <ol-style-icon :src="icon || markerIcon"></ol-style-icon>
    </ol-style>
  </ol-interaction-select>

  <ol-vector-layer>
    <ol-source-vector>
      <ol-feature :properties="{ id }">
        <ol-geom-point :coordinates="coordinates"></ol-geom-point>
      </ol-feature>
    </ol-source-vector>

    <ol-style>
      <ol-style-icon :src="icon || markerIcon" :scale="0.75"></ol-style-icon>
    </ol-style>
  </ol-vector-layer>
</template>
