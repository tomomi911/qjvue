<template>
<div>
  <mu-card> 
  <mu-card-media title="" subTitle="投诉的处理程序">
    <img src="../../static/img/title.jpg" />
  </mu-card-media>
  <div class="topped">
  <mu-card-text>
    
    <img src="../../static/img/ts.jpg" width="300" />

  </mu-card-text></div>
</mu-card>
  <!--底部导航-->
  <div class="seize-seat-top"></div>
   
</div>
</template>

<script>
export default{
    
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
      height: 40px;
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
  
</style>