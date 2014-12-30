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

		return (currentUser.profile.video !== '' ? currentUser.profile.video : false);
	}
})

