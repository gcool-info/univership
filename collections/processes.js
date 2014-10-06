Processes = new Meteor.Collection('processes');

Meteor.methods({
  	addProcess: function(processAttributes) {
      var user = Meteor.user(),
      	project = Projects.findOne(processAttributes.projectID);

        if (!user)
          throw new Meteor.Error(401, "You need to be a univern to add a project");

      	if (user._id !== project.univernID)
          throw new Meteor.Error(401, "Bad Univern! This is not your project!");

      	var process = _.extend(_.pick(processAttributes, 'projectID', 'rank'), {
			univernID: user._id,
			created: new Date().getTime()
		});

      	var processId = Processes.insert(process);

		return processId;
	}
})
