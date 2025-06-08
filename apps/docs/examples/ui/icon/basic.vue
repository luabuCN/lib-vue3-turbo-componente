<template>
  <div class="icon-demo">
    <h3>基础图标</h3>
    <div class="icon-row">
      <VIcon name="home" />
      <VIcon name="settings" />
      <VIcon name="user" />
      <VIcon name="bell" />
      <VIcon name="mail" />
      <VIcon name="loader" load />
    </div>

    <h3>自定义颜色</h3>
    <div class="icon-row">
      <VIcon name="heart" color="red" />
      <VIcon name="star" color="gold" />
      <VIcon name="thumbs-up" color="blue" />
      <VIcon name="check" color="green" />
      <VIcon name="layers" color="red" />
    </div>

    <h3>自定义大小</h3>
    <div class="icon-row">
      <VIcon name="camera" :size="16" />
      <VIcon name="camera" :size="24" />
      <VIcon name="camera" :size="32" />
      <VIcon name="camera" :size="40" />
      <VIcon name="camera" :size="48" />
    </div>

    <h3>自定义线条宽度</h3>
    <div class="icon-row">
      <VIcon name="circle" :stroke-width="1" />
      <VIcon name="circle" :stroke-width="2" />
      <VIcon name="circle" :stroke-width="3" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { VIcon } from '@lub/ui';
</script>

<style scoped>
.icon-demo {
  padding: 20px;
}

.icon-row {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
}
</style>
