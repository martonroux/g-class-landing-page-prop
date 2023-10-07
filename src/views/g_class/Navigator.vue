<script setup>

</script>

<template>
  <div class="navigator" :class="{'navigator--active': showNavigator}">
    <span class="navigator__bar" :style="{height: barHeight}" />
    <span class="navigator__selector" :style="{transform: transformSelector, height: selectorHeight}"/>
    <div class="navigator__button-list" id="navButtonList">
      <button class="navigator__button" v-for="(text, index) in listButtons" @click="onNavigatorClick(index)" :id="`navButtonIndex${index}`">
        <span class="navigator__button__text" :class="{'navigator__button__text--active': index === active}">
          {{ text }}
        </span>
      </button>
    </div>
    <button class="navigator__show-button" :class="{'navigator__show-button--active': showNavigator}" @click="toggleShowNavigator"
    :style="{
      transform: transformShowButton
    }">
      <img class="navigator__show-button__logo" src="/logos/Arrow-Next-Small.svg" :alt="`arrow ${showNavigator ? 'left' : 'right'}`" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listButtons: [
          'G-Class',
          'Buy Online',
          'Book a Test Drive',
          'Configurator',
          'Locate a Retailer',
          'Contact Us'
      ],
      active: 0,
      barHeight: '0',
      transformSelector: 'translate(-1px, -0.5rem)',
      selectorHeight: '0',
      showNavigator: false,
      transformShowButton: 'translate()',
    }
  },
  mounted() {
    this.changeBarHeight();
    this.setSelectorHeight();
    this.setTranslateShowButton();
  },
  methods: {
    onNavigatorClick(index) {
      this.active = index;
      this.moveSelector();
    },
    changeBarHeight() {
      const navButtonList = document.getElementById('navButtonList');
      if (!navButtonList) return;

      this.barHeight = (10 + navButtonList.offsetHeight).toString() + 'px';
    },
    setSelectorHeight() {
      const actButton = document.getElementById(`navButtonIndex${this.active}`);

      if (!actButton) return;

      this.selectorHeight = `calc(${actButton.offsetHeight}px + 1rem)`;
    },
    moveSelector() {
      let totHeight = 0;

      for (let i = 0; i < this.listButtons.length && i < this.active; i++) {
        const actButton = document.getElementById(`navButtonIndex${i}`);

        if (!actButton) return;

        totHeight += actButton.offsetHeight;
      }
      this.transformSelector = `translate(-1px, calc(${totHeight}px + 2rem * ${this.active} - 0.5rem))`;
      this.setSelectorHeight();
    },
    toggleShowNavigator() {
      this.showNavigator = !this.showNavigator;
    },
    setTranslateShowButton() {
      const navButtonList = document.getElementById('navButtonList');

      if (!navButtonList) {
        setTimeout(() => {
          this.setTranslateShowButton();
        }, 100);
        return;
      }

      this.transformShowButton = `translate(calc(${navButtonList.offsetWidth}px + 1rem), calc(${navButtonList.offsetHeight / 2}px - 50%))`
      console.log(this.transformShowButton);
    }
  }
}
</script>

<style scoped>

.navigator {
  height: fit-content;
  width: fit-content;

  display: flex;
  flex-direction: row;
  gap: 0.6rem;

  padding: 0.5rem 0.3rem;

  border: 1px solid transparent;
  border-radius: 10px;

  transform: translateX(2rem);

  transition: transform 0.5s ease;
}
.navigator__button {
  background-color: transparent;
  border: none;

  cursor: pointer;

  font-size: 1rem;
  color: var(--white);
  font-family: var(--font-family);
  font-weight: 400;

  width: 120px;
  text-align: left;
}
.navigator__button-list {
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  align-self: center;

  gap: 2rem;
}
.navigator__bar {
  position: relative;
  top: 0;
  left: 0;
  display: block;

  /* Height defined in JS */
  width: 2px;
  border-radius: 0.2rem;

  background-color: var(--white);
}
.navigator__button__text {
  transition: font-weight 0.1s ease-in-out;
}
.navigator__button__text--active {
  font-weight: 600;
}
.navigator__selector {
  display: block;
  position: absolute;

  height: calc(1rem + 30px);
  width: 4px;

  background-color: var(--white);

  border-radius: 0.2rem;

  transition: transform 0.4s ease, height 0.4s ease;
}
.navigator__show-button {
  position: absolute;

  width: fit-content;
  height: 60px;
  background-color: rgba(0, 0, 0, 70%);

  border-radius: 0 5px 5px 0;

  border: none;
  cursor: pointer;

  display: none;
}
.navigator__show-button__logo {
  height: 30px;
  width: 30px;
}

@media (max-width: 1000px) {
  .navigator {
    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 30%);
    transform: translateX(calc(-100%));
  }
  .navigator__button__text {
    color: var(--black);
  }
  .navigator__bar,
  .navigator__selector {
    background-color: var(--black);
  }
  .navigator--active {
    transform: translateX(2rem);
  }
  .navigator__show-button {
    display: block;
  }
  .navigator__show-button--active > .navigator__show-button__logo {
    transform: rotate(180deg);
  }
}

</style>