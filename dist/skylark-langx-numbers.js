/**
 * skylark-langx-numbers - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,e){var n=e.define,t=e.require,o="function"==typeof n&&n.amd,u=!o&&"undefined"!=typeof exports;if(!o&&!n){var i={};n=e.define=function(r,e,n){"function"==typeof n?(i[r]={factory:n,deps:e.map(function(e){return function(r,e){if("."!==r[0])return r;var n=e.split("/"),t=r.split("/");n.pop();for(var o=0;o<t.length;o++)"."!=t[o]&&(".."==t[o]?n.pop():n.push(t[o]));return n.join("/")}(e,r)}),resolved:!1,exports:null},t(r)):i[r]={factory:null,resolved:!0,exports:n}},t=e.require=function(r){if(!i.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var n=i[r];if(!n.resolved){var o=[];n.deps.forEach(function(r){o.push(t(r))}),n.exports=n.factory.apply(e,o)||null,n.resolved=!0}return n.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,e){r("skylark-langx-numbers/numbers",["skylark-langx-ns","skylark-langx-types"],function(r,e){var n=e.isObject,t=e.isSymbol,o=1/0,u=1.7976931348623157e308,i=NaN,s=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,p=parseInt;function c(r){if(!r)return 0===r?r:0;if((r=y(r))===o||r===-o){var e=r<0?-1:1;return e*u}return r==r?r:0}function y(r){if("number"==typeof r)return r;if(t(r))return i;if(n(r)){var e="function"==typeof r.valueOf?r.valueOf():r;r=n(e)?e+"":e}if("string"!=typeof r)return 0===r?r:+r;r=r.replace(s,"");var o=f.test(r);return o||l.test(r)?p(r.slice(2),o?2:8):a.test(r)?i:+r}return r.attach("langx.numbers",{toFinite:c,toNumber:y,toInteger:function(r){var e=c(r),n=e%1;return e==e?n?e-n:e:0}})}),r("skylark-langx-numbers/main",["./numbers"],function(r){return r}),r("skylark-langx-numbers",["skylark-langx-numbers/main"],function(r){return r})}(n),!o){var s=t("skylark-langx/skylark");u?module.exports=s:e.skylarkjs=s}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-langx-numbers.js.map