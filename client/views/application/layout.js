Template.layout.events({
	'click .section': function() {
		$(".trigger-header").animate({'left' : "105%"});
		$(".header").animate({'left' : -$(".header").width() });
	}
})