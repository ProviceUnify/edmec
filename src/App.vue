<script setup lang="ts">
import { ref } from 'vue';
import MaterialCard from './components/MaterialCard.vue'
import apiKey from './data/apiKey'

const t = ref(true)

function test(e: Event) {
  console.log(e)
  t.value = !t.value
}

async function fetchData() {
  return
  // eslint-disable-next-line no-unreachable
  let api = apiKey
  const t = await fetch(`https://www.edsm.net/api-commander-v1/get-materials?commanderName=Unify&apiKey=${api}&type=data`)
  console.log(await t.json())
}
</script>

<template>
  <div>
    <MaterialCard grade="one" :isRed="t" :isDimmed="t" material-type="encoded" />
    <MaterialCard grade="two" :isRed="t" />
    <MaterialCard grade="three" :isRed="t" material-type="manufactured" @mc-click="fetchData" />
    <MaterialCard grade="four" :isRed="t" />
    <MaterialCard grade="five" :isRed="true" @mc-click="test" />
  </div>
</template>

<style scoped></style>
