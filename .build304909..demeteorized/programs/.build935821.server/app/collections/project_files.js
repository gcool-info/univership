(function(){projectFiles = new FS.Collection("projectfiles", {
    stores: [
      new FS.Store.GridFS("projectfiles", {

      })
    ]
});

projectFiles.allow({
  insert: function(userId) { if (userID) return true; },
  download: function() { return true },
  update: function(userId) { if (userID) return true; },
});

})();
