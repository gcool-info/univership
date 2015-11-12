define([
	'text!app/views/projectcarousel.html',
	], function (ProjectTemplate) {

	return Backbone.View.extend({

		template : _.template(ProjectTemplate),

		initialize: function(options) {
			this.options = options;
			this.el = '.' + this.options.projectType;
			this.render();
		},

		events: {
	  	},

		render: function() {
			$(this.el).html( this.template( { projects : this.collection } ) );
		},

	});

});