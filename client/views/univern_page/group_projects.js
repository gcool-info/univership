Template.groupProjects.helpers({
	getGroupProjects: function() {
		return Projects.find({"type":"group"});
	},
	getProjectLogo: function() {
		var projectLogo = projectLogos.findOne(this.logo);

		if (projectLogo)
			return projectLogo.url();
	},
	getSkills:function() {
		var skills = Skills.find({"projectID":this._id});

		if (skills) {
			return skills;
		}
	},
	getSkillLogo:function(){
		return '/general_logos/' + this.title + '.svg';
	}
});

Template.placements.helpers({
	getPlacements: function() {
		return Projects.find({"type":"placement"});
	},
	getProjectLogo: function() {
		var projectLogo = projectLogos.findOne(this.logo);

		if (projectLogo)
			return projectLogo.url();
	},
	getSkills:function() {
		var skills = Skills.find({"projectID":this._id});

		if (skills) {
			return skills;
		}
	},
	getSkillLogo:function(){
		return '/general_logos/' + this.title + '.svg';
	}
});

Template.individualProjects.helpers({
	individualProjects: function() {
		return Projects.find({"type":"individual"});
	},
	getProjectLogo: function() {
		var projectLogo = projectLogos.findOne(this.logo);

		if (projectLogo)
			return projectLogo.url();
	},
	getSkills:function() {
		var skills = Skills.find({"projectID":this._id});

		if (skills) {
			return skills;
		}
	},
	getSkillLogo:function(){
		return '/general_logos/' + this.title + '.svg';
	}
});

