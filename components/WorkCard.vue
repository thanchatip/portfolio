<template>
  <div v-for="data in datas">
    <Card>
      <template #title>
        <span class="title">{{ data.company }} </span>
      </template>
      <template #content>
        <div class="sub-title">
          {{ data.position }} <span class="year">({{ data.year }})</span>
        </div>
        <hr class="divider" />
        <div class="content" v-html="data.task"></div>
      </template>
    </Card>
  </div>
</template>

<script lang="ts" setup>
const datas = ref([
  {
    company: "Mae Fah Luang Foundation",
    position: "Junior Fullstack Developer",
    year: "2020 - 2022 ",
    task: "<ul><li>Assist team to collect and design project technical flow from user requirement</li><li>Develop web using VueJS , NodeJS and MongoDB</li><li>Maintenance exist web applications</li><li>Support back-office user (export data report)</li></ul>",
  },
  {
    company: "Thanachart Securities",
    position: "Junior Fullstack Developer",
    year: "2022 - Now",
    task: "<ul><li>Working with the innovation development team.</li><li>Collaborated with team to design project structures from user requirements.</li><li>Developed web applications follow by assigned tasks using Nuxtjs and Go.</li><li>Collaborated with team to debug and refactor codebase.</li><li>Implemented a scalable content management system (CMS) using Nuxtjs and Golang</li></ul>",
  },
]);

const title = computed(() =>
  datas.value.map((item) => `${item.company} ${item.year}`)
);
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");

.work-card {
  //margin: 10px 0;
}

:deep(.p-card) {
  //margin: 20px;
  background: #7000ff;
  //border: 1px solid black;

  border-radius: 8px;
  font-family: "Cabin", sans-serif;
  height: 400px;
  border-radius: 15px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 20px 10px;
  display: flex;
  position: relative;
  overflow: hidden;
}

.title {
  //font-family: "Crimson Text", serif;
  font-size: 25px;
  font-weight: bold;
  color: #ffff;
}

.year {
  font-size: 18px;
  color: #fff;
}

.sub-title {
  font-size: 18px;
  color: #fff;
}

.content {
  color: #ffff;
}

.divider {
  margin: 20px 0 30px 0;
  opacity: 80%;
}
</style>
