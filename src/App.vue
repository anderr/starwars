<template>
  <div id="app" class="app">
    <div class="app__globalloader" v-if="globalLoader"></div>

    <div class="app__view">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['globalLoader'])
  }
}
</script>

<style lang="scss">
// последний vue-cli не работает с saas-loader, поэтому импортировал здесь чтобы не костылить
@import './assets/styles/vars.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}

@keyframes loading {
  0% { left: 0; right: 100%; }
  50% { left: 0; right: 0; }
  100% { left: 100%; right: 0; }
}

.app {
  position: relative;
  height: 100%;

  &__globalloader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 5px;
    background-color: $colorLightBlue;

    &:after {
      content: '';
      position: absolute;
      display: block;
      height: 100%;
      background-color: $colorBlue;
      left: 0%;
      right: 100%;

      animation: loading 2s ease infinite;
    }
  }

  &__view {
    height: 100%;
  }
}
</style>
