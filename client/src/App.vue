<template>
  <div>
    <header class="mb-16">
      <NavbarForAdmin v-if="userStore.admin" />
      <!-- <NavbarForApplicant v-else />
      <NavbarForEmployer /> -->
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
    </footer>
  </div>
</template>

<script setup>
import NavbarForAdmin from './components/Navbar/NavbarForAdmin.vue';
import NavbarForApplicant from './components/Navbar/NavbarForApplicant.vue';
import NavbarForEmployer from './components/Navbar/NavbarForEmployer.vue';

import { ref, onBeforeMount } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

import { useUserStore } from './stores/userStore'

const userStore = useUserStore()

onBeforeMount(() => {
  console.log('test')
  userStore.admin = true
})

</script>
