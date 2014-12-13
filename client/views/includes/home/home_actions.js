Template.firstUnivernHomeBtn.helpers({
	georgeID: function() {
		return Meteor.users.findOne({"emails.0.address":"george.koulouris1@gmail.com"})._id;
	}
});