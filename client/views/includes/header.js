Template.header.helpers({
	getGeorge: function() {
		var george = Meteor.users.findOne({"emails.0.address":"george.koulouris1@gmail.com"});

		if (george)
			return george._id;
	},
});

Template.header.events({
	'click .show-submenu':function() {
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
	'click #introduction': function() {
		$.fn.fullpage.moveTo(1, 0);
	},
	'click #skills': function() {
		$.fn.fullpage.moveTo(2, 0);
	},
	'click #skills': function() {
		$.fn.fullpage.moveTo(2, 0);
	},
	'click #people': function() {
		$.fn.fullpage.moveTo(3, 0);
	},
	'click #group-projects': function() {
		$.fn.fullpage.moveTo(4, 0);
	},
	'click #placements': function() {
		$.fn.fullpage.moveTo(5, 0);
	},
	'click #individual-projects': function() {
		$.fn.fullpage.moveTo(6, 0);
	},
	'click #work': function() {
		$.fn.fullpage.moveTo(7, 0);
	},
})
