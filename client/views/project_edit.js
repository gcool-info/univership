Template.projectEdit.rendered = function() {

	exportSkill = function(skillName,  target, projectID, univernID) {
		
		if (target.find('[name='+skillName+'-percentage]').val()) {

			var skill = {
				projectID: projectID,
				univernID: univernID,
				body: target.find('[name='+skillName+'-body]').val(),
				percentage: target.find('[name='+skillName+'-percentage]').val(),
				title: skillName
			}

			return skill;
		}
	}
},

Template.projectEdit.helpers({
	getProjectName: function() {

		return this.title;
	},
	getProjectBody: function() {
		return this.body;
	},
	getLogo: function() {
		var projectLogo = projectLogos.findOne(this.logo);

        if (projectLogo !== undefined)
          return projectLogo.url();
        else
            return '';
	},
	getIntroVideo: function() {
		return this.introVideo;
	},
	getSkill: function(skillName, resultType) {
		switch(skillName) {
			case 'user-centered-design':
				var skill = Skills.findOne({"projectID":this._id, 'title': skillName});
				break;
			case 'physical-object-design':
				var skill = Skills.findOne({"projectID":this._id, 'title': skillName});
				break;
			case 'entrepreneurship':
				var skill = Skills.findOne({"projectID":this._id, 'title': skillName});
				break;
			case 'coding':
				var skill = Skills.findOne({"projectID":this._id, 'title': skillName});
				break;
			case 'graphic-design':
				var skill = Skills.findOne({"projectID":this._id, 'title': skillName});
				break;
			case 'communication':
				var skill = Skills.findOne({"projectID":this._id, 'title': skillName});
				break;
		}

		if (skill) {
			if (resultType  == 'body')
				return skill.body;
			else
				return skill.percentage;
		}
	},
	getProjectType: function(type) {

		if (type === this.type)
			return 'selected';
	},
});

Template.projectEdit.events({
	'change #add-logo': function(e) {
		e.preventDefault();

		var project = {
			id: this._id,
			previousLogo: this.logo,
			owner: this.univernID
		}

		var handle = projectLogos.insert(e.target.files[0], function (err, fileObj) {});

		project.handleID = handle._id;

		Meteor.call('setProjectLogo', project, function(error, id) {
			if (error)
				return alert(error.reason);
		});
    }, 
    'submit': function(e) {
    	e.preventDefault();

    	var projectProperties = {
    		title: $(e.target).find('[name=title]').val(), 
    		body: $(e.target).find('[name=project-body]').val(), 
    		type: $(e.target).find('[id=project-type]').val(),
    		introVideo: $(e.target).find('[name=intro-video]').val(),
    	}

    	Projects.update(this._id, {$set: projectProperties}, function(error) { 
    		if (error) {
            // display the error to the user
            	alert(error.reason); 
            } 
        }); 

    	var skillArray = [
    		exportSkill('user-centered-design', $(e.target), this._id, this.univernID),
    		exportSkill('physical-object-design', $(e.target), this._id, this.univernID),
    		exportSkill('entrepreneurship', $(e.target), this._id, this.univernID),
    		exportSkill('coding', $(e.target), this._id, this.univernID),
    		exportSkill('graphic-design', $(e.target), this._id, this.univernID),
    		exportSkill('communication', $(e.target), this._id, this.univernID)
    	]

    	for (var i = 0; i < skillArray.length; i ++) {
    		if (skillArray[i]) {
    			Meteor.call('setSkill', skillArray[i], function(error, id) {
					if (error)
						return alert(error.reason);
				});
    		}
    	}
    }
})