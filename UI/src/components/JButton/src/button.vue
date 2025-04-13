<template>
  <component :style="buttonStyle" :class="buttonKls" @click="handleClick">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { buttonProps, buttonEmits } from "./button";
import { useNamespace } from "@/hooks/use-namespace";
import { useButtonCustomStyle } from "./button-custom";
import { useButton } from "./use-button";
import { computed } from "vue";

const props = defineProps(buttonProps);
const emit = defineEmits(buttonEmits);

// 动态绑定样式（这个是用户自定义的按钮颜色）
const buttonStyle = useButtonCustomStyle(props);
console.log("buttonStyle", buttonStyle);

const ns = useNamespace("button");
const { _type, _size, _ref, _tag, _props, _disabled, handleClick } = useButton(
  props,
  emit
);

const buttonKls = computed(() => [
  ns.b(),
  ns.m(_type.value),
  ns.m(_size.value),
  ns.is("disabled", _disabled.value),
  ns.is("round", props.round),
]);

console.log(_type, _size, _ref, _tag, _props, _disabled);

defineExpose({
  /** @description button html element */
  ref: _ref,
  /** @description button size */
  size: _size,
  /** @description button type */
  type: _type,
  /** @description button disabled */
  disabled: _disabled,
});
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
