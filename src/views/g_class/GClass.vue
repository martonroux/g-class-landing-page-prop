<script setup>
import Navigator from "@/views/g_class/Navigator.vue";
</script>

<template>
  <div class="g-class">
    <h1 class="g-class__title"> <span class="h3">Mercedes-Benz</span> <br /> G-CLASS </h1>
    <Navigator class="g-class__navigator" />
  </div>
</template>

<style scoped>

.g-class {
  background-image: url("/images/g-class-background.webp");
  background-size: cover;
  background-position: center;

  height: 100vh;

  padding-top: 10rem;
}
.g-class__title {
  font-family: var(--font-family-corporate-a);
  font-weight: 100;
  letter-spacing: 8px;

  margin-top: 0;

  position: absolute;
  top: 0;
  right: 0;

  transform: translate(-10vw, 50%);
}
.h3 {
  letter-spacing: 2px;
}
.g-class__navigator {
  position: absolute;
}

@media (max-width: 1000px) {
  .g-class {
    background-image: url("/images/g-class-background-2.webp");
  }
  .g-class__title {
    left: 0;
    right: auto;
    transform: translate(2rem, 100%);

    font-weight: 400;
  }
  h1 {
    color: black;
    font-size: var(--h2-font-size);
  }
  .h3 {
    font-size: var(--h4-font-size);
  }
  .g-class__navigator {
    margin-top: 6rem;

  }
}

</style>