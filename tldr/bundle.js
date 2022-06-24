var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function a(){return Object.create(null)}function o(t){t.forEach(r)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,r){return t[1]?n({},n(e.$$scope.ctx,t[1](r?r(e):{}))):e.$$scope.ctx}function l(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}const d="undefined"!=typeof window;let u=d?()=>window.performance.now():()=>Date.now(),f=d?t=>requestAnimationFrame(t):t;const p=new Set;let h,m=!1;function g(){p.forEach(t=>{t[0](u())||(p.delete(t),t[1]())}),(m=p.size>0)&&f(g)}function $(t,e){t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function w(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function k(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function C(){return S(" ")}function x(){return S("")}function T(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function E(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function N(t,e){for(const n in e)E(t,n,e[n])}function _(t){return Array.from(t.childNodes)}function W(t,e,n,r){for(let r=0;r<t.length;r+=1){const a=t[r];if(a.nodeName===e){for(let t=0;t<a.attributes.length;t+=1){const e=a.attributes[t];n[e.name]||a.removeAttribute(e.name)}return t.splice(r,1)[0]}}return r?k(e):y(e)}function R(t,e){e=""+e,t.data!==e&&(t.data=e)}function A(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}let H,U=0,M={};function L(t,e,n,r,a,o,i,s=0){const c=16.666/r;let l="{\n";for(let t=0;t<=1;t+=c){const r=e+(n-e)*o(t);l+=100*t+`%{${i(r,1-r)}}\n`}const d=l+`100% {${i(n,1-n)}}\n}`,u=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(d)}_${s}`;if(!M[u]){if(!h){const t=y("style");document.head.appendChild(t),h=t.sheet}M[u]=!0,h.insertRule(`@keyframes ${u} ${d}`,h.cssRules.length)}const f=t.style.animation||"";return t.style.animation=`${f?`${f}, `:""}${u} ${r}ms linear ${a}ms 1 both`,U+=1,u}function B(t,e){t.style.animation=(t.style.animation||"").split(", ").filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")).join(", "),e&&!--U&&f(()=>{if(U)return;let t=h.cssRules.length;for(;t--;)h.deleteRule(t);M={}})}function D(t){H=t}const F=[],I=[],P=[],V=[],O=Promise.resolve();let j,z=!1;function q(t){P.push(t)}function X(){const t=new Set;do{for(;F.length;){const t=F.shift();D(t),G(t.$$)}for(;I.length;)I.pop()();for(let e=0;e<P.length;e+=1){const n=P[e];t.has(n)||(n(),t.add(n))}P.length=0}while(F.length);for(;V.length;)V.pop()();z=!1}function G(t){t.fragment&&(t.update(t.dirty),o(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(q))}function Z(t,e,n){t.dispatchEvent(A(`${e?"intro":"outro"}${n}`))}const J=new Set;let K;function Q(){K={r:0,c:[],p:K}}function Y(){K.r||o(K.c),K=K.p}function tt(t,e){t&&t.i&&(J.delete(t),t.i(e))}function et(t,e,n,r){if(t&&t.o){if(J.has(t))return;J.add(t),K.c.push(()=>{J.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const nt={duration:0};function rt(n,r,a,s){let c=r(n,a),l=s?0:1,d=null,h=null,$=null;function v(){$&&B(n,$)}function b(t,e){const n=t.b-l;return e*=Math.abs(n),{a:l,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function w(r){const{delay:a=0,duration:i=300,easing:s=e,tick:w=t,css:y}=c||nt,k={start:u()+a,b:r};r||(k.group=K,K.r+=1),d?h=k:(y&&(v(),$=L(n,l,r,i,a,s,y)),r&&w(0,1),d=b(k,i),q(()=>Z(n,r,"start")),function(t){let e;m||(m=!0,f(g)),new Promise(n=>{p.add(e=[t,n])})}(t=>{if(h&&t>h.start&&(d=b(h,i),h=null,Z(n,d.b,"start"),y&&(v(),$=L(n,l,d.b,d.duration,0,s,c.css))),d)if(t>=d.end)w(l=d.b,1-l),Z(n,d.b,"end"),h||(d.b?v():--d.group.r||o(d.group.c)),d=null;else if(t>=d.start){const e=t-d.start;l=d.a+d.d*s(e/d.duration),w(l,1-l)}return!(!d&&!h)}))}return{run(t){i(c)?(j||(j=Promise.resolve()).then(()=>{j=null}),j).then(()=>{c=c(),w(t)}):w(t)},end(){v(),d=h=null}}}function at(t,e){const n={},r={},a={$$scope:1};let o=t.length;for(;o--;){const i=t[o],s=e[o];if(s){for(const t in i)t in s||(r[t]=1);for(const t in s)a[t]||(n[t]=s[t],a[t]=1);t[o]=s}else for(const t in i)a[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function ot(t,e,n){const{fragment:a,on_mount:s,on_destroy:c,after_update:l}=t.$$;a.m(e,n),q(()=>{const e=s.map(r).filter(i);c?c.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(q)}function it(t,e){t.$$.fragment&&(o(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function st(t,e){t.$$.dirty||(F.push(t),z||(z=!0,O.then(X)),t.$$.dirty=a()),t.$$.dirty[e]=!0}function ct(e,n,r,i,s,c){const l=H;D(e);const d=n.props||{},u=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:a(),dirty:null};let f=!1;u.ctx=r?r(e,d,(t,n,r=n)=>(u.ctx&&s(u.ctx[t],u.ctx[t]=r)&&(u.bound[t]&&u.bound[t](r),f&&st(e,t)),n)):d,u.update(),f=!0,o(u.before_update),u.fragment=i(u.ctx),n.target&&(n.hydrate?u.fragment.l(_(n.target)):u.fragment.c(),n.intro&&tt(e.$$.fragment),ot(e,n.target,n.anchor),X()),D(l)}class lt{$destroy(){it(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function dt(t){var e,r,a;const o=t.$$slots.default,i=function(t,e,n){if(t){const r=c(t,e,n);return t[0](r)}}(o,t,null);return{c(){e=y("div"),i&&i.c(),E(e,"class","tile gradientBorder svelte-245kjv"),a=T(e,"click",t.click_handler)},l(t){i&&i.l(div_nodes)},m(t,n){v(t,e,n),i&&i.m(e,null),r=!0},p(t,e){i&&i.p&&t.$$scope&&i.p(function(t,e,r,a){return t[1]?n({},n(e.$$scope.changed||{},t[1](a?a(r):{}))):e.$$scope.changed||{}}(o,e,t,null),c(o,e,null))},i(t){r||(tt(i,t),r=!0)},o(t){et(i,t),r=!1},d(t){t&&b(e),i&&i.d(t),a()}}}function ut(t,e,n){let{src:r}=e,{$$slots:a={},$$scope:o}=e;return t.$set=(t=>{"src"in t&&n("src",r=t.src),"$$scope"in t&&n("$$scope",o=t.$$scope)}),{src:r,click_handler:function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}(t,e)},$$slots:a,$$scope:o}}class ft extends lt{constructor(t){super(),ct(this,t,ut,dt,s,["src"])}}function pt(t,{delay:e=0,duration:n=400}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,css:t=>`opacity: ${t*r}`}}function ht(e){var n,r;return{c(){n=y("a"),E(r=y("iframe"),"title",e.title),E(r,"src",e.url),E(r,"class","svelte-17t83rb"),E(n,"href",e.url),E(n,"class","site-thumbnail svelte-17t83rb")},m(t,e){v(t,n,e),$(n,r)},p(t,e){t.title&&E(r,"title",e.title),t.url&&(E(r,"src",e.url),E(n,"href",e.url))},i:t,o:t,d(t){t&&b(n)}}}function mt(t,e,n){let{url:r,title:a=""}=e;return t.$set=(t=>{"url"in t&&n("url",r=t.url),"title"in t&&n("title",a=t.title)}),{url:r,title:a}}class gt extends lt{constructor(t){super(),ct(this,t,mt,ht,s,["url","title"])}}function $t(t,e,n){const r=Object.create(t);return r.entry=e[n],r}function vt(t){var e,n,r=t.data.title+"";return{c(){e=y("h1"),n=S(r)},m(t,r){v(t,e,r),$(e,n)},p(t,e){t.data&&r!==(r=e.data.title+"")&&R(n,r)},d(t){t&&b(e)}}}function bt(t){var e,n;function r(t,n){return(null==e||t.data)&&(e=!!Array.isArray(n.data.content)),e?yt:wt}var a=r(null,t),o=a(t);return{c(){o.c(),n=x()},m(t,e){o.m(t,e),v(t,n,e)},p(t,e){a===(a=r(t,e))&&o?o.p(t,e):(o.d(1),(o=a(e))&&(o.c(),o.m(n.parentNode,n)))},d(t){o.d(t),t&&b(n)}}}function wt(t){var e,n=t.data.content+"";return{c(){e=y("p")},m(t,r){v(t,e,r),e.innerHTML=n},p(t,r){t.data&&n!==(n=r.data.content+"")&&(e.innerHTML=n)},d(t){t&&b(e)}}}function yt(t){var e;let n=t.data.content,r=[];for(let e=0;e<n.length;e+=1)r[e]=kt($t(t,n,e));return{c(){e=y("ul");for(let t=0;t<r.length;t+=1)r[t].c()},m(t,n){v(t,e,n);for(let t=0;t<r.length;t+=1)r[t].m(e,null)},p(t,a){if(t.data){let o;for(n=a.data.content,o=0;o<n.length;o+=1){const i=$t(a,n,o);r[o]?r[o].p(t,i):(r[o]=kt(i),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){t&&b(e),w(r,t)}}}function kt(t){var e,n=t.entry+"";return{c(){e=y("li")},m(t,r){v(t,e,r),e.innerHTML=n},p(t,r){t.data&&n!==(n=r.entry+"")&&(e.innerHTML=n)},d(t){t&&b(e)}}}function St(t){var e;function n(t,e){return e.commitID?xt:Ct}var r=n(0,t),a=r(t);return{c(){a.c(),e=x()},m(t,n){a.m(t,n),v(t,e,n)},p(t,o){r===(r=n(0,o))&&a?a.p(t,o):(a.d(1),(a=r(o))&&(a.c(),a.m(e.parentNode,e)))},d(t){a.d(t),t&&b(e)}}}function Ct(t){var e,n,r,a,o;return{c(){e=y("p"),n=S("Link: "),r=y("a"),a=S(t.link),E(r,"href",o=t.data.link)},m(t,o){v(t,e,o),$(e,n),$(e,r),$(r,a)},p(t,e){t.link&&R(a,e.link),t.data&&o!==(o=e.data.link)&&E(r,"href",o)},d(t){t&&b(e)}}}function xt(t){var e,n,r,a,o;return{c(){e=y("p"),n=S("Commit: "),r=y("a"),a=S(t.commitID),E(r,"href",o=t.data.link)},m(t,o){v(t,e,o),$(e,n),$(e,r),$(r,a)},p(t,e){t.commitID&&R(a,e.commitID),t.data&&o!==(o=e.data.link)&&E(r,"href",o)},d(t){t&&b(e)}}}function Tt(t){var e,n=new gt({props:{url:t.data.frame.url,title:t.data.frame.title}});return{c(){n.$$.fragment.c()},m(t,r){ot(n,t,r),e=!0},p(t,e){var r={};t.data&&(r.url=e.data.frame.url),t.data&&(r.title=e.data.frame.title),n.$set(r)},i(t){e||(tt(n.$$.fragment,t),e=!0)},o(t){et(n.$$.fragment,t),e=!1},d(t){it(n,t)}}}function Et(t){var e,n,r,a,o,i=t.data.title&&vt(t),s=t.data.content&&bt(t),c=t.data.link&&St(t),l=t.data.frame&&Tt(t);return{c(){i&&i.c(),e=C(),s&&s.c(),n=C(),c&&c.c(),r=C(),l&&l.c(),a=x()},m(t,d){i&&i.m(t,d),v(t,e,d),s&&s.m(t,d),v(t,n,d),c&&c.m(t,d),v(t,r,d),l&&l.m(t,d),v(t,a,d),o=!0},p(t,o){o.data.title?i?i.p(t,o):((i=vt(o)).c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),o.data.content?s?s.p(t,o):((s=bt(o)).c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null),o.data.link?c?c.p(t,o):((c=St(o)).c(),c.m(r.parentNode,r)):c&&(c.d(1),c=null),o.data.frame?l?(l.p(t,o),tt(l,1)):((l=Tt(o)).c(),tt(l,1),l.m(a.parentNode,a)):l&&(Q(),et(l,1,1,()=>{l=null}),Y())},i(t){o||(tt(l),o=!0)},o(t){et(l),o=!1},d(t){i&&i.d(t),t&&b(e),s&&s.d(t),t&&b(n),c&&c.d(t),t&&b(r),l&&l.d(t),t&&b(a)}}}function Nt(t,e,n){let{data:r}=e,a="",o="";return t.$set=(t=>{"data"in t&&n("data",r=t.data)}),t.$$.update=((t={data:1,link:1})=>{if(t.data||t.link){n("link",o=(r.link||"").replace(/^https?:\/\//i,""));let t=/^github.com\/.+?\/blob\/(.+?)\//i.exec(o);t&&n("commitID",a=t[1].slice(0,8))}}),{data:r,commitID:a,link:o}}class _t extends lt{constructor(t){super(),ct(this,t,Nt,Et,s,["data"])}}function Wt(t){var e,n,r,a,o,i,s,c=new _t({props:{data:t.data}});return{c(){e=y("div"),n=y("div"),r=C(),a=y("div"),c.$$.fragment.c(),E(n,"class","background svelte-1si5li3"),E(a,"class","content svelte-1si5li3"),E(e,"class","lightbox svelte-1si5li3"),s=T(n,"click",t.close)},m(t,o){v(t,e,o),$(e,n),$(e,r),$(e,a),ot(c,a,null),i=!0},p(t,e){var n={};t.data&&(n.data=e.data),c.$set(n)},i(t){i||(tt(c.$$.fragment,t),q(()=>{o||(o=rt(e,pt,{duration:300},!0)),o.run(1)}),i=!0)},o(t){et(c.$$.fragment,t),o||(o=rt(e,pt,{duration:300},!1)),o.run(0),i=!1},d(t){t&&b(e),it(c),t&&o&&o.end(),s()}}}function Rt(t,e,n){const r=function(){const t=H;return(e,n)=>{const r=t.$$.callbacks[e];if(r){const a=A(e,n);r.slice().forEach(e=>{e.call(t,a)})}}}();let{data:a}=e;return t.$set=(t=>{"data"in t&&n("data",a=t.data)}),{close:function(){r("destroy")},data:a}}class At extends lt{constructor(t){super(),ct(this,t,Rt,Wt,s,["data"])}}function Ht(t,e,n){const r=Object.create(t);return r.item=e[n],r}function Ut(t){var e,n;let r=t.items.content,a=[];for(let e=0;e<r.length;e+=1)a[e]=Dt(Ht(t,r,e));const o=t=>et(a[t],1,1,()=>{a[t]=null});return{c(){for(let t=0;t<a.length;t+=1)a[t].c();e=x()},m(t,r){for(let e=0;e<a.length;e+=1)a[e].m(t,r);v(t,e,r),n=!0},p(t,n){if(t.items){let i;for(r=n.items.content,i=0;i<r.length;i+=1){const o=Ht(n,r,i);a[i]?(a[i].p(t,o),tt(a[i],1)):(a[i]=Dt(o),a[i].c(),tt(a[i],1),a[i].m(e.parentNode,e))}for(Q(),i=r.length;i<a.length;i+=1)o(i);Y()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)tt(a[t]);n=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)et(a[t]);n=!1},d(t){w(a,t),t&&b(e)}}}function Mt(t){var e,n=t.item.title+"";return{c(){e=S(n)},m(t,n){v(t,e,n)},p(t,r){t.items&&n!==(n=r.item.title+"")&&R(e,n)},d(t){t&&b(e)}}}function Lt(t){var e,n,r=t.item.date+"";return{c(){e=y("div"),n=S(r),E(e,"class","subtitle svelte-1o5s72l")},m(t,r){v(t,e,r),$(e,n)},p(t,e){t.items&&r!==(r=e.item.date+"")&&R(n,r)},d(t){t&&b(e)}}}function Bt(t){var e,n,r=t.item.title&&Mt(t),a=t.item.date&&Lt(t);return{c(){r&&r.c(),e=C(),a&&a.c(),n=x()},m(t,o){r&&r.m(t,o),v(t,e,o),a&&a.m(t,o),v(t,n,o)},p(t,o){o.item.title?r?r.p(t,o):((r=Mt(o)).c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),o.item.date?a?a.p(t,o):((a=Lt(o)).c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null)},d(t){r&&r.d(t),t&&b(e),a&&a.d(t),t&&b(n)}}}function Dt(t){var e,n,r;var a=new ft({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}});return a.$on("click",function(){return t.click_handler(t)}),{c(){e=y("div"),a.$$.fragment.c(),n=C(),E(e,"class","spacer svelte-1o5s72l")},m(t,o){v(t,e,o),ot(a,e,null),$(e,n),r=!0},p(e,n){t=n;var r={};(e.$$scope||e.items)&&(r.$$scope={changed:e,ctx:t}),a.$set(r)},i(t){r||(tt(a.$$.fragment,t),r=!0)},o(t){et(a.$$.fragment,t),r=!1},d(t){t&&b(e),it(a)}}}function Ft(t){var e,n,r,a,o,i,s=t.items.title+"",c=t.items.content&&Ut(t);return{c(){e=y("div"),n=y("div"),r=y("h2"),a=S(s),o=C(),c&&c.c(),E(n,"class","title svelte-1o5s72l"),E(e,"class","filmstrip svelte-1o5s72l")},m(t,s){v(t,e,s),$(e,n),$(n,r),$(r,a),$(e,o),c&&c.m(e,null),i=!0},p(t,n){i&&!t.items||s===(s=n.items.title+"")||R(a,s),n.items.content?c?(c.p(t,n),tt(c,1)):((c=Ut(n)).c(),tt(c,1),c.m(e,null)):c&&(Q(),et(c,1,1,()=>{c=null}),Y())},i(t){i||(tt(c),i=!0)},o(t){et(c),i=!1},d(t){t&&b(e),c&&c.d()}}}function It(t,e,n){let{items:r={title:"",content:[]}}=e;return t.$set=(t=>{"items"in t&&n("items",r=t.items)}),{items:r,click_handler:({item:t})=>At.createLightbox({...t,title:[r.title,t.title,t.date].filter(t=>t).join(" - ")})}}At.createLightbox=function(t){const e=new At({target:document.body,props:{data:t},intro:!0});return e.$on("destroy",()=>{e.$destroy()}),e.promise};class Pt extends lt{constructor(t){super(),ct(this,t,It,Ft,s,["items"])}}var Vt=[{title:"Meetings",content:[{title:"Wednesday",date:"10/11/2021",content:["Chase up template / past works with thesis admin","Literature review needs more papers and works","For the literature review, can put more wider related sources","For the literature review, comment on strengths, weaknesses, etc","Look at EndNote for referencing and bibliography management"]},{title:"Wednesday",date:"17/11/2021",content:"Presented Seminar A",link:"https://featherbear.cc/UNSW-CSE-Thesis/docs/presentations/seminar-a/"},{title:"Thursday",date:"24/02/2022",content:"Discussed with Lachlan about the acquisition of Burp Suite Pro and an FPGA?"}]},{title:"Research",content:[{title:"Wednesday",date:"29/09/2021",content:"Researched and planned how to capture network traffic to/from the vacuum cleaner",link:"https://featherbear.cc/UNSW-CSE-Thesis/posts/capturing-network-activity-securely/"},{title:"Tuesday",date:"5/10/2021",content:["Did research on existing works regarding IoT vacuums","Found a entire suite of resources regarding smart vacuums - https://dontvacuum.me/","Watched some talks and found tools to aid in analysis","Discovered that my home router (MikroTik Routerboard) can actually do packet sniffing via TZSP to Wireshark","Seems like Roborock is a Xiaomi-partner","Also the Roborock S6 runs Ubuntu!"],link:"https://featherbear.cc/UNSW-CSE-Thesis/posts/points-of-contact/"},{title:"Tuesday",date:"12/10/2021",link:"https://featherbear.cc/UNSW-CSE-Thesis/posts/points-of-contact/",content:"Collated research from last Tuesday"},{title:"Monday",date:"18/10/2021",link:"https://featherbear.cc/UNSW-CSE-Thesis/posts/seminar-a-preparation/",content:["Updated Points of Contact document","Extracted key TODOs for Seminar A and Report A","Begin formulating goals"]},{title:"Monday",date:"1/11/2021",content:["Integrated reveal-js with PDF building capability, Logitech Spotlight support and a custom theme","Drafted content for the Seminar A presentation","Began designing content for the Seminar A presentation"],link:"https://featherbear.cc/UNSW-CSE-Thesis/docs/presentations/seminar-a/"},{title:"Wednesday",date:"3/11/2021",content:["(End of Tuesday) Continued working on Seminar A presentation","(Night) Completed background information and planning sections"],link:"https://featherbear.cc/UNSW-CSE-Thesis/docs/presentations/seminar-a/"},{title:"Wednesday",date:"10/11/2021",content:"Added literature review slides",link:"https://featherbear.cc/UNSW-CSE-Thesis/docs/presentations/seminar-a/"},{title:"Monday",date:"15/11/2021",content:"Finalise Seminar A slides",link:"https://featherbear.cc/UNSW-CSE-Thesis/docs/presentations/seminar-a/"},{title:"Wednesday",date:"17/11/2021",content:"Elaborate on timeline slide for Seminar A",link:"https://featherbear.cc/UNSW-CSE-Thesis/docs/presentations/seminar-a/"},{title:"Tuesday",date:"07/12/2021",content:"Wow I really started my report the day before it was due huh...",link:"https://featherbear.cc/UNSW-CSE-Thesis/docs/report-a/"},{title:"Wednesday",date:"08/12/2021",content:"FINISHED REPORT A AAHHHHHHHHHH",link:"https://featherbear.cc/UNSW-CSE-Thesis/docs/report-a/20211208-thesis-a-z5206677.pdf"},{title:"Sunday",date:"01/05/2022",content:"Seminar B preparation"},{title:"Thursday",date:"09/05/2022",content:"Complete Seminar B"},{title:"Thursday",date:"02/06/2022",content:"Created entity scope for analysis"}]},{title:"Hardware Hacking",content:[{title:"Monday",date:"25/10/2021",link:"https://featherbear.cc/UNSW-CSE-Thesis/posts/roborock-s6-teardown/",content:["(Finally) Opened up the packaging","Opened up the charger","Checked power draw"]},{title:"Tuesday",date:"26/10/2021",link:"https://featherbear.cc/UNSW-CSE-Thesis/posts/20211026-progress/",content:["Crimped some network cables","Put the network gear into the server rack (to tidy up my room and workspace)"]},{title:"Friday",date:"29/10/2021",link:"https://featherbear.cc/UNSW-CSE-Thesis/posts/roborock-s6-teardown/#vacuum-cleaner",content:"Opened up the vacuum cleaner and inspected circuitry"},{title:"Sunday",date:"01/05/2022",content:["Did some power analysis of the charger","Soldered pins onto the UART wires to make a better connection"]},{title:"Friday",date:"24/06/2022",content:["Reassemble unit","Extend power connectors and UART cables"]}]},{title:"Software Hacking",content:[{title:"Monday",date:"25/10/2021",link:"https://featherbear.cc/UNSW-CSE-Thesis/posts/20211025-progress/",content:["Set up Android MITM and L3-based MITM (on the Mikrotik router)","Logged the network activity during pairing","Logged the network activity of the Xiaomi Home application","Logged _some_ network activity between the Roborock and Xiaomi Home application","Current Firmware: 3.5.4_1558","Takeaway - Don't packet log through the router, as only internet-bound traffic will be logged (and not local traffic)"]},{title:"Friday",date:"29/10/2021",link:"https://featherbear.cc/UNSW-CSE-Thesis/posts/usb-port/",content:"Looked at the USB port communications (not much happening..)"},{title:"Saturday",date:"30/10/2021",link:"https://featherbear.cc/UNSW-CSE-Thesis/posts/20211030-progress/",content:["Connected to the vacuum cleaner via UART (baud rate 115200)","Got root!","Started research on disk imaging best practices"]},{title:"Wednesday",date:"02/03/2022",link:"https://featherbear.cc/UNSW-CSE-Thesis/posts/20211025-progress/",content:"Made a live system image of the eMMC chip for offline analysis"},{title:"Started Commentree",date:"03/03/2022",link:"https://github.com/featherbear/commentree",content:"Began creating the Commentree app"},{title:"MVP for Commentree",date:"11/03/2022",link:"https://github.com/featherbear/commentree",content:"Working version of the Commentree app"},{title:"Filesystem inspection",date:"19/03/2022",link:"https://featherbear.cc/UNSW-CSE-Thesis/posts/running-questions/",content:"Looked at the file system dumps for interesting data"},{title:"Install software",date:"06/04/2022",content:"Install wget, curl, htop, zerotier"},{title:"Look at adbd binary",date:"07/04/2022",content:"Look at the custom adbd binary that serves the usb port"},{title:"Inspection",date:"01/05/2022",link:"https://featherbear.cc/UNSW-CSE-Thesis/posts/roborock-s6-teardown/#vacuum-cleaner",content:["Accidentally factory reset the device, so redid everything","Installed ZeroTier, static curl, static htop","Tried using PolarProxy but too new (libc)","Abit of binary analysis"]},{title:"IPv6",date:"23/06/2022",content:"Checked if IPv6 leases were given out (A: no)"},{title:"Ports and Processes",date:"23/06/2022",content:"Began to check which processes contacted what address"}]}];function Ot(e){for(var r,a,o=[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"file-alt"},{class:"svg-inline--fa fa-file-alt fa-w-12"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 384 512"},e.$$props],i={},s=0;s<o.length;s+=1)i=n(i,o[s]);return{c(){r=k("svg"),a=k("path"),this.h()},l(t){var e=_(r=W(t,"svg",{"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0},!0));_(a=W(e,"path",{fill:!0,d:!0},!0)).forEach(b),e.forEach(b),this.h()},h(){E(a,"fill","currentColor"),E(a,"d","M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"),N(r,i)},m(t,n){v(t,r,n),$(r,a),e.svg_binding(r)},p(t,e){N(r,at(o,[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"file-alt"},{class:"svg-inline--fa fa-file-alt fa-w-12"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 384 512"},t.$$props&&e.$$props]))},i:t,o:t,d(t){t&&b(r),e.svg_binding(null)}}}function jt(t,e,r){let{elemRef:a}=e;return t.$set=(t=>{r("$$props",e=n(n({},e),t)),"elemRef"in t&&r("elemRef",a=t.elemRef)}),{elemRef:a,$$props:e,svg_binding:function(t){I[t?"unshift":"push"](()=>{r("elemRef",a=t)})},$$props:e=l(e)}}class zt extends lt{constructor(t){super(),ct(this,t,jt,Ot,s,["elemRef"])}}function qt(e){for(var r,a,o=[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"fas"},{"data-icon":"columns"},{class:"svg-inline--fa fa-columns fa-w-16"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 512 512"},e.$$props],i={},s=0;s<o.length;s+=1)i=n(i,o[s]);return{c(){r=k("svg"),a=k("path"),this.h()},l(t){var e=_(r=W(t,"svg",{"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0},!0));_(a=W(e,"path",{fill:!0,d:!0},!0)).forEach(b),e.forEach(b),this.h()},h(){E(a,"fill","currentColor"),E(a,"d","M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"),N(r,i)},m(t,n){v(t,r,n),$(r,a),e.svg_binding(r)},p(t,e){N(r,at(o,[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"fas"},{"data-icon":"columns"},{class:"svg-inline--fa fa-columns fa-w-16"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 512 512"},t.$$props&&e.$$props]))},i:t,o:t,d(t){t&&b(r),e.svg_binding(null)}}}function Xt(t,e,r){let{elemRef:a}=e;return t.$set=(t=>{r("$$props",e=n(n({},e),t)),"elemRef"in t&&r("elemRef",a=t.elemRef)}),{elemRef:a,$$props:e,svg_binding:function(t){I[t?"unshift":"push"](()=>{r("elemRef",a=t)})},$$props:e=l(e)}}class Gt extends lt{constructor(t){super(),ct(this,t,Xt,qt,s,["elemRef"])}}function Zt(t,e,n){const r=Object.create(t);return r.data=e[n],r}function Jt(t,e,n){const r=Object.create(t);return r.content=e[n],r}function Kt(t){var e,n;let r=Vt.filter(ae),a=[];for(let e=0;e<r.length;e+=1)a[e]=Yt(Zt(t,r,e));const o=t=>et(a[t],1,1,()=>{a[t]=null});return{c(){e=y("div");for(let t=0;t<a.length;t+=1)a[t].c();E(e,"class","overflowContainer svelte-1nmn9re")},m(t,r){v(t,e,r);for(let t=0;t<a.length;t+=1)a[t].m(e,null);n=!0},p(t,n){if(t.siteData){let i;for(r=Vt.filter(ae),i=0;i<r.length;i+=1){const o=Zt(n,r,i);a[i]?(a[i].p(t,o),tt(a[i],1)):(a[i]=Yt(o),a[i].c(),tt(a[i],1),a[i].m(e,null))}for(Q(),i=r.length;i<a.length;i+=1)o(i);Y()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)tt(a[t]);n=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)et(a[t]);n=!1},d(t){t&&b(e),w(a,t)}}}function Qt(t){var e,n,r;let a=Vt.filter(ne).map(re).flat(),o=[];for(let e=0;e<a.length;e+=1)o[e]=te(Jt(t,a,e));const i=t=>et(o[t],1,1,()=>{o[t]=null});return{c(){e=y("div"),n=y("div");for(let t=0;t<o.length;t+=1)o[t].c();E(n,"class","flatView svelte-1nmn9re"),E(e,"class","flatViewContainer svelte-1nmn9re")},m(t,a){v(t,e,a),$(e,n);for(let t=0;t<o.length;t+=1)o[t].m(n,null);r=!0},p(t,e){if(t.siteData){let r;for(a=Vt.filter(ne).map(re).flat(),r=0;r<a.length;r+=1){const i=Jt(e,a,r);o[r]?(o[r].p(t,i),tt(o[r],1)):(o[r]=te(i),o[r].c(),tt(o[r],1),o[r].m(n,null))}for(Q(),r=a.length;r<o.length;r+=1)i(r);Y()}},i(t){if(!r){for(let t=0;t<a.length;t+=1)tt(o[t]);r=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)et(o[t]);r=!1},d(t){t&&b(e),w(o,t)}}}function Yt(e){var n,r=new Pt({props:{items:e.data}});return{c(){r.$$.fragment.c()},m(t,e){ot(r,t,e),n=!0},p:t,i(t){n||(tt(r.$$.fragment,t),n=!0)},o(t){et(r.$$.fragment,t),n=!1},d(t){it(r,t)}}}function te(e){var n,r=new _t({props:{data:e.content}});return{c(){r.$$.fragment.c()},m(t,e){ot(r,t,e),n=!0},p:t,i(t){n||(tt(r.$$.fragment,t),n=!0)},o(t){et(r.$$.fragment,t),n=!1},d(t){it(r,t)}}}function ee(t){var e,n,r,a,o,i,s,c,l,d,u=t.showFlatView?zt:Gt;if(u)var f=new u({});var p=[Qt,Kt],h=[];function m(t,e){return e.showFlatView?0:1}return s=m(0,t),c=h[s]=p[s](t),{c(){e=y("div"),n=y("div"),(r=y("h1")).textContent="CSE Thesis Devlog TL;DR",a=C(),o=y("div"),f&&f.$$.fragment.c(),i=C(),c.c(),E(o,"class","modeToggle svelte-1nmn9re"),E(n,"class","titleBlock gradientAnim svelte-1nmn9re"),E(e,"class","container svelte-1nmn9re"),d=T(o,"click",t.click_handler)},m(t,c){v(t,e,c),$(e,n),$(n,r),$(n,a),$(n,o),f&&ot(f,o,null),$(e,i),h[s].m(e,null),l=!0},p(t,n){if(u!==(u=n.showFlatView?zt:Gt)){if(f){Q();const t=f;et(t.$$.fragment,1,0,()=>{it(t,1)}),Y()}u?((f=new u({})).$$.fragment.c(),tt(f.$$.fragment,1),ot(f,o,null)):f=null}var r=s;(s=m(0,n))===r?h[s].p(t,n):(Q(),et(h[r],1,1,()=>{h[r]=null}),Y(),(c=h[s])||(c=h[s]=p[s](n)).c(),tt(c,1),c.m(e,null))},i(t){l||(f&&tt(f.$$.fragment,t),tt(c),l=!0)},o(t){f&&et(f.$$.fragment,t),et(c),l=!1},d(t){t&&b(e),f&&it(f),h[s].d(),d()}}}const ne=t=>t.content&&t.content.length,re=t=>t.content.map(e=>({...e,title:[t.title,e.title,e.date].filter(t=>t).join(" - ")})),ae=t=>t.content&&t.content.length;function oe(t,e,n){let r=!1;"#flat"===location.hash&&(n("showFlatView",r=!0),location.hash="");return{showFlatView:r,click_handler:()=>n("showFlatView",r=!r)}}return new class extends lt{constructor(t){super(),ct(this,t,oe,ee,s,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
