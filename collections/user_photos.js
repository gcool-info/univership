userPhotos = new FS.Collection("userPhotos", {
	stores: [
		new FS.Store.GridFS("userPhotos"),
		new FS.Store.GridFS("thumbs", {
			transformWrite: function(fileObj, readStream, writeStream) {
				// Transform the image into a 10x10px thumbnail
				gm(readStream, fileObj.name()).resize('250', '250').stream().pipe(writeStream);
			}
		})
	],
	filter: {
		maxSize: 10000000, //10 MB
		allow: {
			contentTypes: ['image/*'],
			extensions: ['png', 'jpg', 'jpeg', 'gif', 'tiff']
		},
		onInvalid: function () {
			if (Meteor.isClient)
				Alerts.add('You did a no-no...! Your file is too large (max 10mb) or it\'s not an image.');
			else
				throw new Meteor.Error(401, 'You did a no-no...! Your file is too large (max 10MB) or it\'s not an image.');
		}

	}
});

userPhotos.allow({
	// Any logged in user can add a profile pic
  	insert: function(userId) { if (userId) return true; },

	// Only the user's owner can update it
	update: function(userId, doc) { if (userId == doc.metadata.owner) return true; }, 

	// Only the user's owner can remove it
	remove: function(userId, doc) { if (userId == doc.metadata.owner) return true; }, 

	// Anyone can view the profile pic
	download: function() { return true }
});


Meteor.methods({
});