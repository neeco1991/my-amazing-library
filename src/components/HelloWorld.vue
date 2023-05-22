<script setup lang="ts">
import IconFeature from './IconFeature.vue';
import LineFeature from './LineFeature.vue';
import Map from './Map.vue';
import markerIcon from '../assets/marker-icon.png';
</script>

<template>
  <Map :center="[40, 40]" :rotation="0" :zoom="8" projection="EPSG:4326">
    <IconFeature :icon="markerIcon" :coordinates="[40, 40]" id="f1">
      <template v-slot:overlay>
        <div>F1</div>
      </template>
    </IconFeature>
    <IconFeature :icon="markerIcon" :coordinates="[41, 41]" id="f2">
      <template v-slot:overlay>
        <div>F2</div>
      </template>
    </IconFeature>
    <LineFeature :from="[40, 40]" :to="[41, 41]"></LineFeature>
  </Map>
  <!-- <MyButton>TEST</MyButton> -->
</template>
