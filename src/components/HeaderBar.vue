<template>
<!--顶部bar-->
<mu-appbar class="HeaderBar">
 <img class="logo" src="../../static/img/title.jpg" />
</mu-appbar>
</template>

<style scoped>
.HeaderBar{
  position:fixed;
  top: 0;
  height: 15rem;
  width:100%;
}
.appbar-search-field {
  color: #FFF;
  margin-bottom: 0;
}
.appbar-search-field.focus-state {
  color: #FFF;
}
.appbar-search-field .mu-text-field-hint {
  color: rgba(255, 255, 255, 0.54);
}
.appbar-search-field .mu-text-field-input {
  color: #FFF;
}
.logo{
  width:100%;
  height:100%;
  position:absolute;
  left:0;
  top:0;
  border-bottom: 2px solid #DDD;
}
</style>
