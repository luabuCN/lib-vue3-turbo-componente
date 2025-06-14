/// <reference types="vite/client" />
/// <reference types="ant-design-vue/typings/global.d.ts" />
/// <reference types="@lub/ui/global.d.ts" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'mylib/ui' {
  export * from '@lub/ui';
}
