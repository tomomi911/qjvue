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
           name:'【原创】招投标100问(1-6)',
           url:'http://mp.weixin.qq.com/s?__biz=MzI2OTk4ODE2NQ==&mid=100000249&idx=1&sn=8846565debecefb26e0078705c8fe79a&chksm=6ad6b9d35da130c5373d606e604962dc29d0700bb6b4e4023fb57e7a1f48e82cbe6471b98bdf#rd'
         },
         {
           name:'【原创】招投标100问(7-12)',
           url:'http://mp.weixin.qq.com/s?__biz=MzI2OTk4ODE2NQ==&mid=100000249&idx=2&sn=f3e21e8e04b3d8fbc5195b52ec76b3e5&chksm=6ad6b9d35da130c5529f502ead8129fad86d975fa49c92d6565aa5086ad784678b6d95288dab#rd'
         },
         {
           name:'【原创】招投标100问(13-18)',
           url:'http://mp.weixin.qq.com/s?__biz=MzI2OTk4ODE2NQ==&mid=100000249&idx=3&sn=981f0727fda938810a98fba318caeafe&chksm=6ad6b9d35da130c54a956bf02af1722d2ba3a59445af6f2bc20fdabd112615629e4d0f6afffc#rd'
         },
         {
           name:'【原创】招投标100问(19-24)',
           url:'https://mp.weixin.qq.com/s?__biz=MzI2OTk4ODE2NQ==&mid=100000249&idx=4&sn=0379e2851163129b1a6ad0e0f9ac2108&pass_ticket=yDfHqWk%2B7MexEmDK81C0kikYOShOYL0bBInRj5EccLqux8Jt5NzP%2B%2BjqHI2tqJPh'
         },
         {
           name:'【原创】招投标100问(25-30)',
           url:'https://mp.weixin.qq.com/s?__biz=MzI2OTk4ODE2NQ==&mid=100000249&idx=5&sn=e5eed20028ed669c2d90c796cd256713&pass_ticket=yDfHqWk%2B7MexEmDK81C0kikYOShOYL0bBInRj5EccLqux8Jt5NzP%2B%2BjqHI2tqJPh'
         },
         {
           name:'【原创】招投标100问(31-36)',
           url:'https://mp.weixin.qq.com/s?__biz=MzI2OTk4ODE2NQ==&mid=100000249&idx=6&sn=c907c0e98280c6bd89bb29b33b9b079f&pass_ticket=yDfHqWk%2B7MexEmDK81C0kikYOShOYL0bBInRj5EccLqux8Jt5NzP%2B%2BjqHI2tqJPh'
         },
         {
           name:'【原创】招投标100问(37-42)',
           url:'https://mp.weixin.qq.com/s?__biz=MzI2OTk4ODE2NQ==&mid=100000249&idx=7&sn=c5fff4b22b7271951c1b691c9f153807&pass_ticket=yDfHqWk%2B7MexEmDK81C0kikYOShOYL0bBInRj5EccLqux8Jt5NzP%2B%2BjqHI2tqJPh'
         },
         {
           name:'【原创】招投标100问(43-48)',
           url:'https://mp.weixin.qq.com/s?__biz=MzI2OTk4ODE2NQ==&mid=100000249&idx=8&sn=851b201dc89499c3ee7b59588875517f&pass_ticket=yDfHqWk%2B7MexEmDK81C0kikYOShOYL0bBInRj5EccLqux8Jt5NzP%2B%2BjqHI2tqJPh'
         },
         {
           name:'【原创】招投标100问(49-54)',
           url:'https://mp.weixin.qq.com/s?__biz=MzI2OTk4ODE2NQ==&mid=100000306&idx=1&sn=f58fc1ca810226a2bb024097db4430ac&pass_ticket=yDfHqWk%2B7MexEmDK81C0kikYOShOYL0bBInRj5EccLqux8Jt5NzP%2B%2BjqHI2tqJPh'
         },
         {
           name:'【原创】招投标100问(55-60)',
           url:'https://mp.weixin.qq.com/s?__biz=MzI2OTk4ODE2NQ==&mid=100000306&idx=2&sn=397af7537eb333c5e66acab1f379c61b&pass_ticket=yDfHqWk%2B7MexEmDK81C0kikYOShOYL0bBInRj5EccLqux8Jt5NzP%2B%2BjqHI2tqJPh'
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