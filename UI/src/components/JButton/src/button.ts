import type { ExtractPropTypes } from "vue";

// button按钮的尺寸
export const buttonSize = ["small", "medium", "large"] as const;

// button按钮的类型
export const buttontypes = ["primary", "success", "warning", "danger"] as const;

export const buttonProps = {
  /**
   *@description 按钮大小
   */
  size: {
    type: String,
    values: buttonSize,
    default: "medium",
  },

  /**
   * @description 按钮颜色
   */
  color: {
    type: String,
    default: "#409eff",
  },

  /**
   * @description 按钮类型
   */
  type: {
    type: String,
    values: buttontypes,
    default: "primary",
  },

  /**
   * @description 是否禁用
   */
  disabled: {
    type: Boolean,
    default: false,
  },

  /**
   * @description 是否圆角
   */
  round: {
    type: Boolean,
    default: true,
  },
} as const;

export const buttonEmits = {
  /**
   * @description 点击事件
   */
  click: (e: MouseEvent) => e instanceof MouseEvent,
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonEmits = typeof buttonEmits;
