export const useLayoutStore = defineStore('layoutStore', {
  state: (): { isGrid: boolean } => ({
    isGrid: true,
  }),
  actions: {
    setLayout(layout: boolean) {
      this.isGrid = layout
    },
  },
})
