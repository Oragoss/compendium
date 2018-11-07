import Koa from 'koa';
import KoaRouter from 'koa-router';
import bodyParser from 'koa-bodyparser';

const router = new KoaRouter();

export default class Controller {
    Get(name, path) {
        //'koala', '/koala',
        router.get(name, path, (ctx) => {
            ctx.body = ctx.request.body;  //this has to happen

            console.log(ctx.body);
          });
    }
}

