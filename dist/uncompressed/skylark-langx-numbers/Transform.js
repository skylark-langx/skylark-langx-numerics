define([
    "skylark-langx/langx",
    "../numerics",
	"./Matrix"
], function(langx,numerics, Matrix) {

    var Transform = numerics.Transform = langx.klass({
        "klassName": "Transform",
		"value": {
			get : function(){
				return this._.value;
			}
		}
	});

	return Transform;
});
