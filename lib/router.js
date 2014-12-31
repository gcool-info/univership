Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
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
		},
		data: function() { 
			return Meteor.users.findOne(this.params._id); 
		}

	});
});

