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
	}
});

Template.carouselTopUnivern.events({
	'change .upload': function(event) {
		var newPhoto = new FS.File(event.target.files[0]);

		newPhoto.metadata = {
            owner: this._id
        };

        // Insert the new photo
        var handle = userPhotos.insert(newPhoto, function (err, fileObj) {
        	if (err)
        		return;        		
        });

        if (!handle._id)
        	return;

        // Delete the old photo
        var oldPhotoID = this.profile.photo;

        if(oldPhotoID !== '') {
        	userPhotos.remove({'_id': oldPhotoID}, function (err, fileObj) {
	        	if (err)
	        		return Alerts.add('Oh-oh.. Here\'s what went wrong: "' + err.reason + '"');        		
	        });
	     }
        

	    // update the data on the user profile
        var newPhotoData = {
        	userID: this._id,
        	photoID: handle._id
        }

        Meteor.call('updateUserProfilePic', newPhotoData, function(err) {
			if (err)
        		return Alerts.add('Oh-oh.. Here\'s what went wrong: "' + err.reason + '"'); 
		});
	}
});