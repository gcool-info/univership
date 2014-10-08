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
			return 'background: url(' + amazingPhoto.url() + ') no-repeat center center fixed; background-size: cover;';
	},
	getProjects:function() {
		return this.projectID;
	},
	getProjectLogo: function() {
		var project = Projects.findOne({_id:String(this)});

		if (project) {
			var logo = projectLogos.findOne(project.logo);

			if (logo) {
				Session.set("updated", new Date());
				return logo.url();
			}
		}
	},
	getSkills:function(){
		var skills = Skills.find({"projectID":String(this)});
		if (skills) {
			Session.set("updated", new Date());
			return skills;
		}
	},
	getSkillLogo:function() {
		return '/general_logos/' + this.title + '.svg';
	},
	notAdded:function() {
		
		return true;
	},
	restartFullPageJS: function() {
		$.fn.fullpage.destroy('all');
		$('.univernPage').fullpage();

		return Session.get('updated');
	}
});