Template.projectPage.rendered = function() {
	$('.project-page').fullpage();
}

Template.projectPage.helpers({
	setBackground : function() {
		var amazingPhoto = projectLogos.findOne(this.image);

		if (amazingPhoto) 
			return 'background: url(' + amazingPhoto.url() + ') no-repeat center center fixed; background-size: cover;';
	},
	getProjectType: function() {
		switch (this.type) {
			case 'group':
				return 'green';
				break;
			case 'placement':
				return 'blue';
				break;
			case 'individual':
				return 'red';
				break;	
		}
	},
})