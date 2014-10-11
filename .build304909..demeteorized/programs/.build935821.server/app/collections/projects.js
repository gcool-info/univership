(function(){Projects = new Meteor.Collection('projects');

Projects.allow({
	update: function(userId, doc) {
		if (userId == doc.univernID)
			return true;
	}
});

Meteor.methods({
  	createProject: function(projectAttributes) {
      var user = Meteor.user();

        if (!user)
          throw new Meteor.Error(401, "You need to be a univern to add a project");

      	var project = _.extend(_.pick(projectAttributes, 'title'), {
			univernID: user._id,
			created: new Date().getTime(),
			public: true
		});

      	var projectId = Projects.insert(project);

		return projectId;
	}
});

})();
