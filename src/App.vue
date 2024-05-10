<script setup lang="ts">
import { ref } from 'vue';
import MaterialCard from './components/MaterialCard.vue'

const t = ref(true)

function test() {
  t.value = !t.value
}
</script>

<template>
  <div>
    <MaterialCard grade="one" :is-available-for-exchange="t" id="testElement" />
    <MaterialCard grade="two" :is-available-for-exchange="t" />
    <MaterialCard grade="three" :is-available-for-exchange="t" />
    <MaterialCard grade="four" :is-available-for-exchange="t" />
    <MaterialCard grade="five" :is-available-for-exchange="true" @click="test" />
  </div>
</template>

<style scoped></style>
