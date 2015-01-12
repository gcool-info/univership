Template.singleCarouselPhoto.rendered = function() {
	$('#project-carousel .carousel-inner').children('div:first').addClass('active');
},


Template.singleCarouselPhoto.helpers({
	isVideo: function() {

		var videoURL = this.id;

		/* Regular expression to get the video key (only youtube is supported for now) */
		var videoRegEx = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;

		if (videoURL.match(videoRegEx))
			return true;
		else
			return false;

		var videoKey = videoURL.match(videoRegEx)[1];

		return '//www.youtube.com/embed/' + videoKey + '?rel=0&amp;showinfo=0';
	},
	getVideo: function() {
		var videoURL = this.id;

		/* Regular expression to get the video key (only youtube is supported for now) */
		var videoRegEx = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;

		var videoKey = videoURL.match(videoRegEx)[1];

		return '//www.youtube.com/embed/' + videoKey + '?rel=0&amp;showinfo=0';
	},
	getPhoto: function() {

		var photoID = this.id;
		
		return projectPhotos.findOne(photoID).url();
	},
	getCaption: function() {

		return this.caption;
	},
})