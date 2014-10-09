projectLogos = new FS.Collection("projectlogos", {
    stores: [
      new FS.Store.GridFS("projectlogos", {

      })
    ]
});

projectLogos.allow({
  insert: function(userId) { if (userId) return true; },
  download: function() { return true },
  update: function(userId) { if (userId) return true; },
});


Meteor.methods({
  setProjectLogo: function(project) {
      var user = Meteor.user(),
        projectLogo = projectLogos.findOne(project.previousLogo);

        if (!user)
          throw new Meteor.Error(401, "You need to be a univern to edit this project");

        if (user._id !== project.owner)
          throw new Meteor.Error(401, "Bad Univern! This is not your project!");

        projectLogos.remove(project.previousLogo);
        Projects.update(project.id, {$set : {"logo" : project.handleID} });
  },
});

Meteor.methods({
  setProjectImage: function(project) {
      var user = Meteor.user(),
        projectLogo = projectLogos.findOne(project.previousImage);

        if (!user)
          throw new Meteor.Error(401, "You need to be a univern to edit this project");

        if (user._id !== project.owner)
          throw new Meteor.Error(401, "Bad Univern! This is not your project!");

        projectLogos.remove(project.previousImage);
        Projects.update(project.id, {$set : {"image" : project.handleID} });
  },
});