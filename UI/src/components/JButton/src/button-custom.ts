import type { ButtonProps } from "./button";
import { useNamespace } from "@/hooks/use-namespace";
import { computed } from "vue";

export function useButtonCustomStyle(props: ButtonProps) {
  const ns = useNamespace("button");
  return computed(() => {
    let styles: Record<string, string> = {};

    // 获取用户传入的颜色
    let buttonColor = props.color;
    console.log("buttonColor", buttonColor);

    if (buttonColor) {
      styles = ns.cssVarBlock({
        "bg-color": buttonColor,
        "hover-bg-color": buttonColor,
        "active-bg-color": "#333",
        "border-color": buttonColor,
      });
    }

    return styles;
  });
}
