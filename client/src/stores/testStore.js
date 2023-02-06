import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useTestStore = defineStore('testStore', () => {

    const admin = ref(false)

    watch(() => admin, (state) => {
        console.log(state)
    })

    return { admin }
})