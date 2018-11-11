require('dotenv').config();
const Koa = require('koa');
const body = require('koa-body');
const serve = require('koa-static');
const json = require('koa-json');
const session = require('koa-session');
const app = new Koa();

const port = process.env.PORT || 4000;

// parse request body into ctx.request.body
// - multipart allows parsing of enctype=multipart/form-data
app.use(body({ multipart: true }));
app.use(session(app)); // note koa-session@3.4.0 is v1 middleware which generates deprecation notice
app.use(json());

app.use(serve(__dirname + '/public'));
app.use(require('./routes/routes.js'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
