<template>
    <div>
        Clients
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

import { useNavbarStore } from '../stores/navbarStore';

const navbarStore = useNavbarStore()

navbarStore.pathNow = useRoute().path

console.log(navbarStore.pathNow)

document.title = 'Clients'

</script>

<style scoped>

</style>