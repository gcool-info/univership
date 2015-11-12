define([
		'text!app/views/project.html'
	], function (ProjectTemplate) {

	return Backbone.View.extend({

		el: '.full-page',
		template : _.template(ProjectTemplate),

		initialize: function() {
			this.render();
		},

		events: {
	  	},

		render: function() {
			this.$el.html( this.template( { project : this.model } ) );
		},
	});
});