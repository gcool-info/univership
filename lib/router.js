Router.configure({
	layoutTemplate: 'layout',
});

Router.map(function() {
	this.route('home', {
		path: '/',
		waitOn: function() { return Meteor.subscribe('univerns', {email: 'george.koulouris1@gmail.com'}) }
	});
});

Router.map(function() {
	this.route('univernPage', {
		path: '/univerns/:_id',
		data: function() { return Meteor.users.findOne(this.params._id); },
		waitOn: function() { return Meteor.subscribe('univerns', this.params._id) }

	});

	this.route('loginPage', {
		path: '/login'
	});

	this.route('project', {
		path: '/projects/:_id'
	});
	
	this.route('projectEdit', {
		path: '/projects/:_id/edit',
		data: function() { return Projects.findOne(this.params._id) },
		waitOn: function() { return [Meteor.subscribe('projects', this.params._id), Meteor.subscribe('projectlogos'), Meteor.subscribe('skills')] }
	});

	this.route('processEdit', {
		path: '/projects/:_id/process',
		data: function() { return Projects.findOne(this.params._id) },
		waitOn: function() { return [Meteor.subscribe('projects', this.params._id), Meteor.subscribe('processes', {"projectID":this.params._id})] }
	});

	this.route('projectAdd', {
		path: '/projects/new'
	});
});
