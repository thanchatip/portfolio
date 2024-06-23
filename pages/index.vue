<template>
  <div>
    <div class="section header">
      <ProfileHeader />
      <ProfileSubHeader />
    </div>

    <div class="section">
      <ProfileCard />
      <div
        v-animateonscroll="{
          enterClass: 'animate-fadein',
          leaveClass: 'animate-fadeout',
        }"
        class="animate-duration-1000"
      >
        <div class="section-title">Work Experience</div>
      </div>

      <div class="grid-container">
        <WorkCard />
      </div>
    </div>

    <div class="section-title">Skill</div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.section {
  height: 100vh;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.grid-container {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
}

.section-title {
  font-family: "Inconsolata", monospace;
  font-size: 5vw;
  text-align: center;
  font-weight: 600;
  margin: 50px 0;
}

.fadein-right {
  animation: scalein;
  animation-duration: 5s;
}
</style>
