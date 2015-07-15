define([
		'text!app/views/header.html'
	], function (HeaderTemplate) {

	return Backbone.View.extend({

		el: '.header',
		template : _.template(HeaderTemplate),

		initialize: function() {
			this.render();
		},

		events: {
	  	},

		render: function() {
			this.$el.html( this.template() );
		},

	});

});