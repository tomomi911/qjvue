<template>
<div class="HeaderTabs">
<!--列表展示-->
<mu-list style="postition:absolute;height:100%;background:#EFF2F7;">
    <div v-for="(item,index) in items">
    <div class="list">       
        <!-- <router-link :to="{path:'/qjhome/people',query:{user:item.author.loginname}}" :src="item.author.avatar_url" tag="img" alt="user"></router-link>-->
        <router-link :to="{path:'/qjhome/content',query:{id:item.newId}}" tag="div" class="content">
        <div class="list-title">            
            <strong>{{item.newName}}</strong>
        </div>
        <!--评论数和访问量和时间-->
        <div class="timer">
            <span>{{item.newFbtime}}</span>
        </div>
        </router-link>
    </div>
    </div>
    <!--若下拉加载没内容了 显示这个 -->
    <p class="nomore" v-show="nomore">已没有更多内容</p>
</mu-list>
<!--若无item 显示这个  -->
    <div v-if="!items.length">
      <strong>暂无信息</strong>
    </div>
 <!--下拉加载更多的组件-->
<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" />
</div>
</template>

<script>

  export default{
      mounted(){
         this.scroller = this.$el
        },
      created(){
          this.getData()
      },
      data(){
          return {
              msg:'hello',
              nomore:false,
              items:[],
              loading: false,
              scroller: null,              
              //url: 'http://www.qjggzy.cn/qjztb/gy/wx_new_list.do?type=31',
              url: '/gy/wx_new_list.do?type=31',
              page:1              
          }
      },
      methods:{
           // 下拉刷新
            loadMore() {
                if (!this.nomore) {
                this.loading = true
                this.page += 1
                let url = this.url + '&pageNumber=' + this.page
                let arr = []                
                setTimeout(() => {
                    let that = this
                    this.axios.get(url).then(function(response) {
                    arr = response.data.data
                    if (arr.length === 0) {
                        that.loading = false
                        that.nomore = true
                        return
                    }
                    that.items = [...that.items, ...arr]
                    arr = []
                    })
                    this.loading = false
                    }, 1000)
                }
            },
            // 数据获取
            getData() {
                let that = this 
                
                let url = that.url + '&pageNumber=' + this.page                                   
                this.axios.get(url).then(function(response) {
                that.items = response.data.data
                // console.log(that.items)
                })
            }
        }
  }  
</script>

<style scoped lang="scss">
  @import '../assets/sass/_base.scss';
  .HeaderTabs {
    overflow: auto;
    height: 100vh;
    .tabs {
      margin-top: 4rem;
      height: 5rem;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-around;
    }
  }

  .mu-tab-link,
  .mu-tab-active {
    white-space: nowrap;
  }

   .list {
    display: flex;
    border-bottom: 0.1rem solid #EFF2F7;
    background: #FFFFFF;
    margin:0.2rem 1rem;
    width:96%;
    padding:1rem;
    >img {
      width: 3rem;
      height: 3rem;
      margin-right: 1rem;
    }
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .list-title {
        text-align: left;
        >span {
          background-color: #369219;
          color: #fff;
          padding: 0.2rem;
          border-radius: 0.2rem;
          font-size: 1rem;
          margin-right: 0.5rem;
        }
        strong {
          font-size: 1.4rem;
        }
      }
      .timer {
        display: flex;
        justify-content: space-between;
        color: $gray;
        padding-top: 1rem;
      }
    }
  }
  .nomore {
    text-align: center;
    padding: 1rem 0;
  }
</style>