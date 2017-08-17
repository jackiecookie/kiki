<template>
  <div>
    <head_top title="今天的菜谱"></head_top>
    <section v-load-more="loadMoreData" v-if="cookBook.length" class="cookBookList">
      <router-link to="" tag="article" v-for="item in cookBook" class="recipe">
        <div>
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

.cookBookList{
  padding-top: 2.35rem;
  .recipe{
    font-size: 12px;
    margin: 25px 0;
  }
  .imgCover{
    height: 220px;
  }
  .content{
    width: 100%;
    padding: 15px 0 0;
    .recipe-name{
      ine-height: 1.4;
      font-size: 20px;
    }
  }
}

</style>
