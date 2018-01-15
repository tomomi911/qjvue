<template>
<div class="wrapper">
    <HeaderBar></HeaderBar>
    <div class="seize-seat-top"></div>   
    <!--列表展示-->
   <mu-list style="postition:absolute;height:100%;background:#EFF2F7;">
      <div v-for="(item,index) in paths">
        <div class="list">         
          <div class="list-title"></span><a :href="item.url"><strong>{{item.name}}</strong></a></div>
        </div>
      </div>
    </mu-list>
</div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue'
export default{
    components:{
        HeaderBar
    },
   data() {
     return {
       paths:[
         {
           name:'第1——10问',
           url:'http://mp.weixin.qq.com/s?__biz=MzI2OTk4ODE2NQ==&mid=100000019&idx=1&sn=d3b97d2c32e2efe6c195d066b567701d&chksm=6ad6b9395da1302fd729479f81460e311c915d0f940f84cac4aa43fdd97eabfa276fc39bb06a&scene=18#wechat_redirect'
         },
         {
           name:'第11——20问',
           url:'http://mp.weixin.qq.com/s?__biz=MzI2OTk4ODE2NQ==&mid=100000019&idx=2&sn=0690e9804c3e3071c40a5b2118d9269b&chksm=6ad6b9395da1302f11b3c8afe218324b3dcaaf661050da3cfc5eee5366c1892d03ecbf4817c7#rd'
         },
         {
           name:'第21——30问',
           url:'http://mp.weixin.qq.com/s?__biz=MzI2OTk4ODE2NQ==&mid=100000019&idx=3&sn=279b7ee79f116a6edf08afcf5f33462b&chksm=6ad6b9395da1302f0300fe08ddda89b617fda3800ad40182a0bfc04c2027eb86d08fd2c2822a#rd'
         },
         {
           name:'第41——50问',
           url:'http://mp.weixin.qq.com/s?__biz=MzI2OTk4ODE2NQ==&mid=100000019&idx=5&sn=f7685ad487442998f2bcba42284e2d1e&chksm=6ad6b9395da1302f92943719792e55197b96ba2aa960b8e7e881f60514c19d5fa16cba17b3bd#rd'
         },
         {
           name:'第51——60问',
           url:'http://mp.weixin.qq.com/s?__biz=MzI2OTk4ODE2NQ==&mid=100000019&idx=6&sn=d4d56bfd5158444e34d137528c8f3aec&chksm=6ad6b9395da1302f7e1272f734d5ab9a229788533de4f01ed40f795f497d868c701bc2ff2f42#rd'
         },
         {
           name:'第61——70问',
           url:'http://mp.weixin.qq.com/s?__biz=MzI2OTk4ODE2NQ==&mid=100000019&idx=7&sn=25fa2e19d8ab90671bc97981ad16befe&chksm=6ad6b9395da1302fadd3ac453c3129b88cc1b7323f2f5b78a5ff545b2118e538c9d5d62bda7a#rd'
         },
         {
           name:'第71——80问',
           url:'http://mp.weixin.qq.com/s?__biz=MzI2OTk4ODE2NQ==&mid=100000084&idx=1&sn=b5ee86cac82489d6479ba395660f59a6&chksm=6ad6b97e5da13068a542bf8f20541965657889534f03b372851304f1cae95b48562b9f796e80#rd'
         },
         {
           name:'第81——90问',
           url:'http://mp.weixin.qq.com/s?__biz=MzI2OTk4ODE2NQ==&mid=100000084&idx=2&sn=58812808daf620198b2e6d0ff3dd6f4e&chksm=6ad6b97e5da13068f1db2cf526b6373f5ed51aa4779354fd567adaae3adcefa1f09b86d2a496#rd'
         },
         {
           name:'第91——100问',
           url:'http://mp.weixin.qq.com/s?__biz=MzI2OTk4ODE2NQ==&mid=100000084&idx=3&sn=e69999465142b82307ffbd0eb51c3ef0&chksm=6ad6b97e5da130687ef1284642b25a8f580f214b9b6ae3570fef08ba0a63039166c2958d849b#rd'
         }
       ]
     }
   }
}

</script>

<style scoped lang="css">
.Top-Class{
      position:fixed;
      box-shadow: 0px 0px 0px !important;
      text-align: none;
      font-size: 1.2em;
      overflow:auto;
  }

.seize-seat-top{
      height: 12em;
  }


.topic-class{
    width: 100%;
    background-color: #fff;
    background-image: url(http://placeimg.com/828/196/any);
    background-size: 100% 100%;  
    -moz-background-size: 100% 100%;  
    -webkit-background-size: 100% 100%;
  }
  .topic-class-left{
    width: 10%;
    color: #fff;
    text-align:center;
  }
  .topic-class-right{
    width: 10%;
    text-align: center;
    color: #fff;
    padding-top: 0.5em;
    line-height: 5em;
  }
  .topic-class-content{
    width: 80%;
    border-left: 3px solid #fff;
    padding-left: 1em;
    color: #fff;
  }
  .topic-class-content p{
    margin: 0;
    padding: 0;
  }
  .topic-class-background{
    background-color: rgba(0,0,0,0.5);
    display: flex;
    width: 100%;
    height: 7em;
    padding: 1em 0 .5em 0;
  }
.topped{
    height: 100;
    overflow-y:auto;
    margin-top: .5em;
    background-color: #fff;
  }
  .topped p{
    font-size: 16px;
  }
.topped-header{
    height: 3em;
    line-height: 3em;
    padding-left: 0.5em;
  }
.topped-content{
    width: 100%;
    padding: 0.1em;
    display: flex;
    border-bottom: 1px solid rgba(0,0,0,0.12);
  }
.topped-content-text{
    width: 60%;
  }
.topped-content-img{
    padding-left: 10%;
    width: 40%;
  }
.content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
}
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
}
  
</style>