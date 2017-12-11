<template>
<!--底部导航-->
  <mu-paper class="bottomNav">
    <mu-bottom-nav :value="bottomNav" @change="handleChange">
      <mu-bottom-nav-item value="home" title="首页" icon="home" to="/" />
      <mu-bottom-nav-item value="info" title="交易信息" icon="email" to="/qjhome/info" />
      <mu-bottom-nav-item value="notice" title="公告通知" icon="public" to="/qjhome/notice" />
      <mu-bottom-nav-item value="exposure" title="曝光台" icon="exposure" to="/qjhome/exposure" />
     <!--<mu-bottom-nav-item value="测试" title="测试" icon="chat" to="/people" />-->
    </mu-bottom-nav>
  </mu-paper>
</template>

<script>
  export default {
    data() {
      return {
        bottomNav: 'home'
      }
    },
    created() {
      this.facthData()
    },
    // $route:路由信息对象，属性是响应式的，可以使用一个 watcher去响应路由的改变
    watch: {
      '$route': 'facthData'
    },
    methods: {
      handleChange(val) {
        this.bottomNav = val
      },
      facthData() {      
       
        if (this.$route.path === '' 
          || this.$route.path==='/' 
          || this.$route.path==='/qjhome'
          || this.$route.path==='/qjhome/home') {
          this.bottomNav = 'home'
        }
        if (this.$route.path === '/qjhome/info'
          ||this.$route.path === '/qjhome/contextTabs') {
          this.bottomNav = 'info'
        }
        if (this.$route.path === '/qjhome/notice') {
          this.bottomNav = 'notice'
        }
        if (this.$route.path === '/qjhome/exposure') {
          this.bottomNav = 'exposure'
        }
      }
    }
  }
</script>

<style>
  .bottomNav {
    width:100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    
  }
  
</style>
