Template.univern.rendered = function() {
},

Template.univern.helpers({
	getName: function() {

		var currentUser = Meteor.users.findOne();

		if (!currentUser)
			return;

		return currentUser.profile.name + ' ' + currentUser.profile.surname;
	},
	getBaseline: function() {

		var currentUser = Meteor.users.findOne();

		if (!currentUser)
			return;

		return currentUser.profile.baseline;
	},
	getPhoto: function() {

		var currentUser = Meteor.users.findOne();

		if (!currentUser)
			return;

		return (currentUser.profile.photo.url !== '' ? currentUser.profile.photo.url : false);
	},

	getVideo: function() {

		var currentUser = Meteor.users.findOne();

		if (!currentUser)
			return;

		var videoURL = currentUser.profile.video;

		if (videoURL == '')
			return false;

		/* Regular expression to get the video key (only youtube is supported for now) */
		var videoRegEx = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;

		var videoKey = videoURL.match(videoRegEx)[1];

		return '//www.youtube.com/embed/' + videoKey + '?rel=0&amp;showinfo=0';
	},

	isOwner: function() {
		var currentUser = Meteor.users.findOne();

		if (!currentUser)
			return;

		return (Meteor.user() == currentUser ? true : false);
	}
})

