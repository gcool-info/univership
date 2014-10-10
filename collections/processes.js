Processes = new Meteor.Collection('processes');

Meteor.methods({
  	addStep: function(stepAttributes) {
      var user = Meteor.user(),
      	project = Projects.findOne(stepAttributes.projectID);

        if (!user)
          throw new Meteor.Error(401, "You need to be a univern to add a project");

      	if (user._id !== project.univernID)
          throw new Meteor.Error(401, "Bad Univern! This is not your project!");

      	var step = _.extend(_.pick(stepAttributes, 'projectID', 'rank'), {
			univernID: user._id,
			created: new Date().getTime()
		});

      	var processId = Processes.insert(step);

		return processId;
	},
	deleteStep: function(step) {
      var user = Meteor.user(),
      	project = Projects.findOne(step.projectID);

        if (!user)
          throw new Meteor.Error(401, "You need to be a univern to add a project");

      	if (user._id !== project.univernID)
          throw new Meteor.Error(401, "Bad Univern! This is not your project!");

      	Processes.remove({_id:step.id, "projectID":step.projectID});
	},

	saveStep: function(stepAttributes) {
		var user = Meteor.user(),
      		project = Projects.findOne(stepAttributes.projectID);

      	if (!user)
          throw new Meteor.Error(401, "You need to be a univern to add a project");

      	if (user._id !== project.univernID)
          throw new Meteor.Error(401, "Bad Univern! This is not your project!");

      	var step = _.extend(_.pick(stepAttributes, 'title', 'body', 'files'), {
			created: new Date().getTime()
		});

		Processes.update({"rank": stepAttributes.rank, "projectID": project._id}, {$set: step});

	},


})
