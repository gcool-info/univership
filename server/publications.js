Meteor.publish('singleUnivern', function(id) {
	return Meteor.users.find(id);
});
