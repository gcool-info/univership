Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() {

	this.route('home', {
		path: '/'
	});

	this.route('projectList', {
		path: '/projects'
	});

	this.route('univernList', {
		path: '/univerns'
	});

	this.route('univern', {
		path: '/univerns/:_id',
		waitOn: function() { 
			Meteor.subscribe('singleUnivern', this.params._id)
		}
	});
});

