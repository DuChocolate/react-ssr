import React from 'react';
import { StaticRouter } from 'react-router-dom'; 
import matchRoute from '../utils/matchRoute';
import App from '../../client/routes/index';
import { renderToString } from 'react-dom/server';
import {Provider} from 'react-redux';
import {getStore} from '../../store';
import getStaticRoutes from '../utils/getStaticRoutes';
import routes from '../../client/routes/route-config';
import { Helmet } from 'react-helmet';
export default async(ctx, next) => {
  const path = ctx.request.path;
  const store = getStore();
  if(path.indexOf('.') > -1){  //简单容错，排除图片等资源文件的请求
    ctx.body = null;
    return next();
  }
  const staticRoutes = await getStaticRoutes(routes);

  await matchRoute(staticRoutes, path, store);
  let context = {css: []};
  const html = renderToString(<Provider store={store}><StaticRouter location={path} context={context}><App /></StaticRouter></Provider>);
  const cssStr = context.css.length ? context.css.join('\n') : '';

  //拿到helmet对象，然后在html字符串中引入
  const helmet = Helmet.renderStatic();

  ctx.body = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>my react ssr</title>
    <style>${cssStr}</style>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
  </head>
  <body>
    <div id="root">${html}</div>
    <script>window.context = {
      state: ${JSON.stringify(store.getState())}
    }</script>
    <script type="text/javascript"  src="/index.js"></script>

  </body>
  </html>
  `;
  return next();
};
