import { defineStore } from "pinia";

export const useUserStore = defineStore('useStore', {
    state: ( ) => ({
        userData: 'admin@alexestudio86.com'
    })
})