/************************ For a single univern ***********************/
Meteor.publish('singleUnivern', function(id) {
	return Meteor.users.find(id);
});

Meteor.publish('singleUnivernPhoto', function(id) {
	return userPhotos.find({'metadata.owner':id});
});

/************************ For a single project ***********************/
Meteor.publish('singleProject', function(id) {
	return Project.find(id);
});

Meteor.publish('projectPhotos', function(id) {
	return projectPhotos.find({'metadata.project':id});
});