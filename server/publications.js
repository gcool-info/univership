Meteor.publish('univerns', function() {
	return Meteor.users.find();
});

Meteor.publish('projects', function() {
	return Projects.find();
});

Meteor.publish('projectlogos', function() {
	return projectLogos.find();
});

Meteor.publish('skills', function() {
	return Skills.find();
});

Meteor.publish('processes', function() {
	return Processes.find();
});

Meteor.publish('projectfiles', function() {
	return ProjectFiles.find();
});

Meteor.publish('people', function() {
	return People.find();
});

Meteor.publish('profilepics', function() {
	return ProfilePics.find();
});


