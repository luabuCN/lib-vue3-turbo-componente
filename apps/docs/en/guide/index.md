# Quick Start

## Introduction

mylib-template is a component library and toolkit template project based on Vue3, consisting of the following parts:

- UI Component Library: Provides commonly used UI components
- Utility Functions: Offers common utility functions
- Hooks: Provides reusable composable functions
- Directives: Offers commonly used directives

## Installation

Install using a package manager:

::: code-group

```bash [npm]
npm install @lub/ui @lub/utils @lub/hooks @lub/directives
```

```bash [yarn]
yarn add @lub/ui @lub/utils @lub/hooks @lub/directives
```

```bash [pnpm]
pnpm add @lub/ui @lub/utils @lub/hooks @lub/directives
```

```bash [bun]
bun add @lub/ui @lub/utils @lub/hooks @lub/directives
```

:::

## Usage

### UI Components

```ts
// Global import
import { createApp } from 'vue';
import UI from '@lub/ui';
import '@lub/ui/style.css';
const app = createApp(App);
app.use(UI);
// Additionally, add the following configuration to tsconfig.json for type hints:
// "types": ["@lub/ui/global.d.ts"]

// Import on demand
import { Button } from '@lub/ui';
import '@lub/ui/style.css';
const app = createApp(App);
app.use(Button);
```

### Utility Functions

```ts
import { isString } from '@lub/utils';
console.log(isString('hello')); // true
```

### Hooks

```ts
import { useCounter } from '@lub/hooks';
const { count, increment, decrement } = useCounter();
```

### Directives

```ts
import { vFocus } from '@lub/directives';
// Global import
app.directive('focus', vFocus);

// Import on demand
import { vFocus } from '@lub/directives';
app.directive('focus', vFocus);
```
