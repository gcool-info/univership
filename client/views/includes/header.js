Template.header.helpers({
	george: function() {
		return Meteor.users.findOne();
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
			var width = $(".phone-social-header").width();
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
		var width = $(".phone-social-header").width();

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
		e.stopPropagation();
		headerAnimation();
	});

	$(".header").mouseenter(function(e){
		e.stopPropagation();
		clearTimeout(t);
	});

	$(".header").mouseleave(function(e){
		e.stopPropagation();
		t = setTimeout(hideHeader, interval);
	});

	$(".trigger-header").mouseenter(function(e){
		e.stopPropagation();
		headerAnimation();
	});
},

Template.header.events({
	'click .header': function(e) {
		e.stopPropagation();
		$(".header").stop();
	},

	'click .navbar': function(e) {
		e.stopPropagation();
		var width = $(".phone-social-header").width();
		var right = $(".phone-social-header").css('right');

		if (right !== 0)
			$(".phone-social-header").animate({right: 0},500);
		else
			$(".phone-social-header").animate({right: -width},500);
	}
 })