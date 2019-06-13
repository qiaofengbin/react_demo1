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
var todo = require('./todo.js')
router.get('/todos', function (ctx, next) {
  console.log('--todo--')
  ctx.body = todo
});

// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(4000);