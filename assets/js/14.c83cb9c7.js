(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{787:function(e,t,l){"use strict";l.r(t);l(44),l(190),l(6);var a=l(1),i={__name:"index",setup:function(e){var t=this;return{__sfc:!0,reactiveData:Object(a.reactive)({table:{border:!0,firstColumn:{type:"index",label:"序列"},data:[],columns:[{prop:"name",label:"姓名",minWidth:"100",configEdit:{label:"姓名",type:"input",editComponent:"el-input"}},{prop:"hobby",label:"爱好",minWidth:"180",configEdit:{label:"爱好",type:"select-arr",editComponent:"el-select",list:"hobbyList",arrLabel:"label",arrKey:"value"}},{prop:"number",label:"计数器",minWidth:"220",configEdit:{label:"计数器",type:"inputNumber",bind:{controls:!1,min:2,max:99},editComponent:"el-input-number"}},{prop:"checkbox",label:"复选框",minWidth:"220",configEdit:{label:"复选框",type:"checkbox",list:"hobbyList",editComponent:"el-checkbox-group"}}],operator:[{type:"danger",text:"删除",fun:this.del}]},listTypeInfo:{hobbyList:[{label:"吉他",value:"0"},{label:"看书",value:"1"},{label:"美剧",value:"2"},{label:"旅游",value:"3"},{label:"音乐",value:"4"}]}}),add:function(){console.log("新增");t.table.data.push({name:"",hobby:"",checkbox:[],number:0})},del:function(e,t){t.splice(e,1),console.log("删除",t,e)},save:function(e){e.some((function(e){return""===e.hobby}))?t.$message.error("爱好不能为空"):console.log("保存",e)},reactive:a.reactive}}},n=l(2),o=Object(n.a)(i,(function(){var e=this._self._c,t=this._self._setupProxy;return e("div",{staticClass:"t-edit-table-demo"},[e("rt-layout",{attrs:{sectionTitle:"编辑table",isShowTitle:!1}},[e("div",{staticClass:"content-main"},[e("div",{staticClass:"card-wrap"},[e("rt-edit-table",{attrs:{table:t.reactiveData.table,listTypeInfo:t.reactiveData.listTypeInfo},on:{add:t.add,save:t.save}})],1)])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);