import type { ButtonProps, ButtonEmits } from "./button";
import type { SetupContext } from "vue";
import { ref, computed, useSlots } from "vue";

export const useButton = (
  props: ButtonProps,
  emit: SetupContext<ButtonEmits>["emit"]
) => {
  const _size = computed(() => props.size || "medium");
  const _disabled = computed(() => props.disabled || false);
  const _type = computed(() => props.type || "primary");
  const _ref = ref<HTMLButtonElement | null>(null);
  const _tag = computed(() => props.tag || "button");
  const slots = useSlots();
  const _props = computed(() => {
    if (props.tag === "button") {
      return {
        ariaDisabled: _disabled.value,
        disabled: _disabled.value,
        type: _type.value,
      };
    }
  });
  // Handle button click event
  const handleClick = (event: MouseEvent) => {
    if (props.disabled) {
      event.stopPropagation();
      return;
    }
    emit("click", event);
  };

  return {
    _size,
    _disabled,
    _type,
    _tag,
    _ref,
    _props,
    slots,
    handleClick,
  };
};
