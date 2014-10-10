Template.header.helpers({
	getGeorge: function() {
		var george = Meteor.users.findOne({"emails.0.address":"george.koulouris1@gmail.com"});

		if (george)
			return george._id;
	}
});

Template.header.rendered = function() { 

	var showHeader = true;
	var interval = 5000;
	var t = setTimeout(hideHeader, interval);

	function headerAnimation() {
		if (showHeader) {
			clearTimeout(t);
			var height = $(".header").height();
			var width = $(".phone-social-header").width() + 100;
			$(".header").animate({top: -height},500);
			$(".phone-social-header").animate({right: -width},500);
			showHeader = false;
		} else {
			clearTimeout(t);
			$(".header").animate({top: 0},500);
			showHeader = true;
			t = setTimeout(hideHeader, interval);
		}
	}

	function hideHeader() {
		var height = $(".header").height();
		var width = $(".phone-social-header").width() + 100;

		$(".header").animate({top: -height},500);
		$(".phone-social-header").animate({right: -width},500);

		if (!showHeader) {
			clearTimeout(t);
			showHeader = true;
		} else {
			showHeader = false;
		}
	}

	$("body").click(function(e){
		headerAnimation();
	});

	$(".header").mouseenter(function(e){
		e.preventDefault();
		clearTimeout(t);
	});

	$(".header").mouseleave(function(e){
		e.preventDefault();
		t = setTimeout(hideHeader, interval);
	});

	$(".trigger-header").mouseenter(function(e){
		e.preventDefault();
		headerAnimation();
	});

},

Template.header.events({
	'click .header': function(e) {
		$(".header").stop();
	},

	'click .navbar': function(e) {
		e.stopPropagation();
		var width = $(".phone-social-header").width();
		var right = $(".phone-social-header").css('right');

		if (right !== 0) {
			$(".phone-social-header").animate({right: 0},500);
		}
		else {
			$(".phone-social-header").animate({right: -width},500);
		}
	}
 })