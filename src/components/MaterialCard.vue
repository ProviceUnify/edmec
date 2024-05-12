<template>
  <div class="elite-text material-card" :class="{ 'material-card-red': !_isRed, 'is-selected': _isSelected }"
    @click="click">
    <div class="material-card-background">
      <div class="material-card-content-wrapper">
        <component :is="typeIcon" class="material-type" />
        <div class="material-card-content">
          <component :is="gradeIcon" class="grade-icon" :class="{ 'dimmed': _isDimmed }" />
          <span class="material-card-content-count" :class="{ 'dimmed': _isDimmed }">7</span>
        </div>
      </div>
      <div class="material-card-title">
        <span class="material-card-title-content" :class="{ 'dimmed': _isDimmed }">Прототипы of heat radiators</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import of SVG icons
import { Grade1Icon, Grade2Icon, Grade3Icon, Grade4Icon, Grade5Icon, RawIcon, EncodedIcon, ManufacturedIcon } from '@/assets/svg'
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
 * This `enum` is used for data integrity of variants that could be used for prop `materialType`
 */
enum MaterialTypesEnum {
  'raw',
  'encoded',
  'manufactured'
}
type Types = keyof typeof MaterialTypesEnum

/**
 * Defined props of this component
 */
const props = defineProps({
  grade: String as PropType<Grades>,
  materialType: String as PropType<Types>,
  isRed: Boolean,
  isDimmed: Boolean
})

/**
 * Defined events of this component
 */
const emits = defineEmits(['mc-click'])

/**
 * Computation of what SVG icon should be used for current MaterialCard
 */
const gradeIcon = computed(() => {
  var gradesList = [Grade1Icon, Grade2Icon, Grade3Icon, Grade4Icon, Grade5Icon]
  if (props.grade == undefined) return Grade1Icon
  return gradesList[GradesEnum[props.grade]]
})

/**
 * Computation of what SVG material type icon should be used for current MaterialCard
 */
const typeIcon = computed(() => {
  var typesList = [RawIcon, EncodedIcon, ManufacturedIcon]
  if (props.materialType == undefined) return RawIcon
  return typesList[MaterialTypesEnum[props.materialType]]
})

/**
 * Sets red appearance for `MaterialCard` that cannot be exchanged
 */
const _isRed = ref(props.isRed)

/**
 * Sets dimmed appearance for `MaterialCard` that cannot be exchanged as preview on hover
 */
const _isDimmed = ref(props.isDimmed)

const _isSelected = ref(false)

// #region METHODS ZONE

function click() {
  if (!_isRed.value) return
  _isSelected.value = !_isSelected.value
  emits('mc-click', _isSelected.value)
}

// #endregion

// #region WATCHER ZONE

/**
 * Watcher of defined prop for `isAvailableForExchange`
 * @abstract Need for availibity change value from outer elements
 */
watch(() => props.isRed, (newValue) => {
  _isRed.value = newValue
})

/**
 * Watcher of defined prop for `isAvailableForExchangePreview`
 * @abstract Need for availibity change value from outer elements
 */
watch(() => props.isDimmed, (newValue) => {
  _isDimmed.value = newValue
})

// #endregion
</script>

<style scoped>
/* Dimmed brightness for preview of materials that unavailable for exchange */
.dimmed {
  filter: brightness(.55);
}

/* Disabling of brightness dimming for preview of materials that unavailable for exchange when hover */
.material-card:hover .dimmed,
.material-card-red:hover .dimmed {
  opacity: 1;
}

/* Usual appearance */
.material-card {
  user-select: none;
  border: 2px solid var(--secondary);
  padding: 3px;
  height: var(--material-card-scale);
  width: calc(var(--material-card-scale) * 1.45);
  color: rgb(var(--primary));
}

.is-selected {
  border-color: var(--main-background);
  background: linear-gradient(var(--main-background) 0 0) padding-box,
    linear-gradient(180deg, rgba(var(--selected-border-color), 0.4), rgb(var(--selected-border-color)), rgba(var(--selected-border-color), 0.4)) border-box;
  border-width: 2px;
  border-style: dashed;

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
  z-index: 1;
}

/* Sets layout for MaterialCard content area - content above and material type icon below */
.material-card-content-wrapper {
  display: grid;

}

.material-card-content-wrapper>* {
  grid-row: 1;
  grid-column: 1;
}

.material-card-content-wrapper>.material-type {
  width: 10.6rem;
  justify-self: center;
  align-self: center;
  filter: brightness(.2);
  z-index: 0;
}

/* Usual appearance */
.grade-icon {
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
.material-card-red .grade-icon {
  fill: var(--secondary-red-text);
}

/* 'Exchange unavailable' appearance for `content` background icon */
.material-card-red .material-type {
  fill: rgba(var(--primary-red));
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
  box-shadow: 0 0 70px rgba(var(--primary), 0.3);
}

/* Usual:HOVER appearance for `content` background icon */
.material-card:hover .material-type {
  fill: rgba(var(--primary), 0.12);
}

/* Usual:HOVER appearance */
.material-card:hover .material-card-title {
  background-color: rgb(var(--primary));
}

/* Usual:HOVER and 'Exchange unavailable':HOVER appearance */
.material-card:hover .grade-icon,
.material-card-red:hover .grade-icon {
  fill: black;
}

/* 'Exchange unavailable':HOVER appearance */
.material-card-red:hover .material-card-background {
  background-color: var(--primary-red-background);
  color: var(--black);
  box-shadow: 0 0 70px rgba(var(--primary-red), 0.3);

}

/* 'Exchange unavailable':HOVER appearance */
.material-card-red:hover .material-card-title {
  background-color: rgb(var(--primary-red));
  color: var(--black);
}
</style>