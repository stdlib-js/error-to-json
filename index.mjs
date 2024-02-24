// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-error@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-instance-of@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constructor-name@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@v0.2.1-esm/index.mjs";var m=[[TypeError,"TypeError"],[SyntaxError,"SyntaxError"],[ReferenceError,"ReferenceError"],[RangeError,"RangeError"],[URIError,"URIError"],[EvalError,"EvalError"],[Error,"Error"]];function d(d){var l,a,c;if(!s(d))throw new TypeError(t("0Nl3o",d));for((a={}).type=function(r){var e,s;for(s=0;s<m.length;s++)if(o(r,m[s][0]))return m[s][1];for(;r;){for(e=n(r),s=0;s<m.length;s++)if(e===m[s][1])return m[s][1];r=i(r)}}(d),a.message=d.message,d.name&&(a.name=d.name),d.stack&&(a.stack=d.stack),d.code&&(a.code=d.code),d.errno&&(a.errno=d.errno),d.syscall&&(a.syscall=d.syscall),l=r(d),c=0;c<l.length;c++)a[l[c]]=e(d[l[c]]);return a}export{d as default};
//# sourceMappingURL=index.mjs.map
