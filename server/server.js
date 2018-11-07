'use strict';

import Koa from 'koa';
import KoaRouter from 'koa-router';
import serve from 'koa-static';
// const serve = require('koa-static');
var bodyParser = require('koa-bodyparser');

const app = module.exports = new Koa();
const router = new KoaRouter();

let port = process.env.PORT || 3000;

// app.use( async (ctx, next) => {
//   try {
//     await next()
//   } catch(err) {
//     console.log(err.status)
//     ctx.status = err.status || 500;
//     ctx.body = err.message;
//   }
// });


app.use(serve('./public'));

router.get('koala', '/koala', (ctx) => {
  ctx.body = "Welcome! To the Koala Book of Everything!"
});

app.use(router.routes())
  .use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});