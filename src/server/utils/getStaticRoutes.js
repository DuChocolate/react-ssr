
const getStaticRoutes = async (routes) => {
  let staticRoutes = [];
  for(let i = 0; i < routes.length; i++){
    let item = routes[i];
    if(item.component && item.component.preload){   //异步加载组件
      staticRoutes.push({
        ...item,
        component: (await item.component.preload()).default
      });
    }else{
      staticRoutes.push({
        ...item
      });
    }
  }
  return staticRoutes;
}
export default getStaticRoutes;