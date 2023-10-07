<script setup>
import MyHeader from "@/views/header/Header.vue";
</script>

<template>
  <title>G-Class Landing Page, Portfolio ROUX Marton</title>
  <header>
    <MyHeader />
  </header>

  <main>
    <router-view />
  </main>
</template>

<style scoped>

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: fit-content;
}

</style>
