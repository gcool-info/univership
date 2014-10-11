Template.header.rendered = function() {

}
Template.header.helpers({
	getGeorge: function() {
		var george = Meteor.users.findOne({"emails.0.address":"george.koulouris1@gmail.com"});

		if (george)
			return george._id;
	},
});

Template.header.events({
	'click #introduction':function() {
		$(".first-univern").show(400);
	},
	'click .hide-submenu':function() {
		$(".first-univern").hide(400);
	},
	'click .trigger-header': function() {
		var headerPos = $(".header").css('left');

		if (headerPos == "0px")
			$(".header").animate({'left' : -$(".header").width() });
		else 
			$(".header").animate({'left' : 0 });
	},
	'click body': function() {
		console.log('ccol');
	}
})
