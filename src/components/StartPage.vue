<template>
  <div class="start">
    <button class="start__btn" type="button" @click="$router.push({ name: 'home' })">Узнать все</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'May the force be with you'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/vars.scss';

.start {
  background: url('../assets/wall.jpg');
  width: 100%;
  height: 100%;
  background-size: cover;

  &__btn {
    font-family: "Sw_font";
    color: #FFF;
    height: 60px;
    border-radius: 6px;
    background: $colorDark;
    font-size: 18px;
    letter-spacing: 2px;
    outline: none;
    border: none;
    padding: 0 40px;
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translateX(-50%);
    box-shadow: 0 0 25px 1px rgba(139, 0, 0, 0.1);
    cursor: pointer;
    border: 1px solid rgba(139, 0, 0, 0);
    transition: box-shadow 1s, border .5s;

    &:hover {
      box-shadow: 0 0 35px 10px rgba(140, 0, 0, 0.3);
      border: 1px solid rgba(139, 0, 0, 0.6);
      transition: box-shadow .7s, border .3s;
    }
  }
}
</style>
