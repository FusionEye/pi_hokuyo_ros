webpackJsonp([0],{BQ3O:function(e,t,n){var i=n("oSn1");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("8bSs")("5c2bf48a",i,!0)},gJfO:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("vLgD");var l={name:"complexTable",data:function(){return{tableKey:0,list:null,total:null,listLoading:!0,codeSyncing:!1,dialogFormVisible:!1,dialogIframeComplete:!1,dialogCaseResVisible:!1,logDialogVisible:!1,detailDialogVisible:!1,dialogCaseHisVisible:!1,caseResultList:null,sinHisCaseList:null,stepList:null,caseListLoading:!0,detail:null,addIndex:1,watch1:null,watch2:null,listQuery:{page:1,limit:20,caseName:""},caseForm:{salt:"",caseName:"",note:""},multipleSelection:[]}},filters:{},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,Object(i.a)({url:"/ros/list",method:"get"}).then(function(t){e.list=t.data.result,e.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleRecord:function(){var e=this;this.codeSyncing=!0,Object(i.a)({url:"/ros/record",method:"get"}).then(function(e){}),setInterval(function(){e.codeSyncing=!1},3e3),this.$message.success("录制开始，请等待")},handleClose:function(){var e=this;this.codeSyncing=!0,Object(i.a)({url:"/ros/close",method:"get"}).then(function(t){e.codeSyncing=!1,t.data.success?e.$message.success("停机完成"):e.$message.error("错了哦，失败 \n "+t.data.message)})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleSelectionChange:function(e){this.multipleSelection=e},handleDownload:function(e,t){var n,l=this;this.$set(t,"running",!0),(n=t.fileName,Object(i.a)({url:"/ros/download/"+n,method:"get"})).then(function(e){var n=new Blob([e.data],{type:"application/octet-stream"}),i=document.createElement("a");i.href=window.URL.createObjectURL(n),i.download=t.fileName,i.click()}),setInterval(function(){l.$set(t,"running",!1)},3e3)},handleDelete:function(e,t){var n,l=this;this.$set(t,"running",!0),(n=t.fileName,Object(i.a)({url:"/ros/delete/"+n,method:"get"})).then(function(e){e.data.success?l.$message.success("删除完成"):l.$message.error("错了哦，失败 \n "+e.data.message),l.getList()}),setInterval(function(){l.$set(t,"running",!1)},3e3)}}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:e.$t("ros.fileName")},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.caseName,callback:function(t){e.$set(e.listQuery,"caseName",t)},expression:"listQuery.caseName"}}),e._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("table.search")))]),e._v(" "),n("el-button",{staticClass:"filter-item",attrs:{loading:e.codeSyncing,type:"primary",icon:"el-icon-refresh"},on:{click:e.handleRecord}},[e._v(e._s(e.$t("ros.recordBtn")))]),e._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-view"},on:{click:e.handleClose}},[e._v(e._s(e.$t("ros.closeBtn")))])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,stripe:"","element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{align:"center",type:"index",label:"No",width:"85"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.$index)+"\n        ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:e.$t("ros.fileName"),width:"420"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.fileName))])]}}])}),e._v(" "),e._e(),e._v(" "),n("el-table-column",{attrs:{align:"center",label:e.$t("ros.size"),width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.size)+"M")])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:e.$t("ros.createTime"),width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.createTime))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:e.$t("ros.actions"),width:"350","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){e.handleDownload(t.$index,t.row)}}},[e._v(e._s(e.$t("ros.downloadBtn")))]),e._v(" "),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){e.handleDelete(t.$index,t.row)}}},[e._v(e._s(e.$t("ros.deleteBtn")))])]}}])})],1)],1)},staticRenderFns:[]};var s=n("vSla")(l,a,!1,function(e){n("BQ3O")},null,null);t.default=s.exports},oSn1:function(e,t,n){(e.exports=n("BkJT")(!1)).push([e.i,"\n.text-wrapper {\n  white-space: pre-wrap;\n}\n",""])}});