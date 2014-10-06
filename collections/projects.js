Projects = new Meteor.Collection('projects');

Projects.allow({
	update: function(userId, doc) {
		if (userId == doc.univernID)
			return true;
	}
});