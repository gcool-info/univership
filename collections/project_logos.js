projectLogos = new FS.Collection("projectlogos", {
    stores: [
      new FS.Store.FileSystem("projectlogos", {

      })
    ],
    filter: {
      maxSize: 3000000, //3 MB
      allow: {
        contentTypes: ['image/*'], //allow only images in this FS.Collection
        extensions: ['svg']
      },
      onInvalid: function () {
        if (Meteor.isClient) {
          alert('You did a no-no...! Your file is too large (max 3mb) or it\'s not an image.');
        } else {
          console.log('You did a no-no...! Your file is too large (max 3mb) or it\'s not an .svg.');
        }
      }
    }
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