<template>
  <div id="app" class="app">
    <div class="app__globalloader">
    </div>

    <div class="app__view">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.app {
  position: relative;
  height: 100%;

  &__globalloader {

  }

  &__view {
    height: 100%;
  }
}
</style>
