(function(){Router.configure({
	layoutTemplate: 'layout',
});

Router.map(function() {
	this.route('home', {
		path: '/',
		waitOn: function() { return Meteor.subscribe('allUniverns') },
		onStop: function() { $.fn.fullpage.destroy('all'); }
	});

	this.route('univernPage', {
		path: '/univerns/:_id',
		data: function() { return Meteor.users.findOne(this.params._id); },
		waitOn: function() { 
			return [
				Meteor.subscribe('univerns', this.params._id), 
				Meteor.subscribe('univernsSkills', this.params._id),
				Meteor.subscribe('univernsPeople', this.params._id),
				Meteor.subscribe('univernsProjects', this.params._id),
				Meteor.subscribe('projectlogos'),
				Meteor.subscribe('profilepics'),
			] 
		},
		onStop: function() { $.fn.fullpage.destroy('all'); }

	});

	this.route('loginPage', {
		path: '/login'
	});
	
	this.route('projectEdit', {
		path: '/projects/:_id/edit',
		data: function() { return Projects.findOne(this.params._id) },
		waitOn: function() { return [Meteor.subscribe('projects', this.params._id), Meteor.subscribe('projectlogos'), Meteor.subscribe('skills')] }
	});

	this.route('processEdit', {
		path: '/projects/:_id/process',
		data: function() { return Projects.findOne(this.params._id) },
		waitOn: function() { 
			return [
				Meteor.subscribe('projects', this.params._id), 
				Meteor.subscribe('processes', this.params._id), 
				Meteor.subscribe('projectfiles')
				] 
		}
	});

	this.route('projectAdd', {
		path: '/projects/new'
	});

	this.route('peopleAdd', {
		path: '/people/new'
	});

	this.route('peopleEdit', {
		path: '/people/:_id/edit',
		data: function() { return People.findOne(this.params._id) },
		waitOn: function() { return [Meteor.subscribe('people', this.params._id), Meteor.subscribe('projects'), Meteor.subscribe('profilepics')] }
	});

	this.route('helpdesk', {
		path: '/helpdesk',
		onStop: function() { $.fn.fullpage.destroy('all'); }
	});

	this.route('projectPage', {
		path: '/projects/:_id',
		data: function() { return Projects.findOne(this.params._id) },
		waitOn: function() { return [
			Meteor.subscribe('projects', this.params._id),
			Meteor.subscribe('projectlogos'),
			Meteor.subscribe('projectSkills', this.params._id),
			Meteor.subscribe('processes', this.params._id),
			Meteor.subscribe('projectfiles')
			] 
		},
		onStop: function() { $.fn.fullpage.destroy('all'); }

	});

});


})();
