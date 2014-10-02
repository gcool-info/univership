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
});
