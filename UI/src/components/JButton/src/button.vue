<template>
  <component :style="buttonStyle" @click="handleClick">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { buttonProps, buttonEmits } from "./button";
import { useNamespace } from "@/hooks/use-namespace";
import { useButtonCustomStyle } from "./button-custom";

const props = defineProps(buttonProps);
const emits = defineEmits(buttonEmits);

// 动态绑定样式
const buttonStyle = useButtonCustomStyle(props);
console.log("buttonStyle", buttonStyle);

// const ns = useNamespace("button");

// 下面的这段逻辑我们要放在组件的外部，我们会自定义一个钩子函数
// const handleClick = (evt: MouseEvent) => {
//   if (props.disabled) {
//     evt.preventDefault();
//     return;
//   }
//   emits("click", evt);
// };
</script>

<style lang="scss" scoped>
button {
  &.size-small {
    font-size: 12px;
    padding: 4px 8px;
  }

  &.size-medium {
    font-size: 14px;
    padding: 6px 12px;
  }

  &.size-large {
    font-size: 16px;
    padding: 8px 16px;
  }

  &.type-primary {
    background-color: #409eff;
    color: #fff;
  }

  &.type-success {
    background-color: #67c23a;
    color: #fff;
  }

  &.type-warning {
    background-color: #e6a23c;
    color: #fff;
  }

  &.type-danger {
    background-color: #f56c6c;
    color: #fff;
  }

  &.is-disabled {
    cursor: not-allowed;
    background-color: #dcdfe6;
    color: #c0c4cc;
  }

  &.is-round {
    border-radius: 20px;
  }
}
</style>
