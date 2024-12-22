<script setup lang="ts">
import { appName } from '~/constants/index'

useHead({
  title: appName,
  bodyAttrs: {
    class: 'bg-stone-50 text-stone-800 dark:bg-stone-900 dark:text-stone-50',
  },
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
#__nuxt {
  min-height: 100dvh;
  margin: 0;
  padding: 0;
}

html,
body {
  min-height: 100dvh;
}

h1 {
  font-size: 2rem;
}
</style>
