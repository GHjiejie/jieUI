<template>
  <button
    :class="[
      `size-${props.size}`,
      `type-${props.type}`,
      { 'is-disabled': props.disabled, 'is-round': props.round },
    ]"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { buttonProps, buttonEmits } from "./index";

// const props = withDefaults(defineProps<Partial<buttonProps>>(), {
//   type: "primary",
//   disabled: false,
//   size: "medium",
//   round: true,
// });

// const props = defineProps<Partial<buttonProps>>();
const props = defineProps(buttonProps);
const emits = defineEmits(buttonEmits);

const handleClick = (evt: MouseEvent) => {
  if (props.disabled) {
    evt.preventDefault();
    return;
  }
  emits("click", evt);
};
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
