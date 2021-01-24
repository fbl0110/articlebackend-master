const express = require('express');
const path = require('path');
const app = express();


// 导入路由模块
const router = require('./router/router.js')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 定义中间件，托管静态资源
app.use('/public', express.static(path.join(__dirname, 'public')));

const artTemplate = require('art-template');
const express_template = require('express-art-template');

//配置模板的路径
app.set('views', __dirname + '/views/');

//设置express_template模板引擎的静态文件扩展名为.html
app.engine('html', express_template);

//使用模板引擎扩展名为html
app.set('view engine', 'html');


// 路由中间件 
app.use(router)

app.listen(8012, () => {
    console.log('server  8012');
})