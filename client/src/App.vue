<template>
  <div>
    <NavbarAdmin v-if="testStore.admin"></NavbarAdmin>
    <NavbarUser v-else></NavbarUser>
    <RouterView />
  </div>
</template>

<script setup>
import NavbarAdmin from './components/NavbarAdmin.vue';
import NavbarUser from './components/NavbarUser.vue';

import { RouterLink, RouterView } from 'vue-router'
import { useTestStore } from './stores/testStore'

const testStore = useTestStore()

</script>
