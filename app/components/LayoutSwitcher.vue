<script setup lang="ts">
const props = defineProps({
  isGrid: {
    type: Boolean,
    required: true,
  },
  setLayout: {
    type: Function as PropType<(value: boolean) => void>,
    required: true,
  },
})

function toggleLayout(value: boolean) {
  props.setLayout(value)
}
</script>

<template>
  <div class="flex space-x-4 align-middle items-center">
    <div>
      Display:
    </div>
    <UButton
      icon="i-heroicons-squares-2x2"
      :disabled="props.isGrid"
      @click="toggleLayout(!isGrid)"
    >
      Grid
    </UButton>
    <UButton
      icon="i-heroicons-list-bullet"
      :disabled="!props.isGrid"
      @click="toggleLayout(!isGrid)"
    >
      List
    </UButton>
  </div>
</template>
