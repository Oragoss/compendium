import Controller from './Controller';
import Koa from 'koa';
import KoaRouter from 'koa-router';
import bodyParser from 'koa-bodyparser';

const router = new KoaRouter();

//TODO: Try to make this happen
// export default class KoalaController extends Controller {

// }
exports.getKoala = function () {
    router.get('koala', '/koala', (ctx) => {
        ctx.body = ctx.request.body;  //this has to happen

        console.log('Koala');
        console.log(ctx.body);
      });
}

// export default class KoalaController {
//     Get(name, path) {
//         //'koala', '/koala',
//         router.get('koala', '/koala', (ctx) => {
//             ctx.body = ctx.request.body;  //this has to happen

//             console.log('Koala');
//             console.log(ctx.body);
//           });
//     }
// }