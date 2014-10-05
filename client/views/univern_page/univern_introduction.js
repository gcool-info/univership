Template.univernIntroductionText.helpers({ 
	univernIntro: function() {
		var currentUnivern = Meteor.users.findOne();
		return currentUnivern.profile.introduction;
	}
});