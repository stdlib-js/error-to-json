"use strict";var i=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var n=i(function(O,s){
var E=[[TypeError,"TypeError"],[SyntaxError,"SyntaxError"],[ReferenceError,"ReferenceError"],[RangeError,"RangeError"],[URIError,"URIError"],[EvalError,"EvalError"],[Error,"Error"]];s.exports=E
});var c=i(function(S,u){
var y=require('@stdlib/assert-instance-of/dist'),l=require('@stdlib/utils-constructor-name/dist'),p=require('@stdlib/utils-get-prototype-of/dist'),o=n();function m(r){var a,e;for(e=0;e<o.length;e++)if(y(r,o[e][0]))return o[e][1];for(;r;){for(a=l(r),e=0;e<o.length;e++)if(a===o[e][1])return o[e][1];r=p(r)}}u.exports=m
});var f=i(function(j,v){
var q=require('@stdlib/utils-keys/dist'),g=require('@stdlib/utils-copy/dist'),R=require('@stdlib/assert-is-error/dist'),x=require('@stdlib/error-tools-fmtprodmsg/dist'),d=c();function h(r){var a,e,t;if(!R(r))throw new TypeError(x('0Nl3o',r));for(e={},e.type=d(r),e.message=r.message,r.name&&(e.name=r.name),r.stack&&(e.stack=r.stack),r.code&&(e.code=r.code),r.errno&&(e.errno=r.errno),r.syscall&&(e.syscall=r.syscall),a=q(r),t=0;t<a.length;t++)e[a[t]]=g(r[a[t]]);return e}v.exports=h
});var T=f();module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
