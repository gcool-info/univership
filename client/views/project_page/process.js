Template.projectProcess.helpers({
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

	getProcesses: function() {
		return Processes.find();
	},

	getTitle: function() {
		Session.set("updated", new Date());
		return this.title;
	},

	getBody: function() {
		Session.set("updated", new Date());
		return this.body;
	},

	restartFullPageJS: function() {
		
		$.fn.fullpage.destroy('all');
		$('.project-page').fullpage();

		return Session.get('updated');
	},
	hasLink:function(type) {
		switch (type) {
			case 'file':
				if (this.files.file !== '')
					return true;
			break;
			case 'folder':
				if (this.files.folder !== '')
					return true;
			break;
			case 'video':
				if (this.files.video !== '')
					return true;
			break;
			case 'github':
				if (this.files.github !== '')
					return true;
			break;
			case 'instructables':
				if (this.files.instructables !== '')
					return true;
			break;
		}
	},
	getLink:function(type) {
		Session.set("updated", new Date());
		switch (type) {
			case 'file':
				//return projectFiles.findOne({_id: this.files.file}).url();
			break;
			case 'folder':
				return this.files.folder;
			break;
			case 'video':
				return this.files.video;
			break;
			case 'github':
				return this.files.github;
			break;
			case 'instructables':
				return this.files.instructables;
			break;
		}
	},

});

