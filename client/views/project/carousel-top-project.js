Template.carouselTopProject.rendered = function() {
},

Template.carouselTopProject.helpers({
	getMedia: function() {
		var media = this.media;
		var counter = 0;

		media.forEach(function(medium) {
			medium.number = counter++;
		});

		return this.media;
	},
});

Template.carouselTopProject.events({
	'click .carousel-selector': function(e) {

		var parent = $(e.target).parent();

		var id_selector = parent.attr("id");
		var id = id_selector.substr(id_selector.length -1);
		id = parseInt(id);
		$('#project-carousel').carousel(id);
		parent.removeClass('selected');
		parent.addClass('selected');
	},
});

