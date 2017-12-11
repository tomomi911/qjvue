<template>
  <!--顶部tabs-->
  <div>
    <mu-appbar class="Top-Class" :title="title">
    </mu-appbar>
   <div class="seize-seat-top"></div>
    <!--<mu-row>
        <mu-col v-for="item in LaBel_Data" :key="item.type" class="label" width="40" tablet="40" desktop="40">
            <div class="label-content" :style="{ 'background-color': item.color }" @click="RunToLabel(item.type)" > 
                <p>{{item.name}}</p>
            </div>
        </mu-col>
    </mu-row>-->
     <div class="info-bar demo-raised-button-container">
        <ul class="clearfix">
            <li v-for="item in LaBel_Data" :key="item.type">
              <router-link :to="{path:'/qjhome/contextTabs',query:{parentNumber:item.type,parentName:item.name}}">
            <img class="info-img" :src="item.icon" /><p>{{item.name}}</p></router-link></li>
        </ul>
      </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        loading: false,
        inloading: false,
        scroller: null,
        nomore: false,
        activeTab: 'all', //当前选中tab项
        items: [],
        styleObj: {
          backgroundColor: '#C5C5C7'
        },
        title:"交易信息",
        LaBel_Data:[
          {          
            name: "工程建设",
            color: "#79f2af",
            type: "5",
            icon: "./static/img/project.png"
          },
          {          
            name: "政府采购",
            color: "#f28b79",
            type: "8",
            icon: "./static/img/trade.png"
          },
          {          
            name: "产权交易",
            color: "#7989f2",
            type: "11",
            icon: "./static/img/deposit.png"
          },
          {          
            name: "土地交易",
            color: "#adf279",
            type: "14",
            icon: "./static/img/arrange.png"
          },
          {          
            name: "其他项目",
            color: "#f279d0",
            type: "17",
            icon: "./static/img/other.png"
          }
      ]     
        }
      },
    // 先导航和渲染组件，然后在组件的 created 钩子中获取数据
     // 组件创建完后获取数据，
    created() {
     
    },
    // 挂载完毕
    mounted() {
    
    },
    methods: {
      handleTabChange(val) {
        this.page = 1 //切换tab，页数重置为第一页
        this.nomore = false //切换tab，重置
        this.activeTab = val
      },
      RunToLabel(label){          
          this.$router.push({path:'/qjhome/contextTabs',query:{parentNumber:label}})
      }
    }

  }
</script>

<style scoped lang="css">
    .Top-Class{
      position:fixed;
      top: 0;
      box-shadow: 0px 0px 0px !important;
      text-align: center;
      font-size: 1.2em;
  }
    .seize-seat-top{
        height: 56px;
    }
    .label{
        padding: 0.5em 1em 0.5em 1em;
    }
    .label-content{
        margin-top: 0.1em;
        width: 80%;
        height: 4em;
        border-radius: 0.6em;
        background-color: #000;
        text-align:center;
        color: #fff;
    }
    .label-content p{
        padding-top: 1.3em;
        font-size: 1.3em;
    }   

    .demo-raised-button-container{
      display:flex;
      align-items:baseline;
      flex-wrap:wrap;
    }
    .demo-raised-button {
      margin: 12px;
    }
  /*交易信息 */
    .info-bar{
    width: 100%;
}
.info-bar ul li{
    width: 33%;
    height: 110px;
    float: left;
    font-size: 14px;
    color: #333;
    text-align: center;
    list-style-type:none;
}
.info-bar .info-img{
    width: 57px;
    height: 57px;
    vertical-align: middle;
    margin:23px auto 0;
    display:block;
}
.tag{
    margin-top: 10px;
}
.clearfix::after{
    content: "";
    height: 0;
    clear: both;
    visibility: hidden;
    display: block;
}
</style>
