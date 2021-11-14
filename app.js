var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const multer = require("multer");
const {
  ConnectionPoolClearedEvent
} = require('mongodb');
const objMulter = multer({
  dest: "./public/upload/user"
})

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(objMulter.any())
app.use(cookieParser({
  user: "news",
  keys: ["aaa", "bbb", "ccc"],
  maxAge: 1000 * 3600 * 24
}));

app.use("/admin", express.static(path.join(__dirname, 'public/admin')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/template')));


app.use("/api", require("./ults/params"))
app.use("/api/reg", require("./routes/api/reg"));
app.use("/api/login", require("./routes/api/login"));
app.use("/api/news", require("./routes/api/news"))
app.use("/api/user", require("./routes/api/user"))
app.use("/api/is-token", require("./routes/api/is-token"))

// 删除记录
app.use("/api/delete", require("./routes/api/delete"));
app.use("/api/audit", require("./routes/api/audit"));
app.use("/api/listlength", require("./routes/api/list-length"));
 

// app.use("/", require("./routes/static/all"))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  // res.status(err.status || 500);
  // res.render('error');
  if(req.url.includes('/api')){//webApi接口错误
    res.send({
      err:1,
      msg:'不存在的接口名'
    })
  }else if(req.url.includes('/admin')){//服务端Api接口错误
    console.log("admin")
    res.sendFile(path.join(__dirname, 'public','admin','index.html'));
  }else{//交还给客户端判断
    console.log("index")
    res.sendFile(path.join(__dirname, 'public','template','index.html'));
  }
});


module.exports = app;