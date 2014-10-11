Template.layout.events({
	'click .bckg-full': function() {
		$(".header").animate({'left' : -$(".header").width() });
	}
})