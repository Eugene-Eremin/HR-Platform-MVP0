<template>
    <div>
        Vacancies
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

import { useNavbarStore } from '../stores/navbarStore';

const navbarStore = useNavbarStore()

navbarStore.pathNow = useRoute().path

document.title = 'Вакансии'

</script>

<style scoped>

</style>