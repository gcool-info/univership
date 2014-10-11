Meteor.publish('allUniverns', function() {
	return Meteor.users.find();
});

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

Meteor.publish('projectSkills', function(projectID) {
	return Skills.find({"projectID": projectID});
});

Meteor.publish('univernsSkills', function(univernID) {
	return Skills.find({"univernID":univernID}, {fields: {percentage: true, title: true, projectID:true}});
});

Meteor.publish('univernsProjects', function(univernID) {
	return Projects.find({"univernID":univernID}, {fields: {title: true, body: true, logo: true, type: true}});
});

Meteor.publish('univernsPeople', function(univernID) {
	return People.find({"univernID":univernID, "public":true});
});


Meteor.publish('processes', function(projectID) {
	return Processes.find({"projectID": projectID}, {sort:{"rank": 1}});
});

Meteor.publish('projectfiles', function() {
	return projectFiles.find();
});


Meteor.publish('people', function() {
	return People.find();
});

Meteor.publish('profilepics', function() {
	return ProfilePics.find();
});

Meteor.publish('locations', function(univernID) {
	return Locations.find({"univernID":univernID}, {sort:{created: -1}});
});



