(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{816:function(a,t,e){"use strict";e.r(t);var i=e(1),s={__name:"radio",setup:function(a){return{__sfc:!0,reactiveData:Object(i.reactive)({table:{firstColumn:{type:"radio"},data:[{id:"1",date:"2019-09-25",name:"张三",status:"2",address:"广东省广州市天河区"},{id:"2",date:"2019-09-26",name:"张三1",status:"1",address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"},{id:"3",date:"2019-09-27",name:"张三2",status:"3",address:"广东省广州市天河区3"}]},columns:[{prop:"name",label:"姓名",minWidth:"100"},{prop:"date",label:"日期",minWidth:"180"},{prop:"address",label:"地址",minWidth:"220"},{prop:"date",label:"日期",minWidth:"180"}]}),radioChange:function(a){console.log("单选传出数据",a)},reactive:i.reactive}}},n=e(2),r=Object(n.a)(s,(function(){var a=this._self._c,t=this._self._setupProxy;return a("div",{staticClass:"t-table",staticStyle:{width:"100%"}},[a("rt-table",{attrs:{table:t.reactiveData.table,rowClickRadio:"",columns:t.reactiveData.columns},on:{radioChange:t.radioChange}})],1)}),[],!1,null,null,null);t.default=r.exports}}]);