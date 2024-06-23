<template>
  <div class="sub-header-content">
    <div class="text">Software Developer</div>
    <div class="text right">Since 2020</div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Mukta:wght@200;300;400;500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=DM+Serif+Display:ital@0;1&family=Nabla&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
.sub-header-content {
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
  //align-items: center;
}

.scale-in-header {
  //animation: scalein;
  //animation-duration: 1s;
}

.text {
  font-size: 35px;
  font-family: "Crimson Text", serif;
  // font-family: "Inconsolata", monospace;
  font-weight: 300;
  font-style: italic;
  color: #754af6; //#0156cf;
}
.right {
  text-align: right;
}
</style>
