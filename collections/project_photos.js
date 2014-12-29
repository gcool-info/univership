projectPhotos = new FS.Collection("projectPhotos", {
    stores: [
      new FS.Store.GridFS("projectPhotos", {

      })
    ]
});

projectPhotos.allow({
});


Meteor.methods({
});