Template.firstUnivernHome.helpers({
	george: function() {
		return Meteor.users.findOne();
	}
});