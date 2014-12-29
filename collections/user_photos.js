userPhotos = new FS.Collection("userPhotos", {
    stores: [
      new FS.Store.GridFS("userPhotos", {

      })
    ]
});

userPhotos.allow({
});


Meteor.methods({
});