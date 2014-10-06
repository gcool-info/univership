projectFiles = new FS.Collection("projectfiles", {
    stores: [
      new FS.Store.FileSystem("projectfiles", {

      })
    ],
    filter: {
      maxSize: 3000000, //3 MB
      allow: {
        contentTypes: ['image/*'], //allow only images in this FS.Collection
        extensions: ['svg', 'pdf', 'png', 'jpg', 'jpeg', 'gif', 'tiff']
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

projectFiles.allow({
  insert: function(userId) { if (userID) return true; },
  download: function() { return true },
  update: function(userId) { if (userID) return true; },
});