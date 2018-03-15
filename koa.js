var koa=require('koa');//koa http库

var koaBody=require('koa-body');//解析请求body
var router=require('koa-router')();//路由中间件
var cors=require('koa-cors');//处理跨域问题

//初始化koa框架
var app=new koa();

//设置路由
router
    .all('/',function *(){
        console.log(this.request.body);
        this.body=123;
    })
    .get('/user',function *(){
        this.body='user';
    })
    .post('/getUsernane',function *() {
     console.log(this.request.body);
this.body='weil';
})
.post('/add',function *() {
    //请求接受到的参数
    var x=this.request.body.x;
    var y=this.request.body.y;

    var num=x+y;//计算

    this.body=num;//返回给浏览器结果
});

app.use(cors());//处理跨域问题
app.use(koaBody());//解析请求body
app.use(router.routes());//挂载路由

//启动服务
app.listen(2333,function(){
    console.log('2333服务器请求成功！');
});

