Template.univernPage.rendered = function() { 
	$('.univernPage').fullpage();

	/* We have to distroy fullPageJS to reconstruct it in another page */
	$('.header .menu-link').click(function(e) {
		$.fn.fullpage.destroy('all');
		console.log('un');
	});
}