<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const drawer = ref(false);

function navigateTo(viewName: string): void {
  router.push({ name: viewName });
}
</script>

<template>
  <VAppBar>
    <template #prepend>
      <VAppBarNavIcon @click="drawer = !drawer" />
    </template>
    <VAppBarTitle>Supermarket Kata</VAppBarTitle>
  </VAppBar>
  <VNavigationDrawer v-model="drawer">
    <VList>
      <VListItem link @click="navigateTo('home')">
        <VListItemTitle><VIcon icon="mdi-home" /> Home</VListItemTitle>
      </VListItem>
      <VListItem link @click="navigateTo('register')">
        <VListItemTitle><VIcon icon="mdi-text-box-edit" /> Product Registration</VListItemTitle>
      </VListItem>
      <VListItem link @click="navigateTo('about')">
        <VListItemTitle><VIcon icon="mdi-information" /> About</VListItemTitle>
      </VListItem>
    </VList>
  </VNavigationDrawer>
</template>
