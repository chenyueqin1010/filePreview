webpackJsonp([0],{J33l:function(e,i){},YnU7:function(e,i){},gORT:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={data:function(){return{showPdf:!1,pdfUrl:"https://chenyueqin1010.github.io/testPage/demo.pdf",images:["https://chenyueqin1010.github.io/testPage/demo.jpg"],show:!1}},components:{},mounted:function(){wx.config({beta:!0,debug:!0,appId:"",timestamp:"",nonceStr:"",signature:"",jsApiList:["previewImg","previewFile"]}),wx.ready(function(){}),wx.error(function(e){})},methods:{handleBeforePreview:function(){this.showPdf=!0},previewFile:function(e){var i="https://chenyueqin1010.github.io/testPage/"+e;wx.previewFile({url:i,name:"文件预览测试",size:12241})},previewFile2:function(e){var i="/testPage/"+e;wx.previewFile({url:i,name:"文件预览测试",size:12241})},previewImg:function(e){wx.previewImage({current:"https://chenyueqin1010.github.io/testPage/"+e,urls:["https://chenyueqin1010.github.io/testPage/"+e]})}}},r={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"hello"},[t("div",{staticClass:"previewFile",on:{click:function(i){return e.previewFile("demo.docx")}}},[e._v("文件预览(绝对路径)-doc")]),e._v(" "),t("div",{staticClass:"previewFile",on:{click:function(i){return e.previewFile2("demo.docx")}}},[e._v("文件预览（相对路径）-doc")]),e._v(" "),t("div",{staticClass:"previewFile",on:{click:function(i){return e.previewFile("demo.pdf")}}},[e._v("文件预览-pdf")]),e._v(" "),t("div",{staticClass:"previewFile",on:{click:function(i){return e.previewFile("demo.pptx")}}},[e._v("文件预览-ppt")]),e._v(" "),t("div",{staticClass:"previewFile",on:{click:function(i){return e.previewFile("demo.xlsx")}}},[e._v("文件预览-excel")]),e._v(" "),t("div",{staticClass:"previewFile",on:{click:function(i){return e.previewImg("demo.jpg")}}},[e._v("图片预览")])])},staticRenderFns:[]};var c=t("VU/8")(n,r,!1,function(e){t("YnU7"),t("J33l")},"data-v-331058ff",null);i.default=c.exports}});