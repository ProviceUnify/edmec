<template>
  <div class="elite-text material-card" :class="{ 'material-card-red': !isRed }">
    <div class="material-card-background">
      <div class="material-card-content">
        <component :is="icon" class="GradeIcon" />
        7
      </div>
      <div class="material-card-title">
        <span class="material-card-title-content">Прототипы of heat radiators</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import of SVG icons
import { Grade1Icon, Grade2Icon, Grade3Icon, Grade4Icon, Grade5Icon } from '@/assets/svg';
import { computed, ref, watch, type PropType } from 'vue'

/**
 * This `enum` is used for data integrity of variants that could be used for prop `grade`
 */
enum GradesEnum {
  'one',
  'two',
  'three',
  'four',
  'five',
}
type Grades = keyof typeof GradesEnum

/**
 * Defined props of this component
 */
const props = defineProps({
  grade: String as PropType<Grades>,
  isAvailableForExchange: Boolean
})

/**
 * Computation of what SVG icon should be used for current MaterialCard
 */
const icon = computed(() => {
  var gradesList = [Grade1Icon, Grade2Icon, Grade3Icon, Grade4Icon, Grade5Icon]
  if (props.grade == undefined) return Grade1Icon
  return gradesList[GradesEnum[props.grade]]
})

/**
 * Sets red appearance for `MaterialCard` that cannot be exchanged
 */
const isRed = ref(props.isAvailableForExchange)

// #region WATCHER ZONE

/**
 * Watcher of defined prop for `isAvailableForExchange`
 * @abstract Need for availibity change value from outer elements
 */
watch(() => props.isAvailableForExchange, (newValue) => {
  isRed.value = newValue
})

// #endregion
</script>

<style scoped>
/* Usual appearance */
.material-card {
  user-select: none;
  border: 2px solid var(--secondary);
  padding: 3px;
  height: var(--material-card-scale);
  width: calc(var(--material-card-scale) * 1.45);
  color: rgb(var(--primary));
}

/* Usual appearance */
.material-card-background {
  display: grid;
  height: 100%;
  text-align: center;
  grid-template-columns: 100%;
  grid-template-rows: auto 35%;
  background-color: var(--secondary-background);
}

/* Usual appearance */
.material-card-content {
  display: grid;
  justify-items: center;
  align-items: center;
  font-size: 16pt;
  font-weight: bold;
  grid-template-rows: auto 35%;
}

/* Usual appearance */
.GradeIcon {
  width: 2.5rem;
  align-self: flex-end;
  margin-bottom: 4px;
}

/* Usual appearance */
.material-card-title {
  align-content: center;
  font-size: 10pt;
  font-weight: bold;
  background-color: var(--secondary);
}

/* Usual appearance */
.material-card-title-content {
  display: inline-block;
  width: 95%;
}

/* 'Exchange unavailable' appearance */
.material-card-red {
  border: 2px solid var(--secondary-red-background);
  color: var(--secondary-red-text);
}

/* 'Exchange unavailable' appearance */
.material-card-red .GradeIcon {
  fill: var(--secondary-red-text);
}

/* 'Exchange unavailable' appearance */
.material-card-red .material-card-background {
  background-color: var(--secondary-red-background);
}

/* 'Exchange unavailable' appearance */
.material-card-red .material-card-title {
  background-color: var(--secondary-red);
}

/* Usual:HOVER appearance */
.material-card:hover .material-card-background {
  background-color: var(--primary-background);
  color: var(--black);
}

/* Usual:HOVER appearance */
.material-card:hover .material-card-title {
  background-color: rgb(var(--primary));
}

/* Usual:HOVER and 'Exchange unavailable':HOVER appearance */
.material-card:hover .GradeIcon,
.material-card-red:hover .GradeIcon {
  fill: black;
}

/* 'Exchange unavailable':HOVER appearance */
.material-card-red:hover .material-card-background {
  background-color: var(--primary-red-background);
  color: var(--black);
}

/* 'Exchange unavailable':HOVER appearance */
.material-card-red:hover .material-card-title {
  background-color: var(--primary-red);
  color: var(--black);
}
</style>