<template>
    <div>
        Selections
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

import { useNavbarStore } from '../stores/navbarStore';

const navbarStore = useNavbarStore()

navbarStore.pathNow = useRoute().path

console.log(navbarStore.pathNow)

document.title = 'Selections'

</script>

<style scoped>

</style>