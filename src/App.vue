<template>
  <div class="solar-page">
    <AppNavbar />

    <main>
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import AppNavbar from './components/layout/AppNavbar.vue'
import AppFooter from './components/layout/AppFooter.vue'
</script>