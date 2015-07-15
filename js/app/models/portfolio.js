define([
		'js/app/models/project.js'
	], function (Project) {

    return Backbone.Collection.extend({
	    model: Project,

	    comparator: function(model) {
	        return model.get('createdDate');
	    }
    });
});