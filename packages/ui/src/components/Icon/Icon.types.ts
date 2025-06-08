export interface IconProps {
  /**
   * 图标名称，对应 lucide-vue-next 中的图标名
   */
  name: string;
  /**
   * 图标大小
   * @default 24
   */
  size?: number;
  /**
   * 图标颜色
   * @default 'currentColor'
   */
  color?: string;
  /**
   * 线条宽度
   * @default 2
   */
  strokeWidth?: number;
  /**
   * 默认类名
   * @default 'v-icon'
   */
  defaultClass?: string;

  /**
   * 加载中
   * @default false
   */
  load?: boolean;
}
