<script setup lang="ts">
defineProps<{
  from: [number, number];
  to: [number, number];
  color?: string;
  width?: number;
}>();
</script>

<template>
  <ol-vector-layer>
    <ol-source-vector>
      <ol-feature>
        <ol-geom-line-string :coordinates="[from, to]"></ol-geom-line-string>
        <ol-style>
          <ol-style-stroke
            :color="color || 'yellow'"
            :width="width || 5"
          ></ol-style-stroke>
        </ol-style>
      </ol-feature>
    </ol-source-vector>
  </ol-vector-layer>
</template>
