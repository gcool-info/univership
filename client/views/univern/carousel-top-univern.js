Template.carouselTopUnivern.helpers({
	getName: function() {

		return this.profile.name + ' ' + this.profile.surname;
	},
	getBaseline: function() {

		return this.profile.baseline;
	},
	getPhoto: function() {

		return (this.profile.photo.url !== '' ? this.profile.photo.url : false);
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