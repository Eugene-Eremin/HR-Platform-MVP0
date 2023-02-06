<template>
    <div>
        Table Editing
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

import { useNavbarStore } from '../stores/navbarStore';

const navbarStore = useNavbarStore()

navbarStore.pathNow = useRoute().path

document.title = 'Table Editing'

</script>

<style scoped>

</style>