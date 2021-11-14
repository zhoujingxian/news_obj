# 新闻项目实现
    项目客户端使用Vue编写，主要包含首页新闻内容，精选内容和栏目，已实现新闻网站的注册登录等功能；
    项目管理端功能为首页新闻的审核，可在管理端对发布文章进行审核通过、审核不通过的操作，在客户端可浏览管理端已审核通过的新闻。

## 环境搭建

1. Node 14或以上版本
   - 使用的第三方node模块请查阅package.json
2. require 第三方模块化
3. mongodb数据库
   - 数据库数据需自行准备，库名为`node_obj`，表`user, banner, follow, column, home`

## 安装步骤

clone这个地址：`https://github.com/zhoujingxian/news_obj.git`

## 快速入门

在命令提示符中输入`nodemon start`开启服务器，浏览器访问对应页面

## 页面
### 在线浏览
   - 客户端地址：`http://1.116.2.214/`
   - 管理端地址：`http://1.116.2.214/admin/`
### 客户端
1. 首页：`http://localhost:3000/home`
2. 精选：`http://localhost:3000/follow`
3. 登录：`http://localhost:3000/login`
4. 注册：`http://localhost:3000/reg`

### 管理端
1. 首页：`http://localhost:3000/admin/home`

## 功能实现

1. 客户端使用时需先注册登录，方可浏览对应信息
2. 管理端尚未使用登录注册，可在浏览器中直接访问
   - 可对新闻信息进行审核的操作

## 项目目录

- /bin
- /config
- /node_modules
- /public
  - admin
  - template
  - upload
- routes
  - api
- ults
- package.json
- app.js
- gulpfile.js
- .gitignore
- redeme.md

## 如何参与开源项目

贡献使开源社区成为一个学习、激励和创造的绝佳场所。你所作的任何贡献都是非常感谢的。

1. Fork这个项目
   创建您的单独分支 (git checkout -b feature/AmazingFeature)
2. 提交您的更改 (git commit -m 'Add some AmazingFeature')
3. 上传到您的分支中 (git push origin feature/AmazingFeature)
4. 打开拉去请求

## 版本控制

该项目使用Git进行版本管理。您可以在repository参看当前可用版本。

## 作者

zhoujingxian0302@163.com

## 结语

该项目为学习所写，时间有限，只完成部分功能。