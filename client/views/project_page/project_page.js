Template.projectPage.rendered = function() {

	$('.project-page').fullpage();
}

Template.projectPage.events({
	'click .actionBtn':function() {
		console.log('cool');
		/* We have to distroy fullPageJS to reconstruct it in another page */
		$.fn.fullpage.destroy('all');
	}
})