<template>
  <!--顶部tabs-->
  <div class=" HeaderTabs">
   
    <div class="title">
    <img src="../../static/img/title.jpg"/>
    <div style="position:absolute;top:8em;left:2em;color:#FFFFFF;"><h3>{{parentName}}</h3></div>
    </div>
   <!--<mu-tabs class="tabs" :value="activeTab" @change="handleTabChange">
      <mu-tab value="2" icon="domain" title="招标公告" />
      <mu-tab value="3" icon="public" title="澄清答疑" />
      <mu-tab value="4" icon="group" title="评标公示" />
    </mu-tabs> -->
    <div class="tabstyle">
      <div style="width:33%;float:left">
        <input id="tab1" type="radio" name="tabs" @change="handleTabChange(2)" checked>
        <label for="tab1">招标公告</label>
      </div>
      <div style="width:33%;float:left">
        <input id="tab2" type="radio" name="tabs" @change="handleTabChange(3)">
        <label for="tab2">澄清答疑</label>
      </div>
      <div style="width:33%;float:left">
        <input id="tab3" type="radio" name="tabs" @change="handleTabChange(4)">
        <label for="tab3">评标公示</label>
      </div>
    </div>   
   <div class="seize-seat-top"></div>   
    <!--列表展示-->
   <mu-list style="postition:absolute;height:100%;">
      <div v-for="(item,index) in items">
        <div class="list">         
          <router-link :to="{path:'/qjhome/content',query:{id:item.newId}}" tag="div" class="content">
          <div class="list-title">
              <strong>{{item.newName}}</strong>
            </div>
            <!--评论数和访问量和时间-->
            <div class="timer">
              <span>{{item.newFbtime }}</span>
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
  import axios from 'axios'
  export default {
     
    data() {
      return {
        typeCount:7,
        parentNumber:"5",
        parentName:"",
        loading: false,
        scroller: null,
        nomore: false,
        activeTab: '2', //当前选中tab项
        items: [],
        itemTab:[
          {name:'招标公告', num:2},
          {name:'澄清答疑', num:3},
          {name:'评标公示', num:4}
        ],
        styleObj: {
          backgroundColor: '#C5C5C7'
        },
        url: 'http://www.qjggzy.cn/qjztb/gy/wx_new_list.do?type=',
        page: 1,
        currentTab:"",
        currentIndex:0,
        isactive:false
      }
    },
    // 先导航和渲染组件，然后在组件的 created 钩子中获取数据
     // 组件创建完后获取数据，
    created() {
      this.parentNumber="" 
      this.parentName=""    
      this.parentNumber = this.$route.query.parentNumber
      this.parentName = this.$route.query.parentName
      this.typeCount = parseInt(this.parentNumber)+2
      this.getData()
    },
    // 挂载完毕
    mounted() {
      this.scroller = this.$el
    },
    methods: {
      toggleTab(tab,num) {
        this.currentIndex = tab // tab 为当前触发标签页的组件名
        },
      // tab切换
      handleTabChange(val) {
        this.page = 1 //切换tab，页数重置为第一页
        this.nomore = false //切换tab，重置
        this.activeTab = val
        this.typeCount = parseInt(val)+parseInt(this.parentNumber)
        this.url = 'http://www.qjggzy.cn/qjztb/gy/wx_new_list.do?type='+this.typeCount
     //   this.url = '/gy/wx_new_list.do?type='+this.typeCount
        this.getData()
      },
      // 数据获取
      getData() {
        let that = this
        that.url = 'http://www.qjggzy.cn/qjztb/gy/wx_new_list.do?type='+that.typeCount
     //   that.url = '/gy/wx_new_list.do?type='+that.typeCount
        axios.get(that.url+'&pageNumber='+that.page).then(function(response) {
          that.items = response.data.data
          // console.log(that.items)
          }).catch(function(error){
            console.log("获取信息失败")
          })
      },
      // 下拉刷新
      loadMore() {
        if (!this.nomore) {
          this.loading = true
          this.page += 1
          let url = this.url + '&pageNumber=' + this.page         
          let arr = []         
          setTimeout(() => {
            let that = this
            axios.get(url).then(function(response) {
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
      margin-top: 1rem;
      height: 7rem;
      position: absolute;
      top:3em;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-around;
    }
  }
  .title{
    position:absolute;
    z-index:999;
    width:100%;
    top:0em;
  }
  .title img{
    width:100%;
    height:13em;
  }
.tabstyle{
  position:absolute;padding-top:13em;width:100%;z-index:998;background:#FFFFFF;
}
.Top-Class{
      position:fixed;
      top: 0;
      box-shadow: 0px 0px 0px !important;
      text-align: center;
      font-size: 1.2em;
  }  
.seize-seat-top{
        height: 17em;
    }
  .mu-tab-link,
  .mu-tab-active {
    white-space: nowrap;
  }

  .list {
    display: flex;
    border-bottom: 0.6rem solid #EFF2F7;
   
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
  
  body {
  background: #FFEFD3;
  font-family: "Open Sans", "Arial";
}
main {
  background: #FFF;
  width: 500px;
  margin: 50px auto;
  padding: 10px 30px 80px;
  box-shadow: 0 3px 5px rgba(0,0,0,0.2);
}
p {
  font-size: 13px;
}
input, section {
  clear: both;
  padding-top: 8px;
  display: none;
}
label {
  font-weight: bold;
  font-size: 14px;
  display: block;
  float: left;
  width:100%;
  padding: 1em 1.5em;
  border-top: 2px solid transparent;
  border-right: 1px solid transparent;
  border-left: 1px solid transparent;
  border-bottom: 1px solid #DDD;
}
label:hover {
  cursor: pointer;
  text-decoration: underline;
}
#tab1:checked ~ #content1, #tab2:checked ~ #content2, #tab3:checked ~ #content3, #tab4:checked ~ #content4 {
  display: block;
}
input:checked + label {
  border-top-color: #FFB03D;
  border-right-color: #DDD;
  border-left-color: #DDD;
  border-bottom-color: transparent;
  text-decoration: none;
}
</style>
