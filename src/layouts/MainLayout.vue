<script setup lang="ts">
import '@/assets/css/main.css'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <TheHeader />
  <main class="container">
    <TheNav />
    <slot />
  </main>
  <TheFooter />
</template>
