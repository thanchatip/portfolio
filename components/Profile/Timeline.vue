<template>
  <div class="card">
    <Timeline :value="events">
      <template #opposite="slotProps">
        <small class="text-year">{{ slotProps.item.year }}</small>
      </template>
      <template #content="slotProps">
        <Card class="timeline-card fadein-right">
          <template #title>
            <span class="title">{{ slotProps.item.company }}</span>
          </template>
          <template #subtitle>
            <span class="subtitle">{{ slotProps.item.position }}</span>
          </template>
          <template #content>
            <div v-html="slotProps.item.task" />
          </template>
        </Card>
      </template>
    </Timeline>
  </div>
</template>

<script lang="ts" setup>
const events = ref([
  {
    company: 'Mae Fah Luang Foundation',
    position: 'Junior Fullstack Developer',
    year: '2020 - 2022 ',
    task: '<ul><li>Assist team to collect and design project technical flow from user requirement</li><li>Develop web using VueJS , NodeJS and MongoDB</li><li>Maintenance exist web applications</li><li>Support back-office user (export data report)</li></ul>',
  },
  {
    company: 'Thanachart Securities',
    position: 'Junior Fullstack Developer',
    year: '2022 - Now',
    task: '<ul><li>Working with the innovation development team.</li><li>Collaborated with team to design project structures from user requirements.</li><li>Developed web applications follow by assigned tasks using Nuxtjs and Go.</li><li>Collaborated with team to debug and refactor codebase.</li><li>Implemented a scalable content management system (CMS) using Nuxtjs and Golang</li></ul>',
  },
]);
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

.timeline-card {
  margin-top: 20px;
  font-family: 'IBM Plex Sans', sans-serif;
}

.title {
  color: #52057b;
}

.subtitle {
  color: #892cdc;
}

:deep(.p-card) {
  background: #f8efff;
}

.fadein-right {
  animation: fadeinright;
  animation-duration: 5s;
}

.text-year {
  font-size: 14px;
  font-weight: bold;
  color: #892cdc;
}

:deep(ul) {
  color: #bc6ff1;
}
</style>
