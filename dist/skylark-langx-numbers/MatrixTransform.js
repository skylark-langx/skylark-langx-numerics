/**
 * skylark-langx-numbers - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","../numerics","./Transform","../Point","../Rect"],function(n,t,i,r,a){return t.MatrixTransform=i.inherit({klassName:"MatrixTransform",value:{get:function(){return this.matrix.clone()}},matrix:{get:function(){return this._.matrix}},clone:function(){},transform:function(n){},transformBounds:function(n){},initialize:function(n){this._.matrix=n}})});
//# sourceMappingURL=sourcemaps/MatrixTransform.js.map
