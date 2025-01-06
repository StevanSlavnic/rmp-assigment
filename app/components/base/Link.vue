<script setup lang="ts">
const props = defineProps<{
  to: string
  label: string
  color?: string
}>()
const { to, label, color } = props
</script>

<template>
  <UButton :to="to" :label="label" variant="ghost" :color="color" />
</template>
