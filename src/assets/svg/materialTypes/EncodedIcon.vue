<template>
    <svg :viewBox="viewBox">
        <g>
            <rect x="494.44" y="206.06" width="35.11" height="259.61" />
            <rect x="371.56" y="274.06" width="35.11" height="123.61" />
            <rect x="617.33" y="274.06" width="35.11" height="123.61"
                transform="translate(1269.78 671.72) rotate(-180)" />
            <path
                d="m812.67,298.25c20.74,0,37.61,16.87,37.61,37.61s-16.87,37.61-37.61,37.61-37.61-16.87-37.61-37.61,16.87-37.61,37.61-37.61m0-46c-46.18,0-83.61,37.43-83.61,83.61s37.43,83.61,83.61,83.61,83.61-37.43,83.61-83.61-37.43-83.61-83.61-83.61h0Z" />
            <path
                d="m211.33,298.25c20.74,0,37.61,16.87,37.61,37.61s-16.87,37.61-37.61,37.61-37.61-16.87-37.61-37.61,16.87-37.61,37.61-37.61m0-46c-46.18,0-83.61,37.43-83.61,83.61s37.43,83.61,83.61,83.61,83.61-37.43,83.61-83.61-37.43-83.61-83.61-83.61h0Z" />
            <polygon points="512 893 404.33 1024 619.67 1024 512 893" />

            <polygon
                points="293.85 834.61 162.18 703 65.82 703 65.82 741.52 146.07 741.52 274.37 869.89 479.82 869.89 479.82 834.61 293.85 834.61" />
            <polygon
                points="730.15 834.6 861.82 703 958.18 703 958.18 741.51 877.93 741.51 749.63 869.88 544.18 869.88 544.18 834.6 730.15 834.6" />
        </g>
    </svg>
</template>

<script setup lang="ts">
import materialTypeViewBox from './materialTypeViewBox'

const props = defineProps({
    isCropped: Boolean
})

const viewBox = props.isCropped ? materialTypeViewBox.value.cropped : materialTypeViewBox.value.original
</script>

<style scoped>
svg {
    fill: rgb(var(--primary));
}
</style>