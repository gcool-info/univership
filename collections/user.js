Meteor.methods({
	uploadUserVideo: function(data) {

		var user = Meteor.user();

		if (!user)
			throw new Meteor.Error(401, "You are not logged in"); 

		if (user._id !== data.userID)
			throw new Meteor.Error(401, "This is not your profile"); 

		/* Regular expression to get the video key (only youtube is supported for now) */
		var videoRegEx = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;

		var videoKey = data.video.match(videoRegEx);

		if (!videoKey)
            throw new Meteor.Error(422, 'This is not a valid video URL'); 

        return Meteor.users.update({_id: data.userID}, {$set: {'profile.video' : data.video}});
	},

	updateBasicUserInfo: function(data) {
		var user = Meteor.user();

		if (!user)
			throw new Meteor.Error(401, "You are not logged in"); 

		if (user._id !== data.userID)
			throw new Meteor.Error(401, "This is not your profile"); 

		return Meteor.users.update({_id: data.userID}, {$set: 
			{
				'profile.name': data.name,
				'profile.surname': data.surname,
				'profile.baseline': data.baseline,
			}
		});

	}
});