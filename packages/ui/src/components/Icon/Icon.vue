<template>
  <component
    :is="LucideIcon"
    :size="size"
    :color="color"
    v-bind="attrs"
    :class="[defaultClass, load ? 'v-icon--load' : '']"
    :stroke-width="strokeWidth"
  />
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import * as LucideIcons from 'lucide-vue-next';
import type { IconProps } from './Icon.types';

const {
  name,
  strokeWidth = 2,
  size = 24,
  color = '',
  defaultClass = 'v-icon',
  load,
} = defineProps<IconProps>();

const attrs = useAttrs();

const LucideIcon = computed(() => {
  const iconName = name.charAt(0).toUpperCase() + name.slice(1);
  return (LucideIcons as any)[iconName] || null;
});
</script>

<style lang="scss">
@use './Icon.scss' as *;
</style>
