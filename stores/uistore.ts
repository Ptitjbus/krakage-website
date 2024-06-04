import { defineStore } from 'pinia'

export const useUiStore = defineStore('landingStore', {
    state: () => ({ displayHeader: false }),
})