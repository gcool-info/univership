Template.home.rendered = function() {
	$('.home').fullpage();

	$('.header .menu-link').click(function() {
		$.fn.fullpage.destroy('all');
	});
}