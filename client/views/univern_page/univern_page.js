Template.univernPage.rendered = function() { 
	$('.univernPage').fullpage({
		anchors: ['introduction', 'skills', 'people', 'group-projects', 'placements', 'individual-projects', 'work'],
		animateAnchor: false
	});

	$('#introduction').click(function(e) {
		$.fn.fullpage.moveTo('introduction', 0);
	});
	$('#skills').click(function(e) {
		$.fn.fullpage.moveTo('skills', 0);
	});
	$('#people').click(function(e) {
		$.fn.fullpage.moveTo('people', 0);
	});
	$('#group-projects').click(function(e) {
		$.fn.fullpage.moveTo('group-projects', 0);
	});
	$('#placements').click(function(e) {
		$.fn.fullpage.moveTo('placements', 0);
	});
	$('#individual-projects').click(function(e) {
		$.fn.fullpage.moveTo('individual-projects', 0);
	});
	$('#work').click(function(e) {
		$.fn.fullpage.moveTo('work', 0);
	});
}