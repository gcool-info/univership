Template.univernPage.rendered = function() { 
	$('.univernPage').fullpage();
}

Template.home.events({
	'click .actionBtn':function() {
		console.log('cool');
		/* We have to distroy fullPageJS to reconstruct it in another page */
		$.fn.fullpage.destroy('all');
	}
})