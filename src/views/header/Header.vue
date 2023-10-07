<script setup>
import Hamburger from "@/views/header/Hamburger.vue";
</script>

<template>
  <div class="header">
    <div class="left">
      <Hamburger class="hamburger" />
      <div class="search" @click="onSearchClick">
        <img class="logo-search" src="/logos/Search-SVG.svg" alt="search icon" />
        <input id="searchInput" class="search__input" placeholder="Search...">
      </div>
    </div>
    <img class="logo-mercedes" src="/logos/Mercedes-Benz.svg" alt="Mercedes logo" />
    <div class="right">
      <p class="right__lang">EN</p>
      <button class="right__button">
        <img class="logo-account" src="/logos/Account.svg" alt="Account">
        <span class="right__button__text">My G-Class</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onSearchClick() {
      document.getElementById("searchInput").focus();
    }
  }
}
</script>

<style scoped>

.header {
  display: grid;
  grid-template-columns: 1fr 4rem 1fr;
  align-items: center;

  grid-template-areas: "left middle right";

  padding: 1rem 2rem 1rem 2rem;

  backdrop-filter: blur(10px);
}
.logo-search {
  height: 1.5rem;
  width: 1.5rem;
}
::placeholder {
  color: var(--white);
  opacity: 1; /* Firefox */
}
::-ms-input-placeholder { /* Edge 12 -18 */
  color: var(--white);
}
.search__input {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 200;
  background-color: transparent;
  border: none;

  color: var(--white);
}
.search__input:focus {
  outline: none;
}
.search {
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 0.7rem;

  cursor: pointer;
}
.left {
  grid-area: left;

  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 6rem;
}
.logo-mercedes {
  height: 3rem;
  width: 3rem;

  justify-self: center;
}
.right {
  grid-area: right;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;

  gap: 2rem;
}
.logo-account {
  height: 1.5rem;
  width: 1.5rem;
}
.right__lang {
  cursor: pointer;
}
.right__button {
  background-color: transparent;
  border: none;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 0.5rem;
}
.right__button__text {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 200;
  color: var(--white);
}

@media (max-width: 900px) {
  ::placeholder {
    opacity: 0;
  }
  .left {
    gap: 1.5rem;
    flex-direction: row;
  }
  .right__button__text {
    display: none;
  }
  .right {
    gap: 1rem;
  }
}

@media (max-width: 650px) {
  .search {
    display: none;
  }
}

</style>