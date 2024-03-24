<script setup lang="ts">
import Topbar from './components/Topbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <VApp>
    <Topbar />
    <VMain>
      <VContainer>
          <RouterView />
      </VContainer>
    </VMain>
    <Footer />
  </VApp>
</template>
