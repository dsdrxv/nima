import Vue from 'vue'
import VueRouter from 'vue-router'
import Denglu from '../components/登录/Denglu.vue'
import Shouye from '../components/首页/Shouye.vue'
import Xitoshouye from '../components/内容部分/Xitoshouye.vue'
import Kehuleibiao from '../components/内容部分/Kehuleibiao.vue'
import Kehuliebiao2 from '../components/客户管理/Kehuliebiao2.vue'
import Gonghaikehu from '../components/客户管理/Gonghaikehu.vue'
import Fenye from '../components/客户管理/Fenye.vue'
import Cheshi from '../components/客户管理/Cheshi.vue'
import Tianjian from '../components/添加/Tianjian.vue'
import Shaixuan from '../components/筛选/Shaixuan.vue'
import wang from '../components/客户管理/wang.vue'
import Bian from '../components/客户管理/Bian'
import Diado from '../components/客户管理/Diado'
import fuzhujian from '../components/zifu/fuzhujian'
import Wang2 from '../components/数据库的增删改查/Wang2.vue'
import Houtaidenglu from '../components/数据库的增删改查/Houtaidenglu.vue'
import Zengjia from '../components/数据库的增删改查/Zengjia.vue'
import shijia from '../components/内容部分/shijia.vue'
import Elemnt from '../components/数据库的增删改查/Elemnt.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path:"/",
    name:"Denglu",
    component:Denglu
  },
  {
    path:"/Shouye",
    name:"Shouye",
    component:Shouye,
    children:[
      {
        path:'Xitoshouye',
        component:()=>import('../components/内容部分/Xitoshouye')
      },
      {
        path:'Kehuleibiao',
        component:()=>import('../components/内容部分/Kehuleibiao')
      },
      {
        path:'Kehuliebiao2',
        component:()=>import('../components/客户管理/Kehuliebiao2')
      },
      {
        path:'Gonghaikehu',
        component:()=>import('../components/客户管理/Gonghaikehu')
      },{
        path:'Cheshi',
        component:()=>import('../components/客户管理/Cheshi')
      },
      {
        path:'Fenye',
        component:()=>import('../components/客户管理/Fenye')
      },
      {
        path:'Tianjian',
        component:()=>import('../components/添加/Tianjian')
      },
      {
        path:'Shaixuan',
        component:()=>import('../components/筛选/Shaixuan')
      },
    ]
  },
  {
    path:"/Xitoshouye",
    name:"Xitoshouye",
    component:Xitoshouye
  },
  {
    path:"/Kehuleibiao",
    name:"Kehuleibiao",
    component:Kehuleibiao
  },
  {
    path:"/Kehuliebiao2",
    name:"Kehuliebiao2",
    component:Kehuliebiao2
  },
  {
    path:"/Gonghaikehu",
    name:"Gonghaikehu",
    component:Gonghaikehu
  },
  {
    path:"/Fenye",
    name:"Fenye",
    component:Fenye
  },
  {
    path:"/Cheshi",
    name:"Cheshi",
    component:Cheshi
  },
  {
    path:"/Tianjian",
    name:"Tianjian",
    component:Tianjian
  },
  {
    path:"/Shaixuan",
    name:"Shaixuan",
    component:Shaixuan
  },
  {
    path:"/wang",
    name:"wang",
    component:wang
  },
  {
    path:"/Bian",
    name:"Bian",
    component:Bian
  },
  {
    path:"/Diado",
    name:"Diado",
    component:Diado
  },
  {
    path:"/fuzhujian",
    name:"fuzhujian",
    component:fuzhujian
  },
  {
    path:"/Wang2",
    name:"Wang2",
    component:Wang2
  },
  {
    path:"/Houtaidenglu",
    name:"Houtaidenglu",
    component:Houtaidenglu
  },
  {
    path:"/Zengjia",
    name:"Zengjia",
    component:Zengjia
  },
  {
    path:"/shijia",
    name:"shijia",
    component:shijia
  },
  {
    path:"/Elemnt",
    name:"Elemnt",
    component:Elemnt
  }
]

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
})

export default router
