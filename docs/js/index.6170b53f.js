(function(e){function t(t){for(var a,o,s=t[0],c=t[1],u=t[2],d=0,m=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={index:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4ffd":function(e,t,n){e.exports=n.p+"img/logo.dd6edcfa.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Loading"),n("Snackbar"),n("v-main",[n("router-view")],1)],1)},i=[],o=n("5530"),s=n("2f62"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]},[n("v-overlay",[n("v-progress-circular",{attrs:{indeterminate:""}})],1)],1)},u=[],l={name:"Loading",computed:Object(o["a"])({},Object(s["c"])("system",["loading"]))},d=l,m=n("2877"),v=n("6544"),p=n.n(v),f=n("a797"),g=n("490a"),h=Object(m["a"])(d,c,u,!1,null,null,null),b=h.exports;p()(h,{VOverlay:f["a"],VProgressCircular:g["a"]});var x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-snackbar",{attrs:{top:"",color:"error",timeout:"-1"},scopedSlots:e._u([{key:"action",fn:function(t){var a=t.attrs;return[n("v-btn",e._b({attrs:{color:"white",text:""},on:{click:e.close}},"v-btn",a,!1),[e._v(" Close ")])]}}]),model:{value:e.isShow,callback:function(t){e.isShow=t},expression:"isShow"}},[e._v(" "+e._s(e.message)+" ")])},I=[],w={name:"SnackBar",computed:Object(o["a"])(Object(o["a"])({},Object(s["c"])("snackbar",["message","show"])),{},{isShow:{get:function(){return this.show},set:function(e){this.updateShow(e)}}}),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(s["b"])("snackbar",["updateShow"])),Object(s["b"])("system",["updateLoading"])),{},{close:function(){this.updateShow(!1),this.updateLoading(!1)}})},T=w,k=n("8336"),O=n("2db4"),S=Object(m["a"])(T,x,I,!1,null,null,null),_=S.exports;p()(S,{VBtn:k["a"],VSnackbar:O["a"]});var E={name:"App",components:{Loading:b,Snackbar:_},methods:Object(o["a"])(Object(o["a"])({},Object(s["b"])("system",["updateLoading"])),Object(s["b"])("snackbar",["updateShow"])),created:function(){this.updateShow(!1),this.updateLoading(!1)}},y=E,j=n("7496"),V=n("f6c4"),A=Object(m["a"])(y,r,i,!1,null,null,null),R=A.exports;p()(A,{VApp:j["a"],VMain:V["a"]});n("45fc");var L=n("8c4f"),M=n("0e44"),C=function(){return{loading:!1}},N={loading:function(e){return e.loading}},D={setInitState:function(e){Object.assign(e,C)},setLoading:function(e,t){e.loading=t}},G={InitState:function(e){var t=e.commit;t("setInitState")},updateLoading:function(e,t){var n=e.commit;n("setLoading",t)}},W={namespaced:!0,state:C,getters:N,mutations:D,actions:G},B=function(){return{show:!1,message:""}},P={show:function(e){return e.show},message:function(e){return e.message}},U={setInitState:function(e){Object.assign(e,B)},setShow:function(e,t){e.show=t},setMessage:function(e,t){e.message=t}},$={showMessage:function(e,t){var n=e.commit;n("setShow",!0),n("setMessage",t)},updateShow:function(e,t){var n=e.commit;n("setShow",t)}},K={namespaced:!0,state:B,getters:P,mutations:U,actions:$},H=(n("96cf"),n("1da1")),Y=n("bc3a"),F=n.n(Y),q=function(){var e=Object(H["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={email:t,password:n},e.next=3,F.a.post("/linker-api/login",a);case 3:return r=e.sent,e.abrupt("return",r.data.token);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),z=function(){var e=Object(H["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,F.a.post("/linker-api/users/logout");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(H["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("/linker-api/userinfo");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J={login:q,logout:z,getUserInfo:Z},Q=(n("99af"),n("a9e3"),function(){var e=Object(H["a"])(regeneratorRuntime.mark((function e(t,n,a,r){var i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={page:a,per_page:r,use_display_id:!0},e.next=3,F.a.post("/linker-api/applications/".concat(t,"/datastores/").concat(n,"/items/search"),i);case 3:return o=e.sent,e.abrupt("return",o.data.items);case 5:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}()),X=function(){var e=Object(H["a"])(regeneratorRuntime.mark((function e(t,n,a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("/linker-api/applications/".concat(t,"/datastores/").concat(n,"/items/details/").concat(a,"?format=map"));case 2:return r=e.sent,e.abrupt("return",r.data.field_values);case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),ee=function(){var e=Object(H["a"])(regeneratorRuntime.mark((function e(t,n,a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={item:a},e.next=3,F.a.post("/linker-api/applications/".concat(t,"/datastores/").concat(n,"/items/new"),r);case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),te=function(){var e=Object(H["a"])(regeneratorRuntime.mark((function e(t,n,a,r,i){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o={item:r,rev_no:Number(i)},e.next=3,F.a.post("/linker-api/applications/".concat(t,"/datastores/").concat(n,"/items/edit/").concat(a),o);case 3:case"end":return e.stop()}}),e)})));return function(t,n,a,r,i){return e.apply(this,arguments)}}(),ne=function(){var e=Object(H["a"])(regeneratorRuntime.mark((function e(t,n,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,F.a.delete("/linker-api/applications/".concat(t,"/datastores/").concat(n,"/items/delete/").concat(a),{data:{}});case 2:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),ae=function(){var e=Object(H["a"])(regeneratorRuntime.mark((function e(t,n,a,r,i){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o={rev_no:Number(i),use_display_id:!0},e.next=3,F.a.post("/linker-api/applications/".concat(t,"/datastores/").concat(n,"/items/action/").concat(a,"/").concat(r),o);case 3:case"end":return e.stop()}}),e)})));return function(t,n,a,r,i){return e.apply(this,arguments)}}(),re={getItems:Q,getItem:X,newItem:ee,updateItem:te,deleteItem:ne,executeAction:ae},ie={user:J,datastore:re},oe=function(){return{token:"",status:!1,username:"",email:"",avatar:""}},se={token:function(e){return e.token},status:function(e){return e.status},username:function(e){return e.username},email:function(e){return e.email},avatar:function(e){return e.avatar}},ce={setInitState:function(e){Object.assign(e,oe)},setToken:function(e,t){e.token=t},setStatus:function(e,t){e.status=t},setUserName:function(e,t){e.username=t},setEmail:function(e,t){e.email=t},setAvatar:function(e,t){e.avatar=t}},ue={InitState:function(e){var t=e.commit;t("setInitState")},hexaLogin:function(e,t){return Object(H["a"])(regeneratorRuntime.mark((function n(){var a,r,i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,r=t.email,i=t.password,n.next=4,ie.user.login(r,i);case 4:o=n.sent,a("setToken",o),a("setStatus",!0);case 7:case"end":return n.stop()}}),n)})))()},hexaLogout:function(e){return Object(H["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,ie.user.logout();case 3:n("setUserName",""),n("setEmail",""),n("setAvatar",""),n("setToken",""),n("setStatus",!1);case 8:case"end":return t.stop()}}),t)})))()},upateUserInfo:function(e){return Object(H["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,ie.user.getUserInfo();case 3:a=t.sent,n("setUserName",a.username),n("setEmail",a.email),n("setAvatar",a.profile_pic);case 7:case"end":return t.stop()}}),t)})))()}},le={namespaced:!0,state:oe,getters:se,mutations:ce,actions:ue};a["a"].use(s["a"]);var de=new s["a"].Store({modules:{system:W,snackbar:K,user:le},plugins:[Object(M["a"])({key:"hexabase",storage:window.sessionStorage})]}),me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{lg:"3",md:"3",sm:"3",xs:"3"}},[a("v-img",{attrs:{contain:"",src:n("4ffd"),"min-width":"180",alt:"hexabase vue example"}})],1)],1),a("v-row",[a("v-col",[a("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.invalid;return[a("v-card",{staticClass:"mx-auto elevation-12",attrs:{"max-width":"344"}},[a("v-card-title",[e._v("ログイン")]),a("v-card-text",[a("v-form",[a("div",[a("label",[e._v("メールアドレス")]),a("TextFieldWithValidation",{attrs:{textId:"hexaemail",textType:"text",rules:"required|email",fieldname:"メールアドレス"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("div",[a("label",[e._v("パスワード")]),a("TextFieldWithValidation",{attrs:{textType:"password",rules:"required",fieldname:"パスワード"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)]),""!=e.errorMessage?[a("div",{staticClass:"red--text"},[e._v(" "+e._s(e.errorMessage)+" ")])]:e._e()],2),a("v-card-actions",[a("v-btn",{staticClass:"button-main",attrs:{color:"accent",disabled:n},on:{click:e.login}},[e._v(" ログイン ")])],1)],1)]}}])})],1)],1)],1)},ve=[],pe=n("7bb1"),fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ValidationProvider",{attrs:{rules:e.rules,name:e.fieldname},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("v-text-field",{attrs:{id:e.textId,type:e.textType,placeholder:e.fieldname},model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}}),n("p",{directives:[{name:"show",rawName:"v-show",value:a.length,expression:"errors.length"}],staticClass:"red--text"},[e._v(" "+e._s(a[0])+" ")])]}}])})},ge=[],he={name:"TextFieldWithValidation",props:{textId:{type:String,required:!1},textType:{type:String,required:!0},rules:{type:String,required:!0},value:{type:String,required:!0},fieldname:{type:String,required:!0}},components:{ValidationProvider:pe["b"]},computed:{innerValue:{get:function(){return this.$props.value},set:function(e){this.$emit("input",e)}}}},be=he,xe=n("8654"),Ie=Object(m["a"])(be,fe,ge,!1,null,null,null),we=Ie.exports;p()(Ie,{VTextField:xe["a"]});var Te={name:"Login",data:function(){return{email:"",password:"",errorMessage:""}},components:{ValidationObserver:pe["a"],TextFieldWithValidation:we},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(s["b"])("user",["hexaLogin","upateUserInfo"])),Object(s["b"])("snackbar",["updateShow"])),Object(s["b"])("system",["updateLoading"])),{},{login:function(){var e=this;this.errorMessage="",this.updateLoading(!0),this.hexaLogin({email:this.email,password:this.password}).then((function(){e.upateUserInfo().then((function(){e.updateShow(!1),e.updateLoading(!1),e.$router.push("/")})).catch((function(){e.errorMessage="ログインに失敗しました",e.updateLoading(!1)}))})).catch((function(t){t.response&&t.response.status&&401===t.response.status?e.errorMessage="メールアドレス、またはパスワードが間違っています":e.errorMessage="ログインに失敗しました",e.updateLoading(!1)}))}})},ke=Te,Oe=n("b0af"),Se=n("99d9"),_e=n("62ad"),Ee=n("a523"),ye=n("4bd4"),je=n("adda"),Ve=n("0fd9"),Ae=Object(m["a"])(ke,me,ve,!1,null,null,null),Re=Ae.exports;p()(Ae,{VBtn:k["a"],VCard:Oe["a"],VCardActions:Se["a"],VCardText:Se["b"],VCardTitle:Se["c"],VCol:_e["a"],VContainer:Ee["a"],VForm:ye["a"],VImg:je["a"],VRow:Ve["a"]});var Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header"),n("ItemList")],1)},Me=[],Ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-app-bar",{attrs:{color:"primary",dense:"",dark:""}},[n("v-toolbar-title",[e._v("Hexabase Example")]),n("v-spacer"),n("AvatarMenu")],1)],1)},Ne=[],De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-menu",{attrs:{"close-on-content-click":!1},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",r,!1),a),[n("v-icon",[e._v("mdi-account")])],1)]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[n("v-card",{attrs:{width:"300"}},[n("v-list",[n("v-list-item",[n("v-list-item-avatar",[n("img",{attrs:{src:e.avatar}})]),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(e.username))]),n("v-list-item-subtitle",[e._v(e._s(e.email))])],1)],1)],1),n("v-divider"),n("v-list",[n("v-list-item",{on:{click:e.logout}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-logout")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("ログアウト")])],1)],1)],1)],1)],1)},Ge=[],We={name:"AvatarMenu",data:function(){return{menu:!1}},computed:Object(o["a"])({},Object(s["c"])("user",["username","email","avatar"])),methods:Object(o["a"])(Object(o["a"])({},Object(s["b"])("user",["hexaLogout"])),{},{logout:function(){var e=this;return Object(H["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.hexaLogout();case 2:e.$router.push({name:"login"});case 3:case"end":return t.stop()}}),t)})))()}})},Be=We,Pe=n("ce7e"),Ue=n("132d"),$e=n("8860"),Ke=n("da13"),He=n("8270"),Ye=n("5d23"),Fe=n("34c3"),qe=n("e449"),ze=Object(m["a"])(Be,De,Ge,!1,null,null,null),Ze=ze.exports;p()(ze,{VBtn:k["a"],VCard:Oe["a"],VDivider:Pe["a"],VIcon:Ue["a"],VList:$e["a"],VListItem:Ke["a"],VListItemAvatar:He["a"],VListItemContent:Ye["a"],VListItemIcon:Fe["a"],VListItemSubtitle:Ye["b"],VListItemTitle:Ye["c"],VMenu:qe["a"]});var Je={name:"Header",components:{AvatarMenu:Ze}},Qe=Je,Xe=n("40dc"),et=n("2fa4"),tt=n("2a7f"),nt=Object(m["a"])(Qe,Ce,Ne,!1,null,null,null),at=nt.exports;p()(nt,{VAppBar:Xe["a"],VSpacer:et["a"],VToolbarTitle:tt["a"]});var rt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,loading:e.loading,search:e.search,"sort-by":e.sortBy,"loading-text":"読込中... しばらくお待ち下さい"},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t}},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{staticClass:"elevation-1"},[n("v-toolbar-title",[e._v(e._s(e.title))]),n("v-spacer"),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"検索","sigle-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),n("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"accent",dark:""}},"v-btn",r,!1),a),[e._v(" アイテム追加 ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",[e._v(e._s(e.formTitle))])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"タイトル"},model:{value:e.editedTitle,callback:function(t){e.editedTitle=t},expression:"editedTitle"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"担当"},model:{value:e.editedAssignees,callback:function(t){e.editedAssignees=t},expression:"editedAssignees"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-select",{attrs:{items:e.categories,"item-text":"name","item-value":"value",label:"カテゴリ","return-object":"","single-line":""},model:{value:e.editedCategory,callback:function(t){e.editedCategory=t},expression:"editedCategory"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"期限",readonly:""},model:{value:e.duedateFormatted,callback:function(t){e.duedateFormatted=t},expression:"duedateFormatted"}},"v-text-field",r,!1),a))]}}]),model:{value:e.datepickerMenu,callback:function(t){e.datepickerMenu=t},expression:"datepickerMenu"}},[n("v-date-picker",{attrs:{"no-title":""},on:{input:function(t){e.datepickerMenu=!1}},model:{value:e.duedate,callback:function(t){e.duedate=t},expression:"duedate"}})],1)],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"作業時間_1"},model:{value:e.editedWorkingTime,callback:function(t){e.editedWorkingTime=t},expression:"editedWorkingTime"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"作業時間_2"},model:{value:e.editedWorkingTime2,callback:function(t){e.editedWorkingTime2=t},expression:"editedWorkingTime2"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{on:{click:e.close}},[e._v(" キャンセル ")]),n("v-btn",{attrs:{color:"accent"},on:{click:e.save}},[e._v(" "+e._s(e.saveButtonTitle)+" ")])],1)],1)],1),n("Confirm",{ref:"confirm"})],1)]},proxy:!0},{key:"item."+e.fields.STATUS,fn:function(t){var a=t.item;return[n("v-menu",{attrs:{transition:"scale-transition","offset-x":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-chip",e._g({attrs:{color:e.getStatusColor(a),dark:""}},r),[e._v(" "+e._s(e.getStatus(a))+" ")])]}}],null,!0),model:{value:a.statusMenu,callback:function(t){e.$set(a,"statusMenu",t)},expression:"item.statusMenu"}},[n("v-list",e._l(e.getStatusMenu(a),(function(t){return n("v-list-item",{key:t.id,on:{click:function(n){return e.executeAction(a,t.id)}}},[n("v-list-item-avatar",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-title",[e._v(e._s(t.name))])],1)})),1)],1)]}},{key:"item."+e.fields.DUEDATE,fn:function(t){var n=t.item;return[e._v(" "+e._s(e.getDuedate(n))+" ")]}},{key:"item.actions",fn:function(t){var a=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(a)}}},[e._v(" mdi-pencil ")]),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(a)}}},[e._v(" mdi-delete ")])]}}],null,!0)})},it=[],ot=(n("4160"),n("c975"),n("fb6a"),n("ac1f"),n("1276"),n("159b"),n("3835")),st=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":e.options.width},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:e.options.color,dense:"",flat:""}},[n("v-toolbar-title",{staticClass:"white--text"},[e._v(e._s(e.title))])],1),n("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!!e.message,expression:"!!message"}],staticClass:"pt-5"},[e._v(e._s(e.message))]),n("v-card-actions",{staticClass:"pt-0"},[n("v-spacer"),n("v-btn",{attrs:{color:"accent"},nativeOn:{click:function(t){return e.agree(t)}}},[e._v(" はい ")]),n("v-btn",{nativeOn:{click:function(t){return e.cancel(t)}}},[e._v(" いいえ ")])],1)],1)],1)},ct=[],ut=(n("d3b7"),{data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"secondary",width:400}}},methods:{open:function(e,t,n){var a=this;return this.dialog=!0,this.title=e,this.message=t,this.options=Object.assign(this.options,n),new Promise((function(e,t){a.resolve=e,a.reject=t}))},agree:function(){this.resolve(!0),this.dialog=!1},cancel:function(){this.resolve(!1),this.dialog=!1}}}),lt=ut,dt=n("169a"),mt=n("71d9"),vt=Object(m["a"])(lt,st,ct,!1,null,null,null),pt=vt.exports;p()(vt,{VBtn:k["a"],VCard:Oe["a"],VCardActions:Se["a"],VCardText:Se["b"],VDialog:dt["a"],VSpacer:et["a"],VToolbar:mt["a"],VToolbarTitle:tt["a"]});var ft="TODOサンプル",gt={TITLE:"Title",ASSIGNEES:"Assignee",CATEGORY:"Category",STATUS:"Status",WORKINGTIME:"WorkingTime",WORKINGTIME2:"WorkingTime2",DUEDATE:"DueDate"},ht={CATEGORY:[{name:"A",value:"categoryA"},{name:"B",value:"categoryB"},{name:"C",value:"categoryC"},{name:"Z",value:"categoryZ"}]},bt={"新規":[{id:"MoveToAssigned",name:"受け付ける",icon:"mdi-arrow-right-box"}],"受付":[{id:"BackToNew",name:"新規へ戻す",icon:"mdi-arrow-left-box"},{id:"MoveToPlanning",name:"段取りへ進める",icon:"mdi-arrow-right-box"}],"段取り":[{id:"BackToAssigned",name:"受付へ戻す",icon:"mdi-arrow-left-box"},{id:"MoveToInProgress",name:"作業中へ進める",icon:"mdi-arrow-right-box"}],"作業中":[{id:"MoveToPlanning",name:"段取りへ戻す",icon:"mdi-arrow-left-box"},{id:"MoveToInReview",name:"確認へ進める",icon:"mdi-arrow-right-box"}],"確認":[{id:"BackToInProgress",name:"作業中へ戻す",icon:"mdi-arrow-left-box"},{id:"MoveToClosed",name:"完了する",icon:"mdi-arrow-right-box"}],"完了":[{id:"BackToInReview",name:"確認へ戻す",icon:"mdi-arrow-left-box"}]},xt={HYPHEN:"-",SLASH:"/"},It=(n("b0c0"),function(e,t){var n="";return e.forEach((function(e){e.value===t&&(n=e.name)})),n}),wt={getOptionNameByValue:It},Tt={name:"ItemList",components:{Confirm:pt},data:function(){return{title:ft,loading:!0,search:"",sortBy:"",headers:[{text:"タイトル",value:gt.TITLE},{text:"担当",value:gt.ASSIGNEES},{text:"カテゴリ",value:gt.CATEGORY},{text:"ステータス",value:gt.STATUS},{text:"期限",value:gt.DUEDATE},{text:"作業時間_1",value:gt.WORKINGTIME},{text:"作業時間_2",value:gt.WORKINGTIME2},{text:"操作",value:"actions",sortable:!1}],applicationId:"APP-MTggkbQA",datastoreId:"Db-todo1",defaultItem:{},categories:ht.CATEGORY,fields:gt,items:[],dialog:!1,datepickerMenu:!1,editedIndex:-1,editedItem:{},duedate:""}},computed:{formTitle:function(){return-1===this.editedIndex?"アイテム追加":"アイテム編集"},saveButtonTitle:function(){return-1===this.editedIndex?"追加":"更新"},duedateFormatted:function(){return this.convertDateSeparator(this.duedate,xt.HYPHEN,xt.SLASH)},editedTitle:{get:function(){return this.editedItem[gt.TITLE]?this.editedItem[gt.TITLE]:""},set:function(e){this.$set(this.editedItem,gt.TITLE,e)}},editedAssignees:{get:function(){return this.editedItem[gt.ASSIGNEES]?this.editedItem[gt.ASSIGNEES]:""},set:function(e){this.$set(this.editedItem,gt.ASSIGNEES,e)}},editedCategory:{get:function(){var e=this.editedItem[gt.CATEGORY];if(!e||e.length<1)return{};var t={name:wt.getOptionNameByValue(ht.CATEGORY,e),value:e};return t},set:function(e){this.$set(this.editedItem,gt.CATEGORY,e.value)}},editedWorkingTime:{get:function(){return this.editedItem[gt.WORKINGTIME]?this.editedItem[gt.WORKINGTIME]:""},set:function(e){this.$set(this.editedItem,gt.WORKINGTIME,e)}},editedWorkingTime2:{get:function(){return this.editedItem[gt.WORKINGTIME2]?this.editedItem[gt.WORKINGTIME2]:""},set:function(e){this.$set(this.editedItem,gt.WORKINGTIME2,parseInt(e))}}},watch:{dialog:function(e){e||this.close()}},methods:Object(o["a"])(Object(o["a"])({},Object(s["b"])("system",["updateLoading"])),{},{initialize:function(){var e=this;return Object(H["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.sortBy||"",e.sortBy="",t.next=4,e.getItems();case 4:e.sortBy=n,e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},convertDateSeparator:function(e,t,n){if(!e)return null;var a=e.split(t),r=Object(ot["a"])(a,3),i=r[0],o=r[1],s=r[2];return"".concat(i).concat(n).concat(o).concat(n).concat(s)},convertDateToLocalString:function(e,t){var n=e.getFullYear(),a=("0"+(e.getMonth()+1)).slice(-2),r=("0"+e.getDate()).slice(-2);return"".concat(n).concat(t).concat(a).concat(t).concat(r)},getDuedate:function(e){return e[gt.DUEDATE]?this.convertDateToLocalString(new Date(e[gt.DUEDATE]),xt.SLASH):""},getStatusColor:function(e){var t=e[gt.STATUS],n="white";switch(t){case"新規":n="light-blue lighten-3";break;case"受付":n="light-blue darken-1";break;case"段取り":n="purple lighten-2";break;case"作業中":n="light-blue darken-4";break;case"確認":n="cyan darken-1";break;case"完了":n="cyan darken-4";break}return n},getStatus:function(e){return e[gt.STATUS]},resetEditedItem:function(){this.editedIndex=-1,this.editedItem=Object.assign({},this.defaultItem),this.duedate=""},getItems:function(){var e=this;return Object(H["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=1,a=0,t.next=4,ie.datastore.getItems(e.applicationId,e.datastoreId,n,a);case 4:e.items=t.sent,e.items.forEach((function(e){e.statusMenu=!1}));case 6:case"end":return t.stop()}}),t)})))()},editItem:function(e){var t=this;return Object(H["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,ie.datastore.getItem(t.applicationId,t.datastoreId,e.i_id);case 2:a=n.sent,r={},r[gt.TITLE]=a[gt.TITLE].value,r[gt.ASSIGNEES]=a[gt.ASSIGNEES].value,r[gt.CATEGORY]=a[gt.CATEGORY].value,r[gt.DUEDATE]=a[gt.DUEDATE].value,r[gt.WORKINGTIME]=a[gt.WORKINGTIME].value,r[gt.WORKINGTIME2]=a[gt.WORKINGTIME2].value,t.editedIndex=t.items.indexOf(e),t.editedItem=r,r[gt.DUEDATE]&&(t.duedate=t.convertDateToLocalString(new Date(r[gt.DUEDATE]),xt.HYPHEN)),t.dialog=!0;case 14:case"end":return n.stop()}}),n)})))()},deleteItem:function(e){var t=this;return Object(H["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$refs.confirm.open("アイテム削除","アイテムを削除しますか？",{color:"primary"});case 2:if(!n.sent){n.next=9;break}return a=e.i_id,t.updateLoading(!0),n.next=7,ie.datastore.deleteItem(t.applicationId,t.datastoreId,a);case 7:t.updateLoading(!1),t.initialize();case 9:case"end":return n.stop()}}),n)})))()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.resetEditedItem()}))},save:function(){var e=this;return Object(H["a"])(regeneratorRuntime.mark((function t(){var n,a,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.updateLoading(!0),!(e.editedIndex>-1)){t.next=9;break}return n=e.items[e.editedIndex].i_id,a=e.items[e.editedIndex].rev_no,r=e.buildEditedItem(),t.next=7,ie.datastore.updateItem(e.applicationId,e.datastoreId,n,r,a);case 7:t.next=12;break;case 9:return i=e.buildEditedItem(),t.next=12,ie.datastore.newItem(e.applicationId,e.datastoreId,i);case 12:e.updateLoading(!1),e.close(),e.initialize();case 15:case"end":return t.stop()}}),t)})))()},buildEditedItem:function(){var e={};if(this.duedate){var t=new Date(this.duedate+"T00:00:00+0900").toISOString().split(".")[0]+"Z";e[gt.DUEDATE]=t}return e[gt.TITLE]=this.editedItem[gt.TITLE],e[gt.ASSIGNEES]=this.editedItem[gt.ASSIGNEES],e[gt.CATEGORY]=this.editedItem[gt.CATEGORY],e[gt.WORKINGTIME]=this.editedItem[gt.WORKINGTIME],e[gt.WORKINGTIME2]=this.editedItem[gt.WORKINGTIME2],e},getStatusMenu:function(e){return bt[e[gt.STATUS]]},executeAction:function(e,t){var n=this;return Object(H["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n.updateLoading(!0),a.next=3,ie.datastore.executeAction(n.applicationId,n.datastoreId,e.i_id,t,e.rev_no);case 3:n.updateLoading(!1),n.initialize();case 5:case"end":return a.stop()}}),a)})))()}}),created:function(){this.initialize()}},kt=Tt,Ot=(n("d3e4"),n("cc20")),St=n("8fea"),_t=n("2e4b"),Et=n("b974"),yt=Object(m["a"])(kt,rt,it,!1,null,"19897393",null),jt=yt.exports;p()(yt,{VBtn:k["a"],VCard:Oe["a"],VCardActions:Se["a"],VCardText:Se["b"],VCardTitle:Se["c"],VChip:Ot["a"],VCol:_e["a"],VContainer:Ee["a"],VDataTable:St["a"],VDatePicker:_t["a"],VDialog:dt["a"],VIcon:Ue["a"],VList:$e["a"],VListItem:Ke["a"],VListItemAvatar:He["a"],VListItemTitle:Ye["c"],VMenu:qe["a"],VRow:Ve["a"],VSelect:Et["a"],VSpacer:et["a"],VTextField:xe["a"],VToolbar:mt["a"],VToolbarTitle:tt["a"]});var Vt={name:"Home",components:{Header:at,ItemList:jt}},At=Vt,Rt=Object(m["a"])(At,Le,Me,!1,null,null,null),Lt=Rt.exports;a["a"].use(L["a"]);var Mt=[{path:"/login",name:"login",component:Re},{path:"/",name:"home",component:Lt,meta:{requiresAuth:!0}}],Ct=new L["a"]({mode:"history",base:"",routes:Mt});Ct.beforeEach((function(e,t,n){var a=e.matched.some((function(e){return e.meta.requiresAuth}));a?de.getters["user/status"]?n():n({name:"login"}):n()}));var Nt=Ct,Dt=n("f309"),Gt=n("4c93"),Wt=n("ddd7"),Bt=n("fcf4");Object(pe["d"])("ja",Wt),Object(pe["c"])("required",Object(o["a"])({},Gt["b"])),Object(pe["c"])("email",Object(o["a"])({},Gt["a"])),a["a"].use(Dt["a"]);var Pt=new Dt["a"]({theme:{themes:{light:{primary:Bt["a"].blueGrey,secondary:Bt["a"].grey,accent:Bt["a"].pink.accent2,error:Bt["a"].pink.lighten2}}}}),Ut=function(){F.a.interceptors.request.use((function(e){e.headers["content-type"]="application/json";var t=de.getters["user/token"];return t&&(e.headers["Authorization"]="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)})),F.a.interceptors.response.use((function(e){return e}),(function(e){return 401!==e.response.status&&de.dispatch("snackbar/showMessage","API実行中にエラーが発生しました。(".concat(e.message,")")),Promise.reject(e)}))};Ut(),a["a"].config.productionTip=!1,a["a"].config.errorHandler=function(e){console.error("vue example1 =>"),console.error(e)},new a["a"]({router:Nt,store:de,vuetify:Pt,render:function(e){return e(R)}}).$mount("#app")},"91f0":function(e,t,n){},d3e4:function(e,t,n){"use strict";var a=n("91f0"),r=n.n(a);r.a}});
//# sourceMappingURL=index.6170b53f.js.map