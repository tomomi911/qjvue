import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import info from '../pages/info'
import home from '../pages/home'
import message from '../pages/message'
import notice from '../pages/noticeHome'
import publish from '../pages/publish'
import login from '../pages/login'
import more from '../pages/more'
import content from '../pages/content'
import people from '../pages/people'
import contextTabs from '../components/HeaderTabs'
import exposure from '../pages/exposureHome'
import govinfo from '@/pages/govInfoHome'
import ztb100 from '@/pages/ztb100'
import ca from '@/pages/ca'
import ts from '@/pages/ts'
import ztb from '@/pages/ztb'


Vue.use(Router)

export default new Router({
//  mode: 'history',
  routes: [
    {
      path:'',     
      redirect:'/qjhome/home'
    },
    {
      path:'/qjhome',
      redirect:'/qjhome/home'
    },
    {
      path:'/qjhome/home',
      name:'home',
      component:home
    },
    {
      path: '/qjhome/info',
      name: 'info',
      component: info
    },
    {
      path: '/qjhome/message',
      name: 'message',
      component: message
    },
    {
      path: '/qjhome/notice',
      name: 'notice',
      component: notice
    },
    {
      path: '/qjhome/publish',
      name: 'publish',
      component: publish
    },
     {
      path: '/qjhome/login',
      name: 'login',
      component: login
    },
    {
      path: '/qjhome/more',
      name: 'more',
      component: more
    },
    {
      path: '/qjhome/content',
      name: 'content',
      component: content
    },
     {
      path: '/qjhome/people',
      name: 'people',
      component: people
    },
    {
      path:'/qjhome/contextTabs',
      name:'contextTabs',
      component:contextTabs
    },
    {
      path:'/qjhome/exposure',
      name:'exposure',
      component:exposure
    },
    {
      path:'/qjhome/govinfo',
      name:'govinfo',
      component:govinfo
    },
    {
      path:'/qjhome/ztb100',
      name:'ztb100',
      component:ztb100
    },
    {
      path:'/qjhome/ca',
      name:'ca',
      component:ca
    },
    {
      path:'/qjhome/ts',
      name:'ts',
      component:ts
    },
    {
      path:'/qjhome/ztb',
      name:'ztb',
      component:ztb
    }
  ]
})
