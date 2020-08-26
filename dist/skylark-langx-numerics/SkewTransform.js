/**
 * skylark-langx-numerics - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","../numerics","./Transform","./Matrix"],function(n,e,t){return numerics.SkewTransform=e.inherit({klassName:"SkewTransform",value:{get:function(){return t.scaleAt(this.skewX,this.skewY)}},skewX:{get:function(){return this._.skewX}},skewY:{get:function(){return this._.skewY}},clone:function(){},transform:function(n){},transformBounds:function(n){},init:function(n,e){var t=this._;t.skewX=n||0,t.skewY=e||0}})});
//# sourceMappingURL=sourcemaps/SkewTransform.js.map
