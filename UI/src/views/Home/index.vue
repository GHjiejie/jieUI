<template>
  <div class="home">
    <div class="menu">
      <el-menu
        default-active="2"
        @open="handleOpen"
        @close="handleClose"
        router="true"
      >
        <el-menu-item index="/button">
          <el-icon><icon-menu /></el-icon>
          <span>Button</span>
        </el-menu-item>
        <el-menu-item index="/button">
          <el-icon><icon-menu /></el-icon>
          <span>Button</span>
        </el-menu-item>
        <el-menu-item index="/button">
          <el-icon><icon-menu /></el-icon>
          <span>Button</span>
        </el-menu-item>
        <el-menu-item index="/button">
          <el-icon><icon-menu /></el-icon>
          <span>Button</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup>
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
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

.el-menu {
  border: none; /* 去掉菜单边框 */
}

.el-menu-item {
  margin-bottom: 10px; /* 菜单项之间的间距 */
}
</style>
