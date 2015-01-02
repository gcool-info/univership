Meteor.publish('singleUnivern', function(id) {
	return Meteor.users.find(id);
});

Meteor.publish('singleUnivernPhoto', function(id) {
	return userPhotos.find({});
});
