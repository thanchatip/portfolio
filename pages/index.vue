<template>
  <div>
    <ProfileHeader />
    <div class="grid-container"><ProfileCard /> <ProfileTimeline /></div>
    <div class="grid-container"><ProfileCard /> <ProfileTimeline /></div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: fit-content(50%) fit-content(50%) 1fr;
}
</style>
