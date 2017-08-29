<template>
 <section class="buy_cart_container">
   <div class="cart_icon_container">
     <span v-if="cartCount" class="cart_list_length">
       {{cartCount}}
     </span>
     <icon name="basket" scale="3" ></icon>
   </div>
 </section>
</template>
<script>
  export default {
    data () {
      return {
        cartCount: 0
      }
    }
  }
</script>

<style lang="scss" scoped>

  @import '../../style/mixin';
  .buy_cart_container{
    position: fixed;
    top: .7rem;
    left: 0;
    z-index: 113;
    display: flex;
    width: 100%;
    height:1.95rem;
    .cart_list_length{
      position: absolute;
      top: -.2em;
      right: -.25rem;
      background-color: #ff461d;
      line-height: .6rem;
      text-align: center;
      border-radius: 50%;
      border: .025rem solid #ff461d;
      min-width: .7rem;
      height: .7rem;
      font-size: .5rem;
      color: #fff;
      font-family: Helvetica Neue,Tahoma,Arial;
    }
    .cart_icon_container{
      display: flex;
      position: absolute;
      padding: .2rem;
      border: .18rem solid #444;
      border-radius: 50%;
      right: .5rem;
      top: -.7rem;
    }
  }

</style>
