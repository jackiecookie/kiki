<template>
  <div>
    <head_top title="今天的菜谱"></head_top>
    <div class="with-padding">
      <section v-load-more="loadMoreData" v-if="cookBook.length" class="cookBookList">
        <router-link to="" tag="article" v-for="item in cookBook" class="recipe">
          <div class="pos-r plain">
            <div class="imgCover">
              <img :src="item.imageUrl" :alt='item.recipeName'>
            </div>
            <div class="content">
              <div class="recipeName">
                {{item.recipeName}}
              </div>
            </div>
          </div>
        </router-link>
      </section>
    </div>

  </div>

</template>
<script>
import headTop from '../../components/header'
import {getCookBookList} from '../../service/cookbookService'
import {loadMore} from '../../mixin'

export default {
  components: {
    'head_top': headTop
  },
  data () {
    return {
      cookBook: []
    }
  },
  mixins: [loadMore],
  mounted () {
    this.initData()
  },
  methods: {
    async initData () {
      let res = await getCookBookList()
      this.cookBook = [...res]
    },
    async loadMoreData () {
      await getCookBookList()
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../../style/mixin';
.with-padding{
  padding: 0 20px;
}
.cookBookList{
  padding-top: 2rem;
  .recipe{
    font-size: 12px;
    margin: 25px 0;

  }
  .imgCover{
    max-width: 100%;
    height: 220px;
    position: relative;
    overflow: hidden;
    width: 100%;
    img{
      position: absolute;
      top: -9999px;
      left: -9999px;
      right: -9999px;
      bottom: -9999px;
      margin: auto;
      width: 100%;
      height: auto;
    }
  }
  .content{
    width: 100%;
    padding: 15px 0 0;
    .recipeName{
      line-height: 1.4;
      font-size: 20px;
    }
  }
}

</style>
