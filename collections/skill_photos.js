skillPhotos = new FS.Collection("skillPhotos", {
    stores: [
      new FS.Store.GridFS("skillPhotos", {

      })
    ]
});

skillPhotos.allow({
});


Meteor.methods({
});