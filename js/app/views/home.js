define([
		'text!app/views/home.html'
	], function (HomeTemplate) {

	return Backbone.View.extend({

		el: '.container',
		template : _.template(HomeTemplate),

		initialize: function() {
			this.render();
		},

		events: {
	  	},

		render: function() {
			this.$el.html( this.template( { collection: this.collection.models } ) );
		},

	});

});