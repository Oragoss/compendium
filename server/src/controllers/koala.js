router.get('koala', '/koala', (ctx) => {
  ctx.body = ctx.request.body;  //this has to happen
  if (!this.request.body) {
    this.throw("The body is empty", 400);
}

  console.log(ctx.body);
});

var Router = require("koa-router");

module.exports = function(app, passport) {
  // register functions
  var router = new Router();

  router.use(function *(next) {
    this.type = "json";
    yield next;
  });

  router.get("/", function *() {
    this.type = "html";
    // yield indexController.index.apply(this);
    console.log("Index");
  });

  router.get("/auth", authController.getCurrentUser);
  router.post("/auth", authController.signIn);

  router.all("/signout", authController.signOut);
  router.post("/signup", authController.createUser);

  // secured routes
  router.get("/value", secured, countController.getCount);
  router.get("/inc", secured, countController.increment);
  router.get("/dec", secured, countController.decrement);
  app.use(router.routes());
};