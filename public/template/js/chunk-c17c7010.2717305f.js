(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c17c7010"],{"1ed2":function(t,s,a){"use strict";a("c6a9")},c6a9:function(t,s,a){},dc94:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"user"},[a("div",{staticClass:"header"},[a("van-image",{attrs:{round:"",width:"0.6rem",height:"0.6rem",src:t.$serverUrl+t.data.icon}}),a("div",{staticClass:"user-box"},[a("div",{staticClass:"reg_user"},[a("span",[t._v(t._s(t.data.nikename))])]),a("van-button",{staticClass:"reg_btn",attrs:{size:"mini",color:"transparent"},on:{click:t.exit}},[t._v("注销")])],1),t._m(0)],1),t._m(1),t._m(2),a("div",{staticClass:"docList"},[a("div",{staticClass:"docList_top"},[a("van-cell",{staticClass:"docList-sytle",attrs:{title:"公开博文","is-link":"",value:"0"}}),a("van-cell",{staticClass:"docList-sytle",attrs:{title:"秘密博文","is-link":"",value:"0"}}),a("van-cell",{staticClass:"docList-sytle",attrs:{title:"草稿箱","is-link":"",value:"0"}}),a("van-cell",{staticClass:"docList-sytle",attrs:{title:"收藏夹","is-link":"",value:"0"}})],1)])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",{staticClass:"clear"},[a("li",[a("span",[t._v("0")]),a("p",[t._v("关注")])]),a("i"),a("li",[a("span",[t._v("0")]),a("p",{staticClass:"end"},[t._v("粉丝")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"biaoqian"},[a("span",[a("i",{staticClass:"iconfont"},[t._v("")]),a("em",[t._v("消息通知")])]),a("span",[a("i",{staticClass:"iconfont"},[t._v("")]),t._v("收藏")]),a("span",[a("i",{staticClass:"iconfont"},[t._v("")]),t._v("浏览记录")]),a("span",[a("i",{staticClass:"iconfont"},[t._v("")]),t._v("下载管理")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"jilu"},[a("span",[t._v("记录新鲜事")]),a("a",[t._v("+ 发布")])])}],n=a("ade3"),c=a("5530"),l=(a("d3b7"),a("ac1f"),a("1276"),a("82da"),{name:"user",data:function(){return{data:{}}},methods:{exit:function(){document.cookie="token=aaa;expires=-1",this.$router.push("/login")}},beforeCreate:function(){var t=this,s=document.cookie.split("; ").reduce((function(t,s){return Object(c["a"])(Object(c["a"])({},t),{},Object(n["a"])({},s.split("=")[0],s.split("=")[1]))}),{});this.$axios({url:"/user",type:"get",params:{token:s.token}}).then((function(s){s.data.err?console.log(s.data.title):t.data=s.data.data}))}}),r=l,o=(a("1ed2"),a("2877")),u=Object(o["a"])(r,e,i,!1,null,"752fffaf",null);s["default"]=u.exports}}]);
//# sourceMappingURL=chunk-c17c7010.2717305f.js.map