import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';



export const useTestStore = defineStore('testStore', () => {

    const admin = ref(false)

    watch(() => admin, (state) => {
        console.log(state)
    })

    return { admin }
})