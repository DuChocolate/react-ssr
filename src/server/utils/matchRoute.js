import {matchRoutes} from 'react-router-config';
export default async (routes, path, store) => {

  //调用matchRoutes来匹配当前路由（支持多级路由）
  const matchedRoutes = matchRoutes(routes, path);
  //Promise对象数组
  const promises = [];
  matchedRoutes.forEach(item => {
    if(item.route.component.loadData){
      promises.push(item.route.component.loadData(store));
    }
  });
  await Promise.all(promises);
}