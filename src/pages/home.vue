<template>
<div>
  <mu-card> 
  <mu-card-media title="" subTitle="微门户">
    <img src="../../static/img/headerTop.jpg" />
  </mu-card-media>
  <mu-card-title title="简介" subTitle="abstract"/>
  <div class="topped">
  <mu-card-text>
    <p style="text-indent:2em">潜江市公共资源交易中心成立于2011年7月，位于潜江市章华南路99号，现有办公面积约2000平方米，其主要职责是为公共资源招标投标活动提供服务的交易场所。</p>
  <br/><div style="text-align:center"><img src="../../static/img/home.jpg" width="300" /></div>
<p style="text-indent:2em">近年来，中心围绕“平台建起来，系统联起来，数据用起来”的目标，以电子化平台建设为支撑，全力推进公共资源交易全程电子化、运行规范化、服务标准化。目前，市公共资源交易中心基本实现“开标区、评标区、办公区”三区分离，在开标区设立投标人等候室、开标室、评委抽取室；评标区设立评委等候室1个、评标室1个、电子评标室2个；配备了全程电子音像监控系统，对进入中心交易的项目实行实时监控。目前，市综合评标专家库有成员328人，江汉区域综合评标专家库有成员600多人，涵盖8个专业，能较好地满足政府投资项目开标、评标等业务开展的需要。</p>
  </mu-card-text></div>
</mu-card>
  
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