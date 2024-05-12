<template>
    <div class="material-trade-row">
        <div class="material-trade-row-header">
            <span class="elite-text material-trade-row-header-text">Термические компоненты</span>
            <HorizontalLine />
        </div>
        <div class="material-trade-row-content">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import HorizontalLine from './HorizontalLine.vue'

</script>

<style scoped>
.material-trade-row {
    display: grid;
    justify-content: center;
    margin-bottom: 6vh;
}

.material-trade-row-content {
    display: grid;
    grid-template-columns: repeat(5, auto);
    column-gap: 4vw;
}

.material-trade-row-header {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: .7rem;
}

.material-trade-row-header-text {
    font-weight: bold;
    font-size: 16pt;
}
</style>