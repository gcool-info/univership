Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
});

Router.map(function() {

	this.route('home', {
		path: '/'
	});

	this.route('joinIn', {
		path: '/joinIn'
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
			Meteor.subscribe('singleUnivern', this.params._id);
			Meteor.subscribe('singleUnivernPhoto', this.params._id)
		},
		data: function() { 
			return Meteor.users.findOne({_id: this.params._id}); 
		}
	});

	this.route('project', {
		path: '/projects/:_id',
		waitOn: function() { 
			Meteor.subscribe('singleProject', this.params._id);
			Meteor.subscribe('projectPhotos')
		},
		data: function() { 
			return Project.findOne({_id: this.params._id}); 
		}
	});
});

