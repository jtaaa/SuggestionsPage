webpackJsonp([1,4],{"/fcW":function(n,t){function e(n){throw new Error("Cannot find module '"+n+"'.")}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id="/fcW"},0:function(n,t,e){n.exports=e("x35b")},"1A80":function(n,t,e){"use strict";function l(n){return a._15(0,[(n()(),a._16(0,null,null,0,"span",[["class","glyphicon glyphicon-remove form-control-feedback"]],null,null,null,null,null))],null,null)}function u(n){return a._15(0,[(n()(),a._16(0,null,null,0,"span",[["class","glyphicon glyphicon-remove form-control-feedback"]],null,null,null,null,null))],null,null)}function i(n){return a._15(0,[(n()(),a._16(0,null,null,6,"li",[["class","list-group-item justify-content-between"]],null,null,null,null,null)),(n()(),a._17(null,["\n      ","\n      "])),(n()(),a._16(0,null,null,0,"i",[["class","fa fa-remove fa-2x pull-right"]],null,[[null,"click"]],function(n,t,e){var l=!0,u=n.component;if("click"===t){l=!1!==u.removeSuggestions(n.context.$implicit)&&l}return l},null,null)),(n()(),a._17(null,["\n      "])),(n()(),a._16(0,null,null,1,"span",[["class","badge badge-default badge-pill"]],null,null,null,null,null)),(n()(),a._17(null,["",""])),(n()(),a._17(null,["\n    "]))],null,function(n,t){n(t,1,0,t.context.$implicit.suggestion),n(t,5,0,t.context.$implicit.id)})}function r(n){return a._15(0,[(n()(),a._16(0,null,null,10,"div",[["class","container"]],null,null,null,null,null)),(n()(),a._17(null,["\n  "])),(n()(),a._16(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),a._17(null,["Current Suggestions"])),(n()(),a._17(null,["\n  "])),(n()(),a._16(0,null,null,4,"ul",[["class","list-group"]],null,null,null,null,null)),(n()(),a._17(null,["\n    "])),(n()(),a._18(8388608,null,null,1,null,i)),a._19(401408,null,0,c.f,[a._0,a._1,a.t],{ngForOf:[0,"ngForOf"]},null),(n()(),a._17(null,["\n  "])),(n()(),a._17(null,["\n"]))],function(n,t){n(t,8,0,t.component.suggestions)},null)}function o(n){return a._15(0,[(n()(),a._16(0,null,null,7,"div",[["class","jumbotron text-center"]],null,null,null,null,null)),(n()(),a._17(null,["\n  "])),(n()(),a._16(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),a._17(null,["",""])),(n()(),a._17(null,["\n  "])),(n()(),a._16(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a._17(null,["Work in Progress!"])),(n()(),a._17(null,["\n"])),(n()(),a._17(null,["\n\n"])),(n()(),a._16(0,null,null,49,"div",[["class","container"]],null,null,null,null,null)),(n()(),a._17(null,["\n  "])),(n()(),a._16(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a._17(null,["Insert your suggestions below!:"])),(n()(),a._17(null,["\n  "])),(n()(),a._16(0,null,null,43,"form",[["name","suggestionForm"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,t,e){var l=!0;if("submit"===t){l=!1!==a._20(n,16).onSubmit(e)&&l}if("reset"===t){l=!1!==a._20(n,16).onReset()&&l}return l},null,null)),a._19(8192,null,0,g.d,[],null,null),a._19(8192,null,0,g.e,[[8,null],[8,null]],null,null),a._21(1024,null,g.f,null,[g.e]),a._19(8192,null,0,g.g,[g.f],null,null),(n()(),a._17(null,["\n    "])),(n()(),a._16(0,null,null,15,"div",[["class","form-group"]],null,null,null,null,null)),a._19(139264,null,0,c.g,[a.t,a.u,a.V,a.W],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),a._17(null,["\n      "])),(n()(),a._16(0,null,null,1,"label",[["for","author"]],null,null,null,null,null)),(n()(),a._17(null,["Name:"])),(n()(),a._17(null,["\n      "])),(n()(),a._16(0,null,null,5,"input",[["autofocus",""],["class","form-control"],["name","author"],["type","text"]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,t,e){var l=!0,u=n.component;if("input"===t){l=!1!==a._20(n,27)._handleInput(e.target.value)&&l}if("blur"===t){l=!1!==a._20(n,27).onTouched()&&l}if("compositionstart"===t){l=!1!==a._20(n,27)._compositionStart()&&l}if("compositionend"===t){l=!1!==a._20(n,27)._compositionEnd(e.target.value)&&l}if("ngModelChange"===t){l=!1!==(u.newSuggestion.author=e)&&l}return l},null,null)),a._19(8192,null,0,g.h,[a.W,a.V,[2,g.i]],null,null),a._21(512,null,g.j,function(n){return[n]},[g.h]),a._19(335872,null,0,g.k,[[2,g.f],[8,null],[8,null],[2,g.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a._21(1024,null,g.l,null,[g.k]),a._19(8192,null,0,g.m,[g.l],null,null),(n()(),a._17(null,["\n      "])),(n()(),a._18(8388608,null,null,1,null,l)),a._19(8192,null,0,c.h,[a._0,a._1],{ngIf:[0,"ngIf"]},null),(n()(),a._17(null,["\n    "])),(n()(),a._17(null,["\n\n    "])),(n()(),a._16(0,null,null,16,"div",[["class","form-group"]],null,null,null,null,null)),a._19(139264,null,0,c.g,[a.t,a.u,a.V,a.W],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),a._17(null,["\n      "])),(n()(),a._16(0,null,null,1,"label",[["for","suggestion"]],null,null,null,null,null)),(n()(),a._17(null,["Suggestion:"])),(n()(),a._17(null,["\n      "])),(n()(),a._16(0,null,null,6,"textarea",[["class","form-control"],["name","suggestion"],["rows","5"]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,t,e){var l=!0,u=n.component;if("input"===t){l=!1!==a._20(n,44)._handleInput(e.target.value)&&l}if("blur"===t){l=!1!==a._20(n,44).onTouched()&&l}if("compositionstart"===t){l=!1!==a._20(n,44)._compositionStart()&&l}if("compositionend"===t){l=!1!==a._20(n,44)._compositionEnd(e.target.value)&&l}if("ngModelChange"===t){l=!1!==(u.newSuggestion.suggestion=e)&&l}return l},null,null)),a._19(8192,null,0,g.h,[a.W,a.V,[2,g.i]],null,null),a._21(512,null,g.j,function(n){return[n]},[g.h]),a._19(335872,null,0,g.k,[[2,g.f],[8,null],[8,null],[2,g.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a._21(1024,null,g.l,null,[g.k]),a._19(8192,null,0,g.m,[g.l],null,null),(n()(),a._17(null,["      "])),(n()(),a._17(null,["\n      "])),(n()(),a._18(8388608,null,null,1,null,u)),a._19(8192,null,0,c.h,[a._0,a._1],{ngIf:[0,"ngIf"]},null),(n()(),a._17(null,["\n    "])),(n()(),a._17(null,["\n    "])),(n()(),a._16(0,null,null,1,"button",[["class","btn btn-default"],["type","submit"]],null,[[null,"click"]],function(n,t,e){var l=!0,u=n.component;if("click"===t){l=!1!==u.addSuggestion()&&l}return l},null,null)),(n()(),a._17(null,["\n      Submit\n    "])),(n()(),a._17(null,["\n  "])),(n()(),a._17(null,["\n"])),(n()(),a._17(null,["\n\n"])),(n()(),a._18(8388608,null,null,1,null,r)),a._19(8192,null,0,c.h,[a._0,a._1],{ngIf:[0,"ngIf"]},null),(n()(),a._17(null,["\n"]))],function(n,t){var e=t.component;n(t,21,0,"form-group",e.currentAuthorClasses),n(t,29,0,"author",e.newSuggestion.author),n(t,34,0,e.failedAuthor),n(t,38,0,"form-group",e.currentSuggestionClasses),n(t,46,0,"suggestion",e.newSuggestion.suggestion),n(t,52,0,e.failedAuthor),n(t,61,0,e.suggestions.length>0)},function(n,t){var e=t.component;n(t,3,0,e.title),n(t,14,0,a._20(t,18).ngClassUntouched,a._20(t,18).ngClassTouched,a._20(t,18).ngClassPristine,a._20(t,18).ngClassDirty,a._20(t,18).ngClassValid,a._20(t,18).ngClassInvalid,a._20(t,18).ngClassPending),n(t,26,0,a._22(1,"",e.authorPlaceholder,""),a._20(t,31).ngClassUntouched,a._20(t,31).ngClassTouched,a._20(t,31).ngClassPristine,a._20(t,31).ngClassDirty,a._20(t,31).ngClassValid,a._20(t,31).ngClassInvalid,a._20(t,31).ngClassPending),n(t,43,0,a._22(1,"",e.suggestionPlaceholder,""),a._20(t,48).ngClassUntouched,a._20(t,48).ngClassTouched,a._20(t,48).ngClassPristine,a._20(t,48).ngClassDirty,a._20(t,48).ngClassValid,a._20(t,48).ngClassInvalid,a._20(t,48).ngClassPending)})}function _(n){return a._15(0,[(n()(),a._16(0,null,null,2,"app-root",[],null,null,null,o,d)),a._21(256,null,p.a,p.a,[]),a._19(24576,null,0,h.a,[p.a],null,null)],null,null)}var s=e("Ni5f"),a=e("3j3K"),c=e("2Je8"),g=e("NVOs"),h=e("YWx4"),p=e("VXko");e.d(t,"a",function(){return y});var f=[s.a],d=a._14({encapsulation:0,styles:f,data:{}}),y=a._23("app-root",h.a,_,{},{},[])},Iksp:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){}return n}()},Ni5f:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=[".fa-remove[_ngcontent-%COMP%]{font-size:22px;padding-left:10px;margin-top:-2px}"]},PtLW:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(n){void 0===n&&(n={}),Object.assign(this,n)}return n}()},VXko:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){this.lastId=0,this.suggestions=[]}return n.prototype.addSuggestion=function(n){return n.id||(n.id=++this.lastId),this.suggestions.push(n),this},n.prototype.deleteSuggestionById=function(n){return this.suggestions=this.suggestions.filter(function(t){return t.id!=n}),this},n.prototype.getAllSuggestions=function(){return this.suggestions},n.prototype.getSuggestionById=function(n){return this.suggestions.filter(function(t){return t.id===n}).pop()},n.ctorParameters=function(){return[]},n}()},YWx4:function(n,t,e){"use strict";var l=e("VXko"),u=e("PtLW");e.d(t,"a",function(){return i});var i=function(){function n(n){this.suggestionDataService=n,this.title="Suggestions Page",this.failedAuthor=!1,this.failedSuggestion=!1,this.authorPlaceholder="Enter your name here!",this.suggestionPlaceholder="Write your suggestion here!",this.newSuggestion=new u.a}return n.prototype.setCurrentAuthorClasses=function(){this.currentAuthorClasses={"has-error":this.failedAuthor,"has-feedback":this.failedAuthor},this.authorPlaceholder="Your name is required."},n.prototype.setCurrentSuggestionClasses=function(){this.currentSuggestionClasses={"has-error":this.failedAuthor,"has-feedback":this.failedAuthor},this.suggestionPlaceholder="A suggestion is required."},n.prototype.addSuggestion=function(){null!=this.newSuggestion.author&&null!=this.newSuggestion.suggestion?(this.suggestionDataService.addSuggestion(this.newSuggestion),this.newSuggestion=new u.a,this.failedAuthor=!1,this.failedSuggestion=!1):(null==this.newSuggestion.author&&(this.failedAuthor=!0),null==this.newSuggestion.suggestion&&(this.failedSuggestion=!0)),this.setCurrentAuthorClasses(),this.setCurrentSuggestionClasses()},n.prototype.removeSuggestions=function(n){this.suggestionDataService.deleteSuggestionById(n.id)},Object.defineProperty(n.prototype,"suggestions",{get:function(){return this.suggestionDataService.getAllSuggestions()},enumerable:!0,configurable:!0}),n.ctorParameters=function(){return[{type:l.a}]},n}()},kZql:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l={production:!0}},kke6:function(n,t,e){"use strict";var l=e("3j3K"),u=e("Iksp"),i=e("2Je8"),r=e("Qbdm"),o=e("NVOs"),_=e("Fzro"),s=e("1A80");e.d(t,"a",function(){return g});var a=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])};return function(t,e){function l(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(l.prototype=e.prototype,new l)}}(),c=function(n){function t(t){return n.call(this,t,[s.a],[s.a])||this}return a(t,n),Object.defineProperty(t.prototype,"_LOCALE_ID_12",{get:function(){return null==this.__LOCALE_ID_12&&(this.__LOCALE_ID_12=l.b(this.parent.get(l.c,null))),this.__LOCALE_ID_12},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgLocalization_13",{get:function(){return null==this.__NgLocalization_13&&(this.__NgLocalization_13=new i.a(this._LOCALE_ID_12)),this.__NgLocalization_13},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Compiler_14",{get:function(){return null==this.__Compiler_14&&(this.__Compiler_14=new l.d),this.__Compiler_14},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_APP_ID_15",{get:function(){return null==this.__APP_ID_15&&(this.__APP_ID_15=l.e()),this.__APP_ID_15},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_IterableDiffers_16",{get:function(){return null==this.__IterableDiffers_16&&(this.__IterableDiffers_16=l.f()),this.__IterableDiffers_16},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_KeyValueDiffers_17",{get:function(){return null==this.__KeyValueDiffers_17&&(this.__KeyValueDiffers_17=l.g()),this.__KeyValueDiffers_17},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_DomSanitizer_18",{get:function(){return null==this.__DomSanitizer_18&&(this.__DomSanitizer_18=new r.b(this.parent.get(r.c))),this.__DomSanitizer_18},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Sanitizer_19",{get:function(){return null==this.__Sanitizer_19&&(this.__Sanitizer_19=this._DomSanitizer_18),this.__Sanitizer_19},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_HAMMER_GESTURE_CONFIG_20",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_20&&(this.__HAMMER_GESTURE_CONFIG_20=new r.d),this.__HAMMER_GESTURE_CONFIG_20},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EVENT_MANAGER_PLUGINS_21",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_21&&(this.__EVENT_MANAGER_PLUGINS_21=[new r.e(this.parent.get(r.c)),new r.f(this.parent.get(r.c)),new r.g(this.parent.get(r.c),this._HAMMER_GESTURE_CONFIG_20)]),this.__EVENT_MANAGER_PLUGINS_21},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EventManager_22",{get:function(){return null==this.__EventManager_22&&(this.__EventManager_22=new r.h(this._EVENT_MANAGER_PLUGINS_21,this.parent.get(l.h))),this.__EventManager_22},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵDomSharedStylesHost_23",{get:function(){return null==this.__ɵDomSharedStylesHost_23&&(this.__ɵDomSharedStylesHost_23=new r.i(this.parent.get(r.c))),this.__ɵDomSharedStylesHost_23},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵDomRendererFactory2_24",{get:function(){return null==this.__ɵDomRendererFactory2_24&&(this.__ɵDomRendererFactory2_24=new r.j(this._EventManager_22,this._ɵDomSharedStylesHost_23)),this.__ɵDomRendererFactory2_24},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RendererFactory2_25",{get:function(){return null==this.__RendererFactory2_25&&(this.__RendererFactory2_25=this._ɵDomRendererFactory2_24),this.__RendererFactory2_25},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵSharedStylesHost_26",{get:function(){return null==this.__ɵSharedStylesHost_26&&(this.__ɵSharedStylesHost_26=this._ɵDomSharedStylesHost_23),this.__ɵSharedStylesHost_26},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Testability_27",{get:function(){return null==this.__Testability_27&&(this.__Testability_27=new l.i(this.parent.get(l.h))),this.__Testability_27},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Meta_28",{get:function(){return null==this.__Meta_28&&(this.__Meta_28=new r.k(this.parent.get(r.c))),this.__Meta_28},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Title_29",{get:function(){return null==this.__Title_29&&(this.__Title_29=new r.l(this.parent.get(r.c))),this.__Title_29},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵi_30",{get:function(){return null==this.__ɵi_30&&(this.__ɵi_30=new o.a),this.__ɵi_30},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_BrowserXhr_31",{get:function(){return null==this.__BrowserXhr_31&&(this.__BrowserXhr_31=new _.a),this.__BrowserXhr_31},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ResponseOptions_32",{get:function(){return null==this.__ResponseOptions_32&&(this.__ResponseOptions_32=new _.b),this.__ResponseOptions_32},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_XSRFStrategy_33",{get:function(){return null==this.__XSRFStrategy_33&&(this.__XSRFStrategy_33=_.c()),this.__XSRFStrategy_33},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_XHRBackend_34",{get:function(){return null==this.__XHRBackend_34&&(this.__XHRBackend_34=new _.d(this._BrowserXhr_31,this._ResponseOptions_32,this._XSRFStrategy_33)),this.__XHRBackend_34},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RequestOptions_35",{get:function(){return null==this.__RequestOptions_35&&(this.__RequestOptions_35=new _.e),this.__RequestOptions_35},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Http_36",{get:function(){return null==this.__Http_36&&(this.__Http_36=_.f(this._XHRBackend_34,this._RequestOptions_35)),this.__Http_36},enumerable:!0,configurable:!0}),t.prototype.createInternal=function(){return this._CommonModule_0=new i.b,this._ErrorHandler_1=r.m(),this._APP_INITIALIZER_2=[l.j,r.n(this.parent.get(r.o,null),this.parent.get(l.k,null))],this._ApplicationInitStatus_3=new l.l(this._APP_INITIALIZER_2),this._ɵf_4=new l.m(this.parent.get(l.h),this.parent.get(l.n),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_3),this._ApplicationRef_5=this._ɵf_4,this._ApplicationModule_6=new l.o(this._ApplicationRef_5),this._BrowserModule_7=new r.p(this.parent.get(r.p,null)),this._ɵba_8=new o.b,this._FormsModule_9=new o.c,this._HttpModule_10=new _.g,this._AppModule_11=new u.a,this._AppModule_11},t.prototype.getInternal=function(n,t){return n===i.b?this._CommonModule_0:n===l.p?this._ErrorHandler_1:n===l.q?this._APP_INITIALIZER_2:n===l.l?this._ApplicationInitStatus_3:n===l.m?this._ɵf_4:n===l.r?this._ApplicationRef_5:n===l.o?this._ApplicationModule_6:n===r.p?this._BrowserModule_7:n===o.b?this._ɵba_8:n===o.c?this._FormsModule_9:n===_.g?this._HttpModule_10:n===u.a?this._AppModule_11:n===l.c?this._LOCALE_ID_12:n===i.c?this._NgLocalization_13:n===l.d?this._Compiler_14:n===l.s?this._APP_ID_15:n===l.t?this._IterableDiffers_16:n===l.u?this._KeyValueDiffers_17:n===r.q?this._DomSanitizer_18:n===l.v?this._Sanitizer_19:n===r.r?this._HAMMER_GESTURE_CONFIG_20:n===r.s?this._EVENT_MANAGER_PLUGINS_21:n===r.h?this._EventManager_22:n===r.i?this._ɵDomSharedStylesHost_23:n===r.j?this._ɵDomRendererFactory2_24:n===l.w?this._RendererFactory2_25:n===r.t?this._ɵSharedStylesHost_26:n===l.i?this._Testability_27:n===r.k?this._Meta_28:n===r.l?this._Title_29:n===o.a?this._ɵi_30:n===_.a?this._BrowserXhr_31:n===_.h?this._ResponseOptions_32:n===_.i?this._XSRFStrategy_33:n===_.d?this._XHRBackend_34:n===_.j?this._RequestOptions_35:n===_.k?this._Http_36:t},t.prototype.destroyInternal=function(){this._ɵf_4.ngOnDestroy(),this.__ɵDomSharedStylesHost_23&&this._ɵDomSharedStylesHost_23.ngOnDestroy()},t}(l.x),g=new l.y(c,u.a)},x35b:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=e("3j3K"),u=e("kZql"),i=e("Qbdm"),r=e("kke6");u.a.production&&e.i(l.a)(),e.i(i.a)().bootstrapModuleFactory(r.a)}},[0]);