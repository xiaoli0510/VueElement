<template>
    <div :class="{'has-logo':showLogo}">
        <logo :collapse="isCollapse"/>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
       :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import Logo from "./Logo"
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'


export default {
  components: { Logo,SidebarItem },
  computed: {
    ...mapGetters(["sidebar"]),
    routes() {
      return this.$router.options.routes;
    },
    //当前激活菜单
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    // logo的收缩和展开
    isCollapse() {
      return !this.sidebar.opened;
    },
    //logo的显示和隐藏
    showLogo() {
      return this.$store.state.settings.sidebarLogo
      //return this.$store.state.settings.sidebarLogo;
    },
    variables() {
       return variables;
    }
  }
};
</script>
<style lang="scss" scoped>

</style>


