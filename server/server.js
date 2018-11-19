require('dotenv').config();
const Koa = require('koa');
const body = require('koa-body');
const serve = require('koa-static');
const json = require('koa-json');
const session = require('koa-session');
const cors = require('@koa/cors');
const app = new Koa();
const dbConnection = require('./db/dbConnection');

dbConnection
  .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

const port = process.env.PORT || 4000;

// parse request body into ctx.request.body
// - multipart allows parsing of enctype=multipart/form-data
app.use(body({ multipart: true }));
app.use(session(app)); // note koa-session@3.4.0 is v1 middleware which generates deprecation notice
app.use(json({ pretty: false, param: 'pretty' }))
app.use(cors());

app.use(serve(__dirname + '/public'));
app.use(require('./routes/routes.js'));
app.use(async function handleError(context, next) {
    try {
      await next();
    } catch (error) {
      context.status = 500;
      context.body = error;
    }
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
