'use strict';

import Koa from 'koa';
import KoaRouter from 'koa-router';
import serve from 'koa-static';
const bodyParser = require('koa-bodyparser');

const app = module.exports = new Koa();
const router = new KoaRouter();

let port = process.env.PORT || 4000;

//body parser
app.use(bodyParser());

app.use(serve('./src/public'));

app.use(router.routes())
  .use(router.allowedMethods());

require("./config/routes")(app);  //put passport here

// router.get('koala', '/koala', (ctx) => {
//   ctx.body = ctx.request.body;  //this has to happen

//   console.log(ctx.body);
// });

if (!module.parent) {
  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
}