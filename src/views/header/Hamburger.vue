<script setup>

</script>

<template>
  <div class="hamburger">
    <span class="hamburger__line"></span>
    <span class="hamburger__line"></span>
    <span class="hamburger__line"></span>
  </div>
</template>

<style scoped>

.hamburger {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 1.6rem;
  width: 1.8rem;
  cursor: pointer;
}
.hamburger__line {
  position: relative;
  width: 100%;
  height: 0.1rem;
  background-color: #fff;
  border-radius: 0.2rem;
}

</style>