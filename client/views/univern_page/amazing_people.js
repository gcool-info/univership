Template.amazingPeople.rendered= function() {
	$('.header .menu-link').click(function(e) {
			$.fn.fullpage.destroy('all');
	});
}

Template.amazingPeople.helpers({
	person : function() {
		var person = People.find();

		if (person.count() > 0) {
			return person;
		}
	},
	setBackground : function() {
		var amazingPhoto = ProfilePics.findOne(this.photo);

		if (amazingPhoto)
			$('.person-' + this._id).css('background', 'url(' + amazingPhoto.url() + ') no-repeat center center fixed');
	},
	getProjects:function() {
		return this.projectID;
	},
	getProjectLogo: function() {
		var project = Projects.findOne({_id:String(this)});

		if (project) {
			var logo = projectLogos.findOne(project.logo);

			if (logo)
				return logo.url();
		}
	},
	getSkills:function(){
		var skills = Skills.find({"projectID":String(this)});
		if (skills) {
			return skills;
		}
	},
	getSkillLogo:function() {
		return '/general_logos/' + this.title + '.svg';
	},
	notAdded:function() {
		
		return true;
	},
	restartFullPageJS:function() {
		/* Here, we restart the plugin FullPageJs because elements have been added to the dom reactively*/
		$.fn.fullpage.destroy('all');
		$('.univernPage').fullpage();
	}
})

Template.amazingPeople.events({

})