# Icon 图标

基于 [lucide-vue-next](https://lucide.dev/icons/) 的图标组件，支持自定义名称、颜色、大小、线宽和加载动画。

## 基础用法

<demo vue="ui/icon/basic.vue" />

## API

### Props

| 属性         | 说明                     | 类型    | 默认值       |
| ------------ | ------------------------ | ------- | ------------ |
| name         | 图标名称（lucide图标名） | string  | -            |
| size         | 图标大小                 | number  | 24           |
| color        | 图标颜色                 | string  | currentColor |
| strokeWidth  | 线条宽度                 | number  | 2            |
| defaultClass | 自定义类名               | string  | v-icon       |
| load         | 是否显示加载动画         | boolean | false        |

## 图标名

图标名称请参考 [lucide-vue-next 图标库](https://lucide.dev/icons/)，如 `home`、`user`、`settings` 等。

## 布局与用法对比 elmui

- elmui 的 icon 组件通常通过 `<el-icon><xxx /></el-icon>` 组合使用，而本组件直接通过 `name` 属性指定图标名，使用更简洁：

```vue
<!-- elmui 用法 -->
<el-icon><Home /></el-icon>

<!-- 本组件用法 -->
<VIcon name="home" />
```

- 支持直接通过 `color`、`size`、`strokeWidth` 属性自定义样式，无需额外样式覆盖。

## 依赖

本组件依赖 [lucide-vue-next](https://lucide.dev/icons/)，支持所有 lucide 图标。

---

如需更多图标，请访问 [lucide.dev/icons](https://lucide.dev/icons/) 查看全部图标名。
