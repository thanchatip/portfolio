<template>
  <div class="custom-cursor"></div>
</template>

<script setup></script>

<style scoped>
body {
  cursor: none; /* Hide the default cursor */
}

.custom-cursor {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  pointer-events: none; /* Prevent cursor from blocking other elements */
  transform: translate(-50%, -50%);
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.5);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
