import Koa from 'koa2';
import reactSsr from './middlewares/react-ssr';
import path from 'path';
import koaStatic from 'koa-static';

const app = new Koa();

// app.use(koaStatic(
//   path.join(__dirname, '../../static')
// ));
// app.use(koaStatic(
//   path.join(__dirname, '../static')
// ));
app.use(koaStatic(
  'dist/static'
));

app.use(reactSsr);


app.listen(9001, () => {
  console.log('9001 is listening...');
})