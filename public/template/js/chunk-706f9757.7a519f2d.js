(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-706f9757"],{"2db7":function(e,a,t){},"42b6":function(e,a,t){"use strict";t("2db7")},4649:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"reg"},[t("div",{staticClass:"content"},[t("h1",[e._v("欢迎注册")]),t("div",{staticClass:"content_a"},[t("van-divider",{style:{color:"#000",borderColor:"#4c4f50",padding:"0 16px"}},[t("router-link",{attrs:{to:"/login"}},[t("span",[e._v("登录")])]),t("i"),t("router-link",{attrs:{to:""}},[t("span",[e._v("注册")])])],1)],1),t("div",{staticClass:"content_input"},[t("van-form",{on:{submit:e.onSubmit}},[t("van-field",{attrs:{name:"用户名",label:"用户名",placeholder:"请输入用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.username,callback:function(a){e.username=a},expression:"username"}}),t("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"请输入密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}}),t("van-field",{attrs:{label:"昵称",placeholder:"请输入昵称(可选)"},model:{value:e.nikename,callback:function(a){e.nikename=a},expression:"nikename"}}),t("van-field",{attrs:{name:"uploader",label:"头像上传"},scopedSlots:e._u([{key:"input",fn:function(){return[t("van-uploader",{attrs:{"after-read":e.afterRead,"max-count":"1"},model:{value:e.uploader,callback:function(a){e.uploader=a},expression:"uploader"}})]},proxy:!0}])}),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit",color:"#f55657"}},[e._v("注册")])],1),t("p",{staticStyle:{color:"#000",position:"fixed",bottom:"0.05rem",left:"50%",transform:"translateX(-50%)"}},[e._v("遇到问题")])],1)],1)])])},o=[],s={name:"reg",data:function(){return{username:"",password:"",uploader:[],nikename:"",file:{}}},methods:{onClickLeft:function(){this.$router.go(-1)},onSubmit:function(e){var a=this;console.log("submit",e);var t=new FormData;t.append("username",this.username),t.append("password",this.password),t.append("nikename",this.nikename),t.append("file",this.file),this.$axios({url:"/reg",method:"post",data:t}).then((function(e){if(console.log(e),e.data.err)console.log(e.data.title);else{console.log(e.data);var t=new Date;t.setDate(t.getDate()+1),a.$router.push("/login")}}))},afterRead:function(e){this.file=e.file}}},r=s,l=(t("42b6"),t("2877")),i=Object(l["a"])(r,n,o,!1,null,"76474f94",null);a["default"]=i.exports}}]);
//# sourceMappingURL=chunk-706f9757.7a519f2d.js.map