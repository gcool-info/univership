define([
		'text!app/views/home.html',
		'js/app/views/projectcarousel.js'
	], function (HomeTemplate, ProjectCarouelView) {

	return Backbone.View.extend({

		el: '.container',
		template : _.template(HomeTemplate),

		initialize: function() {
			this.render();

			var individualProjectCollection = this.collection.where( { "type" : "individual" } );
			var placementProjectCollection = this.collection.where( { "type" : "placement" } );
			var groupProjectCollection = this.collection.where( { "type" : "group" } );

			var individualProjectCarouselView = new ProjectCarouelView( { projectType : 'individual-project', collection : individualProjectCollection} );
			var placementProjectCarouselView = new ProjectCarouelView( { projectType : 'placement-project', collection : placementProjectCollection} );
			var groupProjectCarouselView = new ProjectCarouelView( { projectType : 'group-project', collection : groupProjectCollection} );
		},

		events: {
	  	},

		render: function() {
			this.$el.html( this.template( {} ) );
		},

	});

});