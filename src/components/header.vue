<template>
    <header id="header_top">
      <icon name="back" :scale="7" v-if="goBack" @click="$router.go(-1)"></icon>
      <span class="head_title">
        {{title}}
      </span>
    </header>
</template>
<script>
  export default {
    props: ['title', 'goBack']
  }
</script>

<style lang="scss" scoped>
  @import '../style/mixin';
  #header_top{
    background-color: $fc;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    @include wh(100%, 1.95rem);
    .head_title{
      left: 40%;
      position: absolute;
    }
  }
</style>
