<script setup lang="ts">
import type { PropType } from 'vue'
import { computed, defineProps } from 'vue'

const props = defineProps({
  tag: {
    type: String as PropType<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>,
    default: 'p',
  },
  text: {
    type: String,
    required: true,
  },
  customClass: {
    type: String,
    default: '',
  },
})

const tag = computed(() => props.tag)
const text = computed(() => props.text)
const customClass = computed(() => props.customClass)
</script>

<template>
  <component :is="tag" :class="customClass">
    {{ text }}
  </component>
</template>

<style>
h1 {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
}

h2 {
  font-size: 1.875rem;
  font-weight: 500;
  line-height: 1.2;
}

h3 {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
}
</style>
