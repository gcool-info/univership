ProfilePics = new FS.Collection("profilePics", {
  stores: [new FS.Store.FileSystem("profilePics", {path: ""})]
});