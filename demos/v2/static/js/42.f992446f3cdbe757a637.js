webpackJsonp([42,70],{214:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(224),o=i(r);e.default={mounted:function(){var t=this;this.$nextTick(function(){(0,o.default)(t.$el)})}}},217:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(143);e.default={mixins:[i.childMixin],props:{activeClass:String,disabled:Boolean},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}},218:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(143);e.default={mixins:[i.parentMixin],mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.hasReady=!0},0)})},props:{lineWidth:{type:Number,default:3},activeColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:!0}},computed:{barLeft:function(){return this.currentIndex*(100/this.number)+"%"},barRight:function(){return(this.number-this.currentIndex-1)*(100/this.number)+"%"},barStyle:function(){return{left:this.barLeft,right:this.barRight,display:"block",backgroundColor:this.activeColor,height:this.lineWidth+"px",transition:this.hasReady?null:"none"}},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}}},watch:{currentIndex:function(t,e){this.direction=t>e?"forward":"backward",this.$emit("on-index-change",t,e)}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}}}},224:function(t,e){"use strict";function n(){var t=window.navigator.userAgent,e=t.match(/(iPad|iPhone|iPod)\s+OS\s([\d_.]+)/);return e&&e[2]&&parseInt(e[2].replace(/_/g,"."),10)>=6}function i(){for(var t=["","-webkit-","-ms-","-moz-","-o-"],e="",n=0;n<t.length;n++)e+="position:"+t[n]+"sticky";var i=document.createElement("div"),r=document.body;i.style.cssText="display:none"+e,r.appendChild(i);var o=/sticky/i.test(window.getComputedStyle(i).position);return r.removeChild(i),i=null,o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(n()||i())t.classList.add("vux-sticky");else{var e=t.offsetTop;window.addEventListener("scroll",function(){window.scrollY>=e?t.classList.add("vux-fixed"):t.classList.remove("vux-fixed")})}}},251:function(t,e,n){e=t.exports=n(2)(),e.push([t.id,".vux-tab-ink-bar{position:absolute;height:2px;bottom:0;left:0;background-color:#f90}.vux-tab-ink-bar-transition-forward{transition:right .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1) .09s}.vux-tab-ink-bar-transition-backward{transition:right .3s cubic-bezier(.35,0,.25,1) .09s,left .3s cubic-bezier(.35,0,.25,1)}.vux-tab{display:-ms-flexbox;display:flex;background-color:#fff;height:44px;position:relative}.vux-tab button{padding:0;border:0;outline:0;background:0 0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.vux-tab .vux-tab-item{display:block;-ms-flex:1;flex:1;width:100%;height:100%;box-sizing:border-box;background:linear-gradient(180deg,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;background-size:100% 1px;font-size:14px;text-align:center;line-height:44px;color:#666}.vux-tab .vux-tab-item.vux-tab-selected{color:#f90;border-bottom:3px solid #f90}.vux-tab .vux-tab-item.vux-tab-disabled{color:#ddd}.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected{background:0 0}","",{version:3,sources:["/./src/components/tab/tab.vue"],names:[],mappings:"AACA,iBAAiB,kBAAkB,WAAW,SAAS,OAAO,qBAAwB,CACrF,AACD,oCAAoC,sFAA4F,CAC/H,AACD,qCAAqC,sFAA4F,CAChI,AACD,SAAS,oBAAoB,aAAa,sBAAsB,YAAY,iBAAiB,CAC5F,AACD,gBAAgB,UAAU,SAAS,UAAU,eAAe,wBAAwB,qBAAqB,eAAe,CACvH,AACD,uBAAuB,cAAc,WAAW,OAAO,WAAW,YAAY,sBAAsB,qFAAgG,yBAAyB,eAAe,kBAAkB,iBAAiB,UAAU,CACxR,AACD,wCAAwC,WAAc,4BAA+B,CACpF,AACD,wCAAwC,UAAU,CACjD,AACD,2DAA2D,cAAc,CACxE",file:"tab.vue",sourcesContent:["\n.vux-tab-ink-bar{position:absolute;height:2px;bottom:0;left:0;background-color:#FF9900\n}\n.vux-tab-ink-bar-transition-forward{transition:right .3s cubic-bezier(.35, 0, .25, 1),left .3s cubic-bezier(.35, 0, .25, 1) .09s\n}\n.vux-tab-ink-bar-transition-backward{transition:right .3s cubic-bezier(.35, 0, .25, 1) .09s,left .3s cubic-bezier(.35, 0, .25, 1)\n}\n.vux-tab{display:-ms-flexbox;display:flex;background-color:#fff;height:44px;position:relative\n}\n.vux-tab button{padding:0;border:0;outline:0;background:0 0;-webkit-appearance:none;-moz-appearance:none;appearance:none\n}\n.vux-tab .vux-tab-item{display:block;-ms-flex:1;flex:1;width:100%;height:100%;box-sizing:border-box;background:linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229,229,229,0)) bottom left no-repeat;background-size:100% 1px;font-size:14px;text-align:center;line-height:44px;color:#666\n}\n.vux-tab .vux-tab-item.vux-tab-selected{color:#FF9900;border-bottom:3px solid #FF9900\n}\n.vux-tab .vux-tab-item.vux-tab-disabled{color:#ddd\n}\n.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected{background:0 0\n}"],sourceRoot:"webpack://"}])},254:function(t,e,n){e=t.exports=n(2)(),e.push([t.id,".vux-sticky{width:100%;position:-webkit-sticky;position:sticky;top:0}.vux-fixed{width:100%;position:fixed;top:0}","",{version:3,sources:["/./src/components/sticky/index.vue"],names:[],mappings:"AACA,YACE,WAAY,AACZ,wBAAyB,AACzB,gBAAiB,AACjB,KAAO,CACR,AACD,WACE,WAAY,AACZ,eAAgB,AAChB,KAAO,CACR",file:"index.vue",sourcesContent:["\n.vux-sticky {\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n.vux-fixed {\n  width: 100%;\n  position: fixed;\n  top: 0;\n}\n"],sourceRoot:"webpack://"}])},261:function(t,e,n){var i=n(251);"string"==typeof i&&(i=[[t.id,i,""]]);n(3)(i,{});i.locals&&(t.exports=i.locals)},264:function(t,e,n){var i=n(254);"string"==typeof i&&(i=[[t.id,i,""]]);n(3)(i,{});i.locals&&(t.exports=i.locals)},283:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-tab-item",class:[t.currentSelected?t.activeClass:"",{"vux-tab-selected":t.currentSelected,"vux-tab-disabled":t.disabled}],style:t.style,on:{click:t.onItemClick}},[t._t("default")],2)},staticRenderFns:[]}},284:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-tab",class:{"vux-tab-no-animate":!t.animate}},[t._t("default"),t._v(" "),t.animate?n("div",{staticClass:"vux-tab-ink-bar",class:t.barClass,style:t.barStyle}):t._e()],2)},staticRenderFns:[]}},287:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("default")],2)},staticRenderFns:[]}},294:function(t,e,n){var i,r;n(264),i=n(214);var o=n(287);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=i},297:function(t,e,n){var i,r;i=n(217);var o=n(283);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=i},298:function(t,e,n){var i,r;n(261),i=n(218);var o=n(284);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=i},412:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(298),o=i(r),a=n(297),s=i(a),c=n(294),u=i(c);e.default={components:{Tab:o.default,TabItem:s.default,Sticky:u.default}}},721:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("sticky",[n("tab",{attrs:{"line-width":1}},[n("tab-item",{attrs:{selected:""}},[t._v("正在正映")]),t._v(" "),n("tab-item",[t._v("即将上映")])],1)],1),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br")],1)},staticRenderFns:[]}},836:function(t,e,n){var i,r;i=n(412);var o=n(721);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=i}});