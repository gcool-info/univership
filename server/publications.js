Meteor.publish('univerns', function() {
	return Meteor.users.find();
});

Meteor.publish('projects', function() {
	return Projects.find();
});
