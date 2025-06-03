<template>
  <div>
    <HoverActionContainer
      v-model:content="textContent"
      @export="handleExport"
      @edit-start="console.log('Editing started')"
      @edit-save="console.log('Editing saved')"
      @edit-cancel="console.log('Editing canceled')"
    >
      <!-- 自定义内容显示 -->
      <template #content>
        <div class="custom-content">{{ textContent }}</div>
      </template>

      <!-- 自定义按钮图标 -->
      <template #export-icon>导出</template>
      <template #edit-icon>编辑</template>

      <!-- 自定义编辑区域 -->
      <template #edit="{ value, update }">
        <input
          type="text"
          :value="value"
          @input="update(($event.target as HTMLInputElement).value)"
          class="custom-edit-input"
        />
      </template>
    </HoverActionContainer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HoverActionContainer from "./index.vue";

const textContent = ref("这是默认的文本内容");

const handleExport = (content: string) => {
  console.log("导出内容:", content);
  // 这里可以添加实际的导出逻辑
};
</script>
