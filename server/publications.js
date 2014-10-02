Meteor.publish('univerns', function() {
	return Meteor.users.find();
});
