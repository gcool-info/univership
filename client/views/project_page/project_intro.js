Template.projectIntro.rendered = function() { 


	$('.play').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
}


Template.projectIntro.helpers({
	getLogo:function () {
		var logo = projectLogos.findOne(this.logo);

		if (logo)
			return logo.url();
	},
	setBackground : function() {
		var amazingPhoto = projectLogos.findOne(this.image);

		if (amazingPhoto) 
			return 'background: url(' + amazingPhoto.url() + ') no-repeat center center fixed; background-size: cover;';
	},
})