var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

router.get('/', function (ctx, next) {
  console.log('say');
  ctx.body = 'hello koa !'
});

// 加前缀
router.prefix('/api');

// 模拟json数据
var loginInfo = require('./data/loginUser.js')
router.get('/login', function (ctx, next) {
  ctx.body = loginInfo
});

// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(4000);