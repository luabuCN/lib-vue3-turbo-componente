import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  // 预设
  presets: [
    presetUno(), // 默认预设，包含Tailwind CSS兼容的工具类
    presetAttributify(), // 属性化模式，可选
  ],
  // 转换器
  transformers: [
    transformerDirectives(), // 支持 @apply 指令
    transformerVariantGroup(), // 支持变体组语法，如 hover:(bg-gray-400 font-medium)
  ],
  // 快捷方式
  shortcuts: [
    // 常用布局
    ['flex-center', 'flex items-center justify-center'],
    ['flex-col-center', 'flex flex-col items-center justify-center'],
    ['absolute-center', 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'],

    // 按钮样式
    ['btn', 'px-4 py-2 rounded inline-block cursor-pointer transition-colors'],
    ['btn-primary', 'btn bg-blue-500 text-white hover:bg-blue-600'],
    ['btn-secondary', 'btn bg-gray-500 text-white hover:bg-gray-600'],

    // 卡片样式
    ['card', 'bg-white rounded-lg shadow-md p-6'],
    ['card-hover', 'card hover:shadow-lg transition-shadow duration-300'],
  ],
});
