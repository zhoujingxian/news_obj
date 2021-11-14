# 新闻项目初步实现
该项目的后端内容由node编写，主要有登录、注册、详情信息、列表信息等接口。

## 环境搭建
1. Node 14或以上版本
   - 使用的第三方node模块请查阅package.json
   
3. require 第三方模块化

4. mongodb数据库

   数据库数据需自行准备，库名为`obj`，表`user, banner, follow, column, home`

## 安装步骤

clone这个地址：`https://github.com/zhoujingxian/news_obj.git`

## 快速入门
PowerShell中输入`nodemon start`启动，在浏览器中输入对应路由

## 页面
1. 首页：`http://localhost:3000/home`
3. 关注页面：`http://localhost:3000/follow`
3. 栏目页面：`http://localhost:3000/column`
4. 个人中心：`http://localhost:3000/mydoc`
