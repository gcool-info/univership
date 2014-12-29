postPhotos = new FS.Collection("postPhotos", {
    stores: [
      new FS.Store.GridFS("postPhotos", {

      })
    ]
});

postPhotos.allow({
});


Meteor.methods({
});