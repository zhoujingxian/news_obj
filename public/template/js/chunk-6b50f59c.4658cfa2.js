(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b50f59c"],{"053c":function(t,e,a){},1365:function(t,e,a){"use strict";a("053c")},dd7b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reg"},[a("div",{staticClass:"content"},[t._m(0),a("div",{staticClass:"content_a"},[a("van-divider",{style:{color:"#000",borderColor:"#4c4f50",padding:"0 16px"}},[a("router-link",{attrs:{to:""}},[a("span",[t._v("登录")])]),a("i"),a("router-link",{attrs:{to:"/reg"}},[a("span",[t._v("注册")])])],1)],1),a("div",{staticClass:"content_input"},[a("van-form",{on:{submit:t.onSubmit}},[a("van-field",{attrs:{name:"用户名",label:"用户名",placeholder:"请输入用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"请输入密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("div",{staticStyle:{margin:"16px"}},[a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit",color:"#f55657"}},[t._v("登录")]),a("van-checkbox",{staticStyle:{color:"#868686","padding-left":"0.15rem"},attrs:{"icon-size":"14px"}},[t._v('已阅读并同意"用户协议"和"隐私政策" ')])],1),a("p",{staticStyle:{color:"#000",position:"fixed",bottom:"0.05rem",left:"50%",transform:"translateX(-50%)"}},[t._v("遇到问题")])],1)],1)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[a("h1",[t._v("欢迎登录")])])}],o=(a("99af"),{name:"reg",data:function(){return{username:"",password:"",uploader:[{url:"https://img01.yzcdn.cn/vant/leaf.jpg"}],value:""}},beforeCreate:function(){this.$store.commit("load",!1)},methods:{onSubmit:function(){var t=this;this.$axios({url:"/login",method:"post",data:{username:this.username,password:this.password}}).then((function(e){if(e.data.err)alert(e.data.title);else{alert(e.data.title);var a=new Date;a.setDate(a.getDate()+1),document.cookie="token=".concat(e.data.token,";expires=").concat(a),t.$router.push("/home")}}))}}}),r=o,i=(a("1365"),a("2877")),l=Object(i["a"])(r,s,n,!1,null,"2529f92f",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-6b50f59c.4658cfa2.js.map