<template>
  <div class="header-content">
    <div
      v-animateonscroll="{ enterClass: 'fadeinright', leaveClass: 'fadeout' }"
      class="fadein-right"
    >
      <span class="header-text">Thanchatip</span>
    </div>
    <div
      v-animateonscroll="{
        enterClass: 'zoomin animation-duration-1000',
        leaveClass: 'fadeout',
      }"
      class="fadein-left"
    >
      <span class="header-text">Portfolio</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Mukta:wght@200;300;400;500;600;700;800&display=swap');

.header-content {
  display: flex;
  flex-direction: column;
  //align-items: center;
}

.fadein-left {
  animation: fadeinleft;
  animation-duration: 5s;
}

.fadein-right {
  animation: fadeinright;
  animation-duration: 5s;
}

.header-text {
  font-size: 19vw;

  font-family: 'Inconsolata', monospace;
  font-weight: bold;
  //font-style: italic;
  color: #000000;
}
</style>
