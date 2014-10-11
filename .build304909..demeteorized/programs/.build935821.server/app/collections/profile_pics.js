(function(){ProfilePics = new FS.Collection("profilepics", {
    stores: [
      new FS.Store.GridFS("profilepics", {
      })
    ]
});
   

ProfilePics.allow({
  insert: function(userId) { if (userId) return true; },
  download: function() { return true },
  update: function(userId) { if (userId) return true; },
});

})();
