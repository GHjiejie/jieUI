<template>
  <Button :type="buttonType" :size="buttonSize" @click="handleClick">
    点击我试试看
  </Button>
</template>

<script setup lang="ts">
import Button from "./button.vue";
import { ref } from "vue";

const buttonType = ref("primary");
const buttonSize = ref("medium");

const handleClick = (evt: MouseEvent) => {
  console.log("click", evt);
};
</script>
