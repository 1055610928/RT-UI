(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{774:function(e){e.exports=JSON.parse('{"success":true,"code":200,"msg":"成功","data":{"pageSize":6,"pages":5,"total":27,"pageNum":1,"sortNum":null,"records":[{"id":3,"materialName":"UHP450*2250（450*2250 UHP)"},{"id":5,"materialName":"二培UHP450*2250（450*2250 UHP)"},{"id":6,"materialName":"石墨UHP450*2250-6（450*2550 UHP)"},{"id":7,"materialName":"石墨UHP450*2250-7（450*2550 UHP)"},{"id":8,"materialName":"石墨UHP450*2250-8（450*2550 UHP)"},{"id":9,"materialName":"石墨UHP450*2250-9（450*2550 UHP)"}]}}')},775:function(e){e.exports=JSON.parse('{"success":true,"code":200,"msg":"成功","data":{"pageSize":6,"pages":5,"total":27,"pageNum":2,"sortNum":null,"records":[{"id":10,"materialName":"石墨UHP450*2250-10（450*2550 UHP)"},{"id":11,"materialName":"石墨UHP450*2250-11（450*2550 UHP)"},{"id":12,"materialName":"石墨UHP450*2250-12（450*2550 UHP)"},{"id":13,"materialName":"石墨UHP450*2250-13（450*2550 UHP)"},{"id":14,"materialName":"石墨UHP450*2250-14（450*2550 UHP)"},{"id":15,"materialName":"石墨UHP450*2250-15（450*2550 UHP)"}]}}')},796:function(e,a,t){"use strict";t.r(a);var r=t(774),i=t(775),l=t(1),o={__name:"index",setup:function(e){var a=Object(l.reactive)({addForm:{materialId:null},addFormRules:{materialId:[{required:!0,message:"请选择品名(原料)！",trigger:"change"}]},materialIdArr:[],setSelectPage:{pageSize:6,currentPage:1,pagerCount:7,total:0}}),t=Object(l.ref)(null),o=function(e){var t;(t=1===e?r:i).success&&(a.materialIdArr=t.data.records,a.setSelectPage.total=t.data.total)};o(1);return{__sfc:!0,reactiveData:a,addForm:t,selectMaterialList:o,pageChange:function(e){a.setSelectPage.currentPage=e,o(a.setSelectPage.currentPage)},selectChange:function(e){console.log("回显的值为："+e)},submitImportForm:function(){t.value&&t.value.validate((function(e){e&&console.log("提交",a.addForm)}))},data:r,data2:i,reactive:l.reactive,ref:l.ref}}},m=t(2),s=Object(m.a)(o,(function(){var e=this,a=e._self._c,t=e._self._setupProxy;return a("div",{staticClass:"t-pagination-select-demo",staticStyle:{width:"100%","min-height":"100px",padding:"15px"}},[a("el-form",{ref:"addForm",staticClass:"demo-ruleForm",attrs:{model:t.reactiveData.addForm,rules:t.reactiveData.addFormRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"品名(原料)",prop:"materialId"}},[a("rt-pagination-select",{attrs:{optionSource:t.reactiveData.materialIdArr,labelKey:"materialName",valueKey:"id",paginationOption:t.reactiveData.setSelectPage,whetherSetAllSelect:""},on:{pageChange:t.pageChange,selectChange:t.selectChange},model:{value:t.reactiveData.addForm.materialId,callback:function(a){e.$set(t.reactiveData.addForm,"materialId",a)},expression:"reactiveData.addForm.materialId"}})],1)],1),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.submitImportForm}},[e._v("提交")])],1)}),[],!1,null,null,null);a.default=s.exports}}]);