define(function (require) {
	return Backbone.View.extend({

		el: '.container',

		initialize: function() {
			this.listenTo(this.collection, 'add', this.render);
		},

		events: {
	  	},

		render: function() {
			console.log("cool");
			//this.$el.html(_.template($('#articleList').html(), {articles: this.collection.models}));
		},

	});

});