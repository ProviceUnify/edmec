<template>
  <div class="material-card elite-text">
    <div class="material-card-background">
      <div class="material-card-content">
        <Grade1Icon v-if="$props.grade == GradesEnum.One" class="GradeIcon" />
        <Grade2Icon v-if="$props.grade == GradesEnum.Two" class="GradeIcon" />
        <Grade3Icon v-if="$props.grade == GradesEnum.Three" class="GradeIcon" />
        <Grade4Icon v-if="$props.grade == GradesEnum.Four" class="GradeIcon" />
        <Grade5Icon v-if="$props.grade == GradesEnum.Five" class="GradeIcon" />
        35
      </div>
      <div class="material-card-title">
        Прототипы теплоизлучателей
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Grade1Icon from '@/assets/svg/Grade1Icon.vue';
import Grade2Icon from '@/assets/svg/Grade2Icon.vue';
import Grade3Icon from '@/assets/svg/Grade3Icon.vue';
import Grade4Icon from '@/assets/svg/Grade4Icon.vue';
import Grade5Icon from '@/assets/svg/Grade5Icon.vue';
import type { PropType } from 'vue';

enum GradesEnum {
  One = 'one',
  Two = 'two',
  Three = 'three',
  Four = 'four',
  Five = 'five',
}

type Grades = 'one' | 'two' | 'three' | 'four' | 'five' | null | undefined

const props = defineProps({
  grade: String as PropType<Grades>
})

console.log(props)
</script>

<style scoped>
.material-card {
  user-select: none;
  border: 2px solid var(--secondary);
  padding: 3px;
  height: var(--material-card-scale);
  width: calc(var(--material-card-scale) * 1.45);
  color: rgb(var(--primary));
}

.material-card:hover .material-card-background {
  background-color: var(--primary-background);
}

.material-card:hover .material-card-title {
  background-color: rgb(var(--primary));
  color: var(--black);
}

.material-card:hover .material-card-content {
  color: var(--black);
}

.material-card:hover .GradeIcon {
  fill: black;
}

.material-card-background {
  display: grid;
  height: 100%;
  text-align: center;
  grid-template-columns: 100%;
  grid-template-rows: auto 35%;
  background-color: var(--secondary-background);
}

.material-card-content {
  display: grid;
  justify-items: center;
  align-items: center;
  font-size: 16pt;
  font-weight: bold;
  grid-template-rows: auto 35%;
}

.material-card-content .GradeIcon {
  width: 2.5rem;
  align-self: flex-end;
  margin-bottom: 4px;
}

.material-card-title {
  align-content: center;
  font-size: 10pt;
  background-color: var(--secondary);
}
</style>