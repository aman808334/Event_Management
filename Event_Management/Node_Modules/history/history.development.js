var m,x=m||(m={});x.Pop="POP";x.Push="PUSH";x.Replace="REPLACE";function y(c,d){if(!c){"undefined"!==typeof console&&console.warn(d);try{throw Error(d);}catch(f){}}}function z(c){c.preventDefault();c.returnValue=""}function A(){let c=[];return{get length(){return c.length},push(d){c.push(d);return function(){c=c.filter(c=>c!==d)}},call(d){c.forEach(c=>c&&c(d))}}}function B(){return Math.random().toString(36).substr(2,8)}
function C({pathname:c="/",search:d="",hash:f=""}){return c+d+f}function D(c){let d={};if(c){var f=c.indexOf("#");0<=f&&(d.hash=c.substr(f),c=c.substr(0,f));f=c.indexOf("?");0<=f&&(d.search=c.substr(f),c=c.substr(0,f));c&&(d.pathname=c)}return d}
function createBrowserHistory(c={}){function d(){let {pathname:a,search:e,hash:b}=k.location,c=g.state||{};return[c.idx,Object.freeze({pathname:a,search:e,hash:b,state:c.usr||null,key:c.key||"default"})]}function f(a){return"string"===typeof a?a:C(a)}function r(a,e=null){return Object.freeze(Object.assign(Object.assign(Object.assign({},n),"string"===typeof a?D(a):a),{state:e,key:B()}))}function v(a){p=a;[l,n]=d();q.call({action:p,location:n})}function w(a,e){function E(){w(a,e)}let c=m.Push,
d=r(a,e);if(!b.length||(b.call({action:c,location:d,retry:E}),!1)){let [e,a]=[{usr:d.state,key:d.key,idx:l+1},f(d)];try{g.pushState(e,"",a)}catch(F){k.location.assign(a)}v(c)}}function t(a,e){function c(){t(a,e)}let d=m.Replace,h=r(a,e);if(!b.length||(b.call({action:d,location:h,retry:c}),!1)){let [e,a]=[{usr:h.state,key:h.key,idx:l},f(h)];g.replaceState(e,"",a);v(d)}}function u(a){g.go(a)}let {window:k=document.defaultView}=c,g=k.history,h=null;k.addEventListener("popstate",function(){if(h)b.call(h),
h=null;else{let a=m.Pop,[e,c]=d();if(b.length)if(null!=e){let b=l-e;b&&(h={action:a,location:c,retry(){u(-1*b)}},u(b))}else y(!1,"You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.");else v(a)}});let p=m.Pop,[l,n]=d(),q=A(),b=A();null==l&&(l=0,g.replaceState(Object.assign(Object.assign({},
g.state),{idx:l}),""));return{get action(){return p},get location(){return n},createHref:f,push:w,replace:t,go:u,back(){u(-1)},forward(){u(1)},listen(a){return q.push(a)},block(a){let e=b.push(a);1===b.length&&k.addEventListener("beforeunload",z);return function(){e();b.length||k.removeEventListener("beforeunload",z)}}}};
function createHashHistory(c={}){function d(){let {pathname:e="/",search:a="",hash:b=""}=D(g.location.hash.substr(1)),c=h.state||{};return[c.idx,Object.freeze({pathname:e,search:a,hash:b,state:c.usr||null,key:c.key||"default"})]}function f(){if(p)a.call(p),p=null;else{let e=m.Pop,[b,c]=d();if(a.length)if(null!=b){let a=n-b;a&&(p={action:e,location:c,retry(){k(-1*a)}},k(a))}else y(!1,"You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.");
else w(e)}}function r(a){var e=document.querySelector("base");var b="";e&&e.getAttribute("href")&&(e=g.location.href,b=e.indexOf("#"),b=-1===b?e:e.slice(0,b));e=b;return e+"#"+("string"===typeof a?a:C(a))}function v(a,b=null){return Object.freeze(Object.assign(Object.assign(Object.assign({},q),"string"===typeof a?D(a):a),{state:b,key:B()}))}function w(a){l=a;[n,q]=d();b.call({action:l,location:q})}function t(b,c){function e(){t(b,c)}let d=m.Push,f=v(b,c);y("/"===f.pathname.charAt(0),`Relative pathnames are not supported in hash history.push(${JSON.stringify(b)})`);
if(!a.length||(a.call({action:d,location:f,retry:e}),!1)){let [a,b]=[{usr:f.state,key:f.key,idx:n+1},r(f)];try{h.pushState(a,"",b)}catch(G){g.location.assign(b)}w(d)}}function u(b,c){function e(){u(b,c)}let d=m.Replace,f=v(b,c);y("/"===f.pathname.charAt(0),`Relative pathnames are not supported in hash history.replace(${JSON.stringify(b)})`);if(!a.length||(a.call({action:d,location:f,retry:e}),!1)){let [a,b]=[{usr:f.state,key:f.key,idx:n},r(f)];h.replaceState(a,"",b);w(d)}}function k(a){h.go(a)}let {window:g=
document.defaultView}=c,h=g.history,p=null;g.addEventListener("popstate",f);g.addEventListener("hashchange",()=>{let [,a]=d();C(a)!==C(q)&&f()});let l=m.Pop,[n,q]=d(),b=A(),a=A();null==n&&(n=0,h.replaceState(Object.assign(Object.assign({},h.state),{idx:n}),""));return{get action(){return l},get location(){return q},createHref:r,push:t,replace:u,go:k,back(){k(-1)},forward(){k(1)},listen(a){return b.push(a)},block(b){let c=a.push(b);1===a.length&&g.addEventListener("beforeunload",z);return function(){c();
a.length||g.removeEventListener("beforeunload",z)}}}};
function createMemoryHistory(c={}){function d(b,a=null){return Object.freeze(Object.assign(Object.assign(Object.assign({},l),"string"===typeof b?D(b):b),{state:a,key:B()}))}function f(b,a,c){return!q.length||(q.call({action:b,location:a,retry:c}),!1)}function r(b,a){p=b;l=a;n.call({action:p,location:l})}function v(b,a){let c=m.Push,k=d(b,a);y("/"===l.pathname.charAt(0),`Relative pathnames are not supported in memory history.push(${JSON.stringify(b)})`);f(c,k,function(){v(b,a)})&&(h+=1,g.splice(h,
g.length,k),r(c,k))}function w(b,a){let c=m.Replace,k=d(b,a);y("/"===l.pathname.charAt(0),`Relative pathnames are not supported in memory history.replace(${JSON.stringify(b)})`);f(c,k,function(){w(b,a)})&&(g[h]=k,r(c,k))}function t(b){let a=Math.min(Math.max(h+b,0),g.length-1),c=m.Pop,d=g[a];f(c,d,function(){t(b)})&&(h=a,r(c,d))}let {initialEntries:u=["/"],initialIndex:k}=c,g=u.map(b=>{let a=Object.freeze(Object.assign({pathname:"/",search:"",hash:"",state:null,key:B()},"string"===typeof b?D(b):b));
y("/"===a.pathname.charAt(0),`Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: ${JSON.stringify(b)})`);return a}),h=Math.min(Math.max(null==k?g.length-1:k,0),g.length-1),p=m.Pop,l=g[h],n=A(),q=A();return{get index(){return h},get action(){return p},get location(){return l},createHref:function(b){return"string"===typeof b?b:C(b)},push:v,replace:w,go:t,back(){t(-1)},forward(){t(1)},listen(b){return n.push(b)},block(b){return q.push(b)}}};
export{m as Action,createBrowserHistory,createHashHistory,createMemoryHistory,C as createPath,D as parsePath}
//# sourceMappingURL=history.development.js.map