<template>
  <Card class="profile-card">
    <template #title>
      <span class="title">About Me</span>
    </template>
    <template #content>
      <div class="content">
        Results-driven Software Engineer with <strong>4+ years</strong> of
        comprehensive experience in
        <strong>Frontend and Backend</strong> Development. Skilled in developing
        <strong> web applications </strong>that enhance organization
        functionality. Passionate about learning new technologies and applying
        them to solve complex problems efficiently.
      </div>
    </template>
  </Card>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

.profile-card {
  margin: 20px;
  //background: #f8efff;
  font-family: 'IBM Plex Sans', sans-serif;
}

.title {
  color: #52057b;
}

.content {
  color: #bc6ff1;
}
</style>
