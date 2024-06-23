<template>
  <div class="app-layout">
    <!-- <CustomCursor /> -->
    <div class="app-content-body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CustomCursor from "../components/CustomCursor.vue";
</script>

<style lang="scss" scoped>
.app-layout {
  // height: 100vh;
  //background: rgba(237, 232, 228, 1);
  //background: #e8e8e8;
}

.app-content-body {
  margin: 10px;
}
</style>
