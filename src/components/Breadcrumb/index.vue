<template>
    <el-breadcrumb class="app-breadcrumb" separator-class="el-icon-arrow-right">
 <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
       <span v-if="item.redirect=='noRedirect'||index==levelList.length-1">{{item.meta.title}}</span>
       <a v-else @click.prevent="handleLink(item)">{{item.meta.title}}</a>
      </el-breadcrumb-item>
 </transition-group>
</el-breadcrumb>
</template>
<script>
import pathToRegexp from "path-to-regexp";
export default {
  data() {
    return {
      levelList: null
    };
  },
  watch: {
    $route() {
      //点击左边侧边栏时 会改变route 所以需要监听
      this.getBreadcrumb();
    }
  },
  created: function() {
    this.getBreadcrumb();
  },
  methods: {
    //获取面包屑数据
    getBreadcrumb() {
        console.log(this.$route)
      let matched = this.$route.matched.filter(
        item => item.meta && item.meta.title
      );
      const first = matched[0];
      if (!this.isDashboard(first)) {
        matched = [{ path: "/dashboard", meta: { title: "Dashboard" } }].concat(
          matched
        );
      }
      //item.meta.breadcrumb是设置该菜单是否在面包屑中显示
      this.levelList = matched.filter(
        item => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
    },
    //判断是否是dashboard
    isDashboard(route) {
      const name = route && route.name;
      if (!name) {
        return fasle;
      }
      return (
        name.trim().toLocaleLowerCase() === "Dashboard".toLocaleLowerCase()
      );
    },
    pathCompile(path) {
      const { params } = this.$route;
      var toPath = pathToRegexp.compile(path);
      return toPath(params);
    },
    handleLink(item) {
      const { redirect, path } = item;
      if (redirect) {
        this.$router.push(redirect);
        return;
      }
      console.log(path)
      this.$router.push(this.pathCompile(path));
    }
  }
};
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>