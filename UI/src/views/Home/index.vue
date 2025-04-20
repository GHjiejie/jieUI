<template>
  <div class="home">
    <div class="menu">
      <ul class="custom-menu">
        <li
          class="custom-menu-item"
          @click="navigateTo('/button')"
          :class="{ active: activeRoute === '/button' }"
        >
          <span class="menu-icon">☰</span>
          <span>Button</span>
        </li>
        <li
          class="custom-menu-item"
          @click="navigateTo('/another')"
          :class="{ active: activeRoute === '/another' }"
        >
          <span class="menu-icon">☰</span>
          <span>Another</span>
        </li>
        <li
          class="custom-menu-item"
          @click="navigateTo('/third')"
          :class="{ active: activeRoute === '/third' }"
        >
          <span class="menu-icon">☰</span>
          <span>Third</span>
        </li>
        <li
          class="custom-menu-item"
          @click="navigateTo('/fourth')"
          :class="{ active: activeRoute === '/fourth' }"
        >
          <span class="menu-icon">☰</span>
          <span>Fourth</span>
        </li>
      </ul>
    </div>
    <div class="main">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeRoute: this.$route.path, // 初始化为当前路由
    };
  },
  watch: {
    $route(newRoute) {
      this.activeRoute = newRoute.path; // 监听路由变化
    },
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  height: 100vh; /* 使整个视图填充可视区域 */
}

.menu {
  width: 250px; /* 菜单宽度 */
  background-color: #f5f5f5; /* 菜单背景颜色 */
  border-right: 1px solid #e0e0e0; /* 菜单右边框 */
}

.main {
  flex: 1; /* 主内容区占满剩余空间 */
  padding: 20px; /* 主内容的内边距 */
  background-color: #ffffff; /* 主内容背景颜色 */
}

.custom-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.custom-menu-item {
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;
}

.custom-menu-item:hover,
.custom-menu-item.active {
  background-color: #ddd;
}

.menu-icon {
  margin-right: 8px;
}
</style>
