//按需加载路由配置文件

import List from '../pages/List';

//组件动态加载容器
import AsyncLoader  from './async-loader';

export default [
  // {
  //   path: '/',
  //   component: AsyncLoader(() => import('../pages/Index')),
  //   exact: true,
  // },
  {
    path: '/index',
    component: AsyncLoader(() => import(/* webpackChunkName: "Index" */'../pages/Index')),
    exact: true,
  },{
    path: '/home',
    component: AsyncLoader(() => import(/* webpackChunkName: "Home" */'../pages/Home')),
    exact: true,
  },{
    path: '/list',
    component: List,
    exact: true,
  }

];




// 非按需加载路由配置文件
// import Home from '../pages/Home';
// import Index from '../pages/Index';
// import List from '../pages/List';
// export default [
//   {
//     path: '/',
//     component: Index,
//     loadData: Index.loadData,
//     exact:true
//   },{
//     path: '/index',
//     component: Index,
//     loadData: Index.loadData,
//     exact:true
//   },{
//     path: '/home',
//     component: Home,
//     exact:true
//   },{
//     path: '/list',
//     component: List,
//     exact:true
//   }
// ];