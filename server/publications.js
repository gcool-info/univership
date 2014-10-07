Meteor.publish('univerns', function(id) {
	return Meteor.users.find(id);
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

Meteor.publish('univernsSkills', function(univernID) {
	return Skills.find({"univernID":univernID}, {fields: {percentage: true, title: true, projectID:true}});
});

Meteor.publish('univernsProjects', function(univernID) {
	return Projects.find({"univernID":univernID}, {fields: {title: true, body: true, logo: true}});
});

Meteor.publish('univernsPeople', function(univernID) {
	return People.find({"univernID":univernID, "public":true});
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


