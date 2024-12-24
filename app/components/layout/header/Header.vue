<script setup lang="ts">
import type { Route } from '@/types/index'
import { _gray } from '#tailwind-config/theme/typography'
import { menuRoutes } from '~/config/menuRoutes'

const router = useRouter()

const definedRoutes = menuRoutes.filter((route: Route) => {
  return router.getRoutes().find((r: {
    path: string
  }) => {
    if (r.path === route.path) {
      return r
    }

    return null
  })
})
</script>

<template>
  <header class="sticky z-10 top-0 bg-zinc-100 border-b border-b-zinc-200 dark:bg-zinc-700 dark:border-b-zinc-600 py-8">
    <UContainer class="flex items-center justify-between">
      <nav>
        <ul class="flex gap-2">
          <li v-for="route in definedRoutes" :key="route.path">
            <BaseLink :to="route.path" :label="route.label" color="gray" />
          </li>
        </ul>
      </nav>
    </UContainer>
  </header>
</template>
