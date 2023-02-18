import { defineStore } from 'pinia'

interface RootState {
  count: number
}

export const useStore = defineStore('main', {
  state: () => {
    return {
      count: 0,
    } as RootState
  },
  getters: {
    getDoubleCount: (state) => {
      return state.count * 2
    },
  },
})
