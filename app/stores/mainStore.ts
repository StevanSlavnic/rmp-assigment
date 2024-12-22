export const useMainStore = defineStore('mainStore', {
  state: () => ({
    isGrid: false,
  }),
  actions: {
    setLayout(layout: boolean) {
      this.isGrid = layout
    },
  },
})
