<template>
  <div class="notfound">
    <img src="../../assets/notfound.png" class="notfound__droid" alt="" />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.notfound {
  width: 100%;
  height: 100%;
  background: #499ce8;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &__droid {
    width: 669px;
    height: 340px;

    @media (max-width: 670px) {
      width: 100%;
      height: auto;
    }
  }
}

</style>
