<script setup lang="ts">
import { routes } from '@/constants/index'
</script>

<template>
  <header class="bg-zinc-100 border-b border-b-zinc-200 dark:bg-zinc-700 dark:border-b-zinc-600 py-8">
    <UContainer class="flex items-center">
      <nav>
        <ul class="flex gap-2">
          <li v-for="route in routes" :key="route.path">
            <ApplicationHeaderLink :to="route.path" :label="route.label" />
          </li>
        </ul>
      </nav>
    </UContainer>
  </header>
</template>
