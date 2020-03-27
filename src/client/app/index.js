import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {getClientStore} from '../../store';
import {Provider} from 'react-redux';
import routeList from '../routes/route-config';

import ReactDom from 'react-dom';

import App from '../routes/index';
// const store = getClientStore();
//渲染 index 组件 到页面
// ReactDom.hydrate(
//   <Provider store={getClientStore()}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>

// , document.getElementById('root'))

function renderUI() {
  ReactDom.hydrate(
    <Provider store={getClientStore()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  , document.getElementById('root'))
}
function clientRender(){
  let targetRoute;
  for (var item of routeList) {
      if (document.location.pathname === item.path) {
          targetRoute = item;//查找到第一个路由后停止查找
          break;
      }
  }
  if(targetRoute){
    if(targetRoute.component.preload){
      targetRoute.component.preload().then(res => {
        console.log('异步组件加载完成.....');
        renderUI();
      })
    }
  }else{
    renderUI();
  }
}
clientRender();