(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{lDzL:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("fXoL"),r=n("ofXK"),i=n("XNiG");n("xgIS"),n("2Vo4"),n("1G5W"),n("mrSG");let c=(()=>{class e{constructor(e){this.document=e,this.width=this.getWidth()}getWidth(){const e=this.document.createElement("div");e.style.visibility="hidden",e.style.width="100px",e.style.msOverflowStyle="scrollbar",this.document.body.appendChild(e);const t=e.offsetWidth;e.style.overflow="scroll";const n=this.document.createElement("div");n.style.width="100%",e.appendChild(n);const o=n.offsetWidth;return e.parentNode.removeChild(e),t-o}}return e.\u0275fac=function(t){return new(t||e)(o.jc(r.d))},e.\u0275prov=o.Rb({token:e,factory:e.\u0275fac}),e})(),u=(()=>{class e{getDimensions(e){return e.getBoundingClientRect()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Rb({token:e,factory:e.\u0275fac}),e})(),s=(()=>{class e{constructor(){this.columnInputChanges=new i.a}get columnInputChanges$(){return this.columnInputChanges.asObservable()}onInputChange(){this.columnInputChanges.next()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Rb({token:e,factory:e.\u0275fac}),e})();"undefined"!=typeof window&&window||global,"undefined"!=typeof window&&window||global,"undefined"!=typeof window&&window||global,"undefined"!=typeof window&&window;let l=(()=>{class e{static forRoot(t){return{ngModule:e,providers:[{provide:"configuration",useValue:t}]}}}return e.\u0275mod=o.Tb({type:e}),e.\u0275inj=o.Sb({factory:function(t){return new(t||e)},providers:[c,u,s],imports:[[r.c]]}),e})();"undefined"==typeof document||document.elementsFromPoint||(document.elementsFromPoint=function(e,t){const n=[],o=[];let r,i,c;for(;(r=document.elementFromPoint(e,t))&&-1===n.indexOf(r)&&null!=r;)n.push(r),o.push({value:r.style.getPropertyValue("pointer-events"),priority:r.style.getPropertyPriority("pointer-events")}),r.style.setProperty("pointer-events","none","important");for(i=o.length;c=o[--i];)n[i].style.setProperty("pointer-events",c.value?c.value:"",c.priority);return n})},mrSG:function(e,t,n){"use strict";function o(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c}function r(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}))}}]);