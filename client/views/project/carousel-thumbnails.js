Template.carouselThumbnails.helpers({

	isVideo: function() {

		var videoURL = this.id;

		/* Regular expression to get the video key (only youtube is supported for now) */
		var videoRegEx = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;

		if (!videoURL.match(videoRegEx))
			return false;

		return true;
	},
	getPhoto: function() {

		var photoID = this.id;

		return projectPhotos.findOne(photoID).url();
	},
	getVideoThumb: function() {
		var videoURL = this.id;

		/* Regular expression to get the video key (only youtube is supported for now) */
		var videoRegEx = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;

		var videoKey = videoURL.match(videoRegEx)[1];

		console.log(this.dname);
		return '//img.youtube.com/vi/' + videoKey + '/hqdefault.jpg';
	}
})