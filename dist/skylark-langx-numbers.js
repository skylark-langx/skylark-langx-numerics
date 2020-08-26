/**
 * skylark-langx-numbers - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,n){var e=n.define,require=n.require,t="function"==typeof e&&e.amd,o=!t&&"undefined"!=typeof exports;if(!t&&!e){var i={};e=n.define=function(r,n,e){"function"==typeof e?(i[r]={factory:e,deps:n.map(function(n){return function(r,n){if("."!==r[0])return r;var e=n.split("/"),t=r.split("/");e.pop();for(var o=0;o<t.length;o++)"."!=t[o]&&(".."==t[o]?e.pop():e.push(t[o]));return e.join("/")}(n,r)}),resolved:!1,exports:null},require(r)):i[r]={factory:null,resolved:!0,exports:e}},require=n.require=function(r){if(!i.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var module=i[r];if(!module.resolved){var e=[];module.deps.forEach(function(r){e.push(require(r))}),module.exports=module.factory.apply(n,e)||null,module.resolved=!0}return module.exports}}if(!e)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,require){r("skylark-langx-numbers/numerics",["skylark-langx-ns","skylark-langx-types"],function(r,n){return r.attach("langx.numerics",{toFinite:n.toFinite,toNumber:n.toNumber,toInteger:n.toInteger})}),r("skylark-langx-numbers/main",["./numerics"],function(r){return r}),r("skylark-langx-numbers",["skylark-langx-numbers/main"],function(r){return r})}(e),!t){var s=require("skylark-langx-ns");o?module.exports=s:n.skylarkjs=s}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-langx-numbers.js.map
