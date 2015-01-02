Template.carouselTopUnivern.helpers({
	getName: function() {

		return this.profile.name + ' ' + this.profile.surname;
	},
	getBaseline: function() {

		return this.profile.baseline;
	},
	getPhoto: function() {

		var photoID = this.profile.photo;

		return (photoID !== '' ? userPhotos.findOne(photoID).url() : false);
	},

	getVideo: function() {


		var videoURL = this.profile.video;

		if (videoURL == '')
			return false;

		/* Regular expression to get the video key (only youtube is supported for now) */
		var videoRegEx = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;

		var videoKey = videoURL.match(videoRegEx)[1];

		return '//www.youtube.com/embed/' + videoKey + '?rel=0&amp;showinfo=0';
	},

	isOwner: function() {

		return (Meteor.user()._id == this._id ? true : false);
	},
	getNewPhoto: function() {
		var newPhotoID = Session.get('fileID');

        if (newPhotoID)
            return userPhotos.findOne({"_id": newPhotoID});
	}
});

Template.carouselTopUnivern.events({
	'change .upload': function(event) {
		var newPhoto = new FS.File(event.target.files[0]);

		newPhoto.metadata = {
            owner: this._id
        };

        // Insert the new photo
        var that = this;
        var handle = userPhotos.insert(newPhoto, function (err, fileObj) {

        	// Set a session variable to track upload progress
	        Session.set('fileID', fileObj._id); 

        	if (!err) {
        		// Update the data on the user profile
		        var newPhotoData = {
		        	userID: that._id,
		        	photoID: fileObj._id
		        }

		        Meteor.call('updateUserProfilePic', newPhotoData, function(err) {
					if (err)
		        		return Alerts.add('Oh-oh.. Here\'s what went wrong: "' + err.reason + '"');
		        	else {
		        		// Delete the old photo
				        var oldPhotoID = that.profile.photo;

				    	userPhotos.remove({'_id': oldPhotoID}, function (err, fileObj) {
				        	if (err)
				        		return Alerts.add('Oh-oh.. Here\'s what went wrong: "' + err.reason + '"');     		
				        });
		        	} 
				});

	        }  		
        });
	}
});