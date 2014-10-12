Template.univernPage.rendered = function() { 
	$('.univernPage').fullpage({
		anchors: ['introduction', 'skills', 'people', 'group-projects', 'placements', 'individual-projects', 'work'],
		animateAnchor: true
	});
}