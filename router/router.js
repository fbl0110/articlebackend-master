let express = require('express');


let router = express.Router();


const CateController = require('../controller/CateController.js');
const ArtController = require('../controller/ArtController.js');
// 匹配 / 或 /admin
router.get(/^\/$|^\/admin$/, (req, res) => {
    res.render('index.html')
})

//--------------------栏目-------------------------
// 栏目页面
router.get('/catindex', CateController.catindex)
    // 添加页面
router.get('/catadd', CateController.catadd)
    // 编辑数据
router.get('/catedit', CateController.catedit)
    //添加数据
router.post('/postCat', CateController.postCat)
    // 查询
router.get('/getCate', CateController.getCate)
    //修改的查询
router.get('/getOneCate', CateController.getOneCate)
    // 删除
router.post('/delCat', CateController.delCat)
    // 编辑
router.post('/updCate', CateController.updCate)

//--------------------文章---------------------------
// 文章列表
router.get('/artindex', ArtController.artindex)

// 匹配失败的路由
router.all('*', (req, res) => {
    res.json({ errcode: 10004, message: "请求错误" })
})

// 暴露出去
module.exports = router;