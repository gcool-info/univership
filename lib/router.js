Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('home', {
		path: '/univerns/:_id',
		waitOn: function() { 
			Meteor.subscribe('singleUnivern', this.params._id)
		}
	});
});

