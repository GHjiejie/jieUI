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
@import "../../JStyle/src/button.scss";
</style>
