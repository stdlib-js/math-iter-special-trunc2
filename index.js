// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterTrunc2=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=s.call(e,h,"$1e"),e=s.call(e,b,"e"),e=s.call(e,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=s.call(e,p,"e+0$1"),e=s.call(e,y,"e-0$1"),r.alternate&&(e=s.call(e,v,"$1."),e=s.call(e,g,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===l.call(r.specifier)?l.call(e):f.call(e)}function m(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}var j=String.fromCharCode,A=isNaN,_=Array.isArray;function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function O(r){var t,n,e,o,a,c,f,l,s,p,y,v,g;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(e=r[l],"string"==typeof e)c+=e;else{if(t=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+e+"`.");for(e.mapping&&(f=e.mapping),n=e.flags,s=0;s<n.length;s++)switch(o=n.charAt(s)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[f],10),f+=1,A(e.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[f],10),f+=1,A(e.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[f],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!A(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=A(a)?String(e.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=w(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(p=e.arg,y=e.width,v=e.padRight,g=void 0,(g=y-p.length)<0?p:p=v?p+m(g):m(g)+p)),c+=e.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function T(r){var t,n,e,i;for(n=[],i=0,e=S.exec(r);e;)(t=r.slice(i,S.lastIndex-e[0].length)).length&&n.push(t),n.push(x(e)),i=S.lastIndex,e=S.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function U(r){var t,n;if("string"!=typeof r)throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[T(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return O.apply(null,t)}var F,I=Object.prototype,k=I.toString,N=I.__defineGetter__,V=I.__defineSetter__,P=I.__lookupGetter__,G=I.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===k.call(n))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(P.call(r,t)||G.call(r,t)?(e=r.__proto__,r.__proto__=I,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(r,t,n.get),a&&V&&V.call(r,t,n.set),r};var L=F;function $(r,t,n){L(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var C=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return W&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;function Z(r,t){return null!=r&&M.call(r,t)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var q=B()?function(r){var t,n,e;if(null==r)return R.call(r);n=r[Y],t=Z(r,Y);try{r[Y]=void 0}catch(t){return R.call(r)}return e=R.call(r),t?r[Y]=n:delete r[Y],e}:function(r){return R.call(r)},z=Boolean,D=Boolean.prototype.toString;var J=B();function K(r){return"object"==typeof r&&(r instanceof z||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function Q(r){return H(r)||K(r)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var rr="object"==typeof self?self:null,tr="object"==typeof window?window:null,nr="object"==typeof global?global:null,er="object"==typeof globalThis?globalThis:null;var ir=function(r){if(arguments.length){if(!H(r))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(er)return er;if(rr)return rr;if(tr)return tr;if(nr)return nr;throw new Error("unexpected error. Unable to resolve global object.")}(),or=ir.document&&ir.document.childNodes,ar=Int8Array;function ur(){return/^\s*function\s*([^(]*)/i}var cr=/^\s*function\s*([^(]*)/i;$(ur,"REGEXP",cr);var fr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function lr(r){return null!==r&&"object"==typeof r}function sr(r){var t,n,e,i;if(("Object"===(n=q(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=cr.exec(e.toString()))return t[1]}return lr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}$(lr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!fr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(lr));var pr="function"==typeof C||"object"==typeof ar||"function"==typeof or?function(r){return sr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?sr(r).toLowerCase():t};function yr(r){return"function"===pr(r)}function vr(r){return"number"==typeof r}var gr=Number,dr=gr.prototype.toString;var br=B();function hr(r){return"object"==typeof r&&(r instanceof gr||(br?function(r){try{return dr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function wr(r){return vr(r)||hr(r)}$(wr,"isPrimitive",vr),$(wr,"isObject",hr);var mr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;var jr,Ar=Object,_r=Object.getPrototypeOf;jr=yr(Object.getPrototypeOf)?_r:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Er=jr;var Or=Object.prototype;function Sr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!fr(r)}(r)&&(t=function(r){return null==r?null:(r=Ar(r),Er(r))}(r),!t||!Z(r,"constructor")&&Z(t,"constructor")&&yr(t.constructor)&&"[object Function]"===q(t.constructor)&&Z(t,"isPrototypeOf")&&yr(t.isPrototypeOf)&&(t===Or||function(r){var t;for(t in r)if(!Z(r,t))return!1;return!0}(r)))}function xr(r,t,n){var e,i,o,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!yr(u.next))throw new TypeError(U("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!yr(t))throw new TypeError(U("invalid argument. Second argument must be a function. Value: `%s`.",t));if(e={invalid:NaN},arguments.length>2&&(o=function(r,t){return Sr(t)?(Z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(U("invalid argument. Options argument must be an object. Value: `%s`.",t))}(e,n),o))throw o;return $(i={},"next",(function(){var n;if(a)return{done:!0};if((n=r.next()).done)return a=!0,n;return{value:vr(n.value)?t(n.value):e.invalid,done:!1}})),$(i,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),mr&&yr(r[mr])&&$(i,mr,(function(){return xr(r[mr](),t,e)})),i}function Tr(r){return r!=r}var Ur=Number.POSITIVE_INFINITY,Fr=gr.NEGATIVE_INFINITY;function Ir(r){return r===Ur||r===Fr}var kr=Math.floor;function Nr(r){return kr(r)===r}function Vr(r){return Nr(r/2)}function Pr(r){return Vr(r>0?r-1:r+1)}var Gr=Math.sqrt;function Lr(r){return Math.abs(r)}var $r="function"==typeof Uint32Array;var Cr="function"==typeof Uint32Array?Uint32Array:null;var Hr,Wr="function"==typeof Uint32Array?Uint32Array:void 0;Hr=function(){var r,t,n;if("function"!=typeof Cr)return!1;try{t=new Cr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=($r&&n instanceof Uint32Array||"[object Uint32Array]"===q(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Wr:function(){throw new Error("not implemented")};var Br=Hr,Rr="function"==typeof Float64Array;var Mr="function"==typeof Float64Array?Float64Array:null;var Zr,Xr="function"==typeof Float64Array?Float64Array:void 0;Zr=function(){var r,t,n;if("function"!=typeof Mr)return!1;try{t=new Mr([1,3.14,-3.14,NaN]),n=t,r=(Rr&&n instanceof Float64Array||"[object Float64Array]"===q(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Xr:function(){throw new Error("not implemented")};var Yr=Zr,qr="function"==typeof Uint8Array;var zr="function"==typeof Uint8Array?Uint8Array:null;var Dr,Jr="function"==typeof Uint8Array?Uint8Array:void 0;Dr=function(){var r,t,n;if("function"!=typeof zr)return!1;try{t=new zr(t=[1,3.14,-3.14,256,257]),n=t,r=(qr&&n instanceof Uint8Array||"[object Uint8Array]"===q(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Jr:function(){throw new Error("not implemented")};var Kr=Dr,Qr="function"==typeof Uint16Array;var rt="function"==typeof Uint16Array?Uint16Array:null;var tt,nt="function"==typeof Uint16Array?Uint16Array:void 0;tt=function(){var r,t,n;if("function"!=typeof rt)return!1;try{t=new rt(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Qr&&n instanceof Uint16Array||"[object Uint16Array]"===q(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?nt:function(){throw new Error("not implemented")};var et,it={uint16:tt,uint8:Kr};(et=new it.uint16(1))[0]=4660;var ot,at,ut=52===new it.uint8(et.buffer)[0];!0===ut?(ot=1,at=0):(ot=0,at=1);var ct={HIGH:ot,LOW:at},ft=new Yr(1),lt=new Br(ft.buffer),st=ct.HIGH,pt=ct.LOW;function yt(r,t,n,e){return ft[0]=r,t[e]=lt[st],t[e+n]=lt[pt],t}function vt(r){return yt(r,[0,0],1,0)}$(vt,"assign",yt);var gt=!0===ut?0:1,dt=new Yr(1),bt=new Br(dt.buffer);function ht(r,t){return dt[0]=r,bt[gt]=t>>>0,dt[0]}function wt(r){return 0|r}var mt,jt,At=2147483647,_t=2147483648,Et=!0===ut?1:0,Ot=new Yr(1),St=new Br(Ot.buffer);function xt(r){return Ot[0]=r,St[Et]}!0===ut?(mt=1,jt=0):(mt=0,jt=1);var Tt={HIGH:mt,LOW:jt},Ut=new Yr(1),Ft=new Br(Ut.buffer),It=Tt.HIGH,kt=Tt.LOW;function Nt(r,t){return Ft[It]=r,Ft[kt]=t,Ut[0]}var Vt=[0,0];function Pt(r,t){var n,e;return vt.assign(r,Vt,1,0),n=Vt[0],n&=At,e=xt(t),Nt(n|=e&=_t,Vt[1])}var Gt=1072693247,Lt=1e300,$t=1e-300;var Ct=!0===ut?1:0,Ht=new Yr(1),Wt=new Br(Ht.buffer);function Bt(r,t){return Ht[0]=r,Wt[Ct]=t>>>0,Ht[0]}var Rt=1023;var Mt=1048575,Zt=1048576,Xt=1072693248,Yt=536870912,qt=524288,zt=20,Dt=9007199254740992,Jt=.9617966939259756,Kt=.9617967009544373,Qt=-7.028461650952758e-9,rn=[1,1.5],tn=[0,.5849624872207642],nn=[0,1.350039202129749e-8];var en=1.4426950408889634,on=1.4426950216293335,an=1.9259629911266175e-8;var un=1023,cn=-1023,fn=-1074,ln=22250738585072014e-324,sn=4503599627370496;function pn(r,t,n,e){return Tr(r)||Ir(r)?(t[e]=r,t[e+n]=0,t):0!==r&&Lr(r)<ln?(t[e]=r*sn,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}$((function(r){return pn(r,[0,0],1,0)}),"assign",pn);var yn=2146435072;var vn=2220446049250313e-31,gn=2148532223,dn=[0,0],bn=[0,0];function hn(r,t){var n,e;return 0===t||0===r||Tr(r)||Ir(r)?r:(pn(r,dn,1,0),r=dn[0],t+=dn[1],t+=function(r){var t=xt(r);return(t=(t&yn)>>>20)-Rt|0}(r),t<fn?Pt(0,r):t>un?r<0?Fr:Ur:(t<=cn?(t+=52,e=vn):e=1,vt.assign(r,bn,1,0),n=bn[0],n&=gn,e*Nt(n|=t+Rt<<20,bn[1])))}var wn=.6931471805599453,mn=1048575;var jn=1048576,An=1071644672,_n=20,En=.6931471824645996,On=-1.904654299957768e-9;var Sn=1072693247,xn=1105199104,Tn=1139802112,Un=1083179008,Fn=1072693248,In=1083231232,kn=3230714880,Nn=31,Vn=1e300,Pn=1e-300,Gn=8008566259537294e-32,Ln=[0,0],$n=[0,0];function Cn(r,t){var n,e,i,o,a,u,c,f,l,s,p,y,v,g;if(Tr(r)||Tr(t))return NaN;if(vt.assign(t,Ln,1,0),a=Ln[0],0===Ln[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Gr(r);if(-.5===t)return 1/Gr(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(Ir(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:Lr(r)<1==(t===Ur)?0:Ur}(r,t)}if(vt.assign(r,Ln,1,0),o=Ln[0],0===Ln[1]){if(0===o)return function(r,t){return t===Fr?Ur:t===Ur?0:t>0?Pr(t)?r:0:Pr(t)?Pt(Ur,r):Ur}(r,t);if(1===r)return 1;if(-1===r&&Pr(t))return-1;if(Ir(r))return r===Fr?Cn(-0,-t):t<0?0:Ur}if(r<0&&!1===Nr(t))return(r-r)/(r-r);if(i=Lr(r),n=o&At|0,e=a&At|0,c=a>>>Nn|0,u=(u=o>>>Nn|0)&&Pr(t)?-1:1,e>xn){if(e>Tn)return function(r,t){return(xt(r)&At)<=Gt?t<0?Lt*Lt:$t*$t:t>0?Lt*Lt:$t*$t}(r,t);if(n<Sn)return 1===c?u*Vn*Vn:u*Pn*Pn;if(n>Fn)return 0===c?u*Vn*Vn:u*Pn*Pn;p=function(r,t){var n,e,i,o,a,u,c;return o=(i=t-1)*i*(0===(c=i)?.5:.5+c*(.25*c-.3333333333333333)),n=(u=i*an-o*en)-((e=ht(e=(a=on*i)+u,0))-a),r[0]=e,r[1]=n,r}($n,i)}else p=function(r,t,n){var e,i,o,a,u,c,f,l,s,p,y,v,g,d,b,h,w,m,j,A,_;return m=0,n<Zt&&(m-=53,n=xt(t*=Dt)),m+=(n>>zt)-Rt|0,n=(j=n&Mt|0)|Xt|0,j<=235662?A=0:j<767610?A=1:(A=0,m+=1,n-=Zt),a=ht(i=(h=(t=Bt(t,n))-(f=rn[A]))*(w=1/(t+f)),0),e=(n>>1|Yt)+qt,c=Bt(0,e+=A<<18),b=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),c=ht(c=3+(o=a*a)+(b+=(u=w*(h-a*c-a*(t-(c-f))))*(a+i)),0),s=ht(s=(h=a*c)+(w=u*c+(b-(c-3-o))*i),0),p=Kt*s,g=(y=Qt*s+(w-(s-h))*Jt+nn[A])-((v=ht(v=p+y+(l=tn[A])+(d=m),0))-d-l-p),r[0]=v,r[1]=g,r}($n,i,n);if(y=(s=(t-(f=ht(t,0)))*p[0]+t*p[1])+(l=f*p[0]),vt.assign(y,Ln,1,0),v=wt(Ln[0]),g=wt(Ln[1]),v>=Un){if(0!=(v-Un|g))return u*Vn*Vn;if(s+Gn>y-l)return u*Vn*Vn}else if((v&At)>=In){if(0!=(v-kn|g))return u*Pn*Pn;if(s<=y-l)return u*Pn*Pn}return y=function(r,t,n){var e,i,o,a,u,c,f,l,s,p;return s=((l=r&At|0)>>_n)-Rt|0,f=0,l>An&&(i=Bt(0,((f=r+(jn>>s+1)>>>0)&~(mn>>(s=((f&At)>>_n)-Rt|0)))>>>0),f=(f&mn|jn)>>_n-s>>>0,r<0&&(f=-f),t-=i),r=wt(r=xt(c=1-((c=(o=(i=ht(i=n+t,0))*En)+(a=(n-(i-t))*wn+i*On))*(e=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(c-o))+c*u)-c))),(r+=f<<_n>>>0)>>_n<=0?hn(c,f):Bt(c,r)}(v,l,s),u*y}var Hn=1048575,Wn=.3333333333333333;var Bn=0x40000000000000,Rn=1.4426950407214463,Mn=1.6751713164886512e-10,Zn=2146435072,Xn=1048576,Yn=1072693248,qn=[0,0];function zn(r){var t,n,e,i,o,a;if(Tr(r)||r<0)return NaN;if(vt.assign(r,qn,1,0),n=qn[0],e=qn[1],a=0,n<Xn){if(0==(n&At|e))return Fr;a-=54,n=xt(r*=Bn)}return n>=Zn?r+r:(a+=(n>>20)-Rt|0,a+=(o=(n&=mn)+614244&1048576|0)>>20|0,i=function(r){var t,n,e,i,o,a,u,c,f,l,s;return i=xt(r),o=r-1,(Hn&2+i)<3?0===o?0:o*o*(Wn*o-.5):(l=(i&=Hn)-398458|0,s=440401-i|0,n=(f=(u=(a=o/(2+o))*a)*u)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(f),e=u*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(f),c=e+n,(l|=s)>0?a*((t=.5*o*o)+c)-t:a*(c-o))}(r=Bt(r,n|o^Yn)),t=ht(r-=1,0),(r+i)*Mn+(r-t+i)*Rn+t*Rn+a)}function Dn(r){var t;return Tr(r)||Ir(r)||0===r?r:(r<0?(r=-r,t=-1):t=1,t*Cn(2,kr(zn(r))))}return function(r){return xr(r,Dn)}}));
//# sourceMappingURL=index.js.map
