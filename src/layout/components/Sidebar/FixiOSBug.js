export default {
  computed: {
    device() {
      return this.$store.state.app.device
    }
  },
  mounted: function () {
    this.fixBugIniOS()
  },
  methods: {
    fixBugIniOS() {
      const $subMenu = this.$refs.subMenu
      if ($subMenu) {
        const handleMouselevel = $subMenu.handleMouselevel
        $subMenu.handleMouselevel = (e) => {
          if (this.device === 'mobile') {
            return
          }
          handleMouselevel(e)
        }
      }
    }
  }
}
