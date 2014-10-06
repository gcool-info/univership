Template.processEdit.rendered = function() {
	getHighestRank = function(projectID) {
		return Processes.find({"projectID": projectID}).count();
	}
}

Template.processEdit.helpers({
	processes: function() {
		return Processes.find({"projectID": this._id}, {sort: {rank: 1}});
	},
	projectName: function() {
		return this.title;
	}
})

Template.processEdit.events({
	'click #add-process': function(e) {
		e.preventDefault();

		var step = {
			projectID: this._id,
			rank: getHighestRank(this._id) + 1,
		}

		Meteor.call('addStep', step, function(error, id) {
			if (error)
				return alert(error.reason);
		});
	},

	'click .delete-process': function(e) {
		e.preventDefault();

		var step = {
			id: this._id,
			projectID: this.projectID,
		} 

		Meteor.call('deleteStep', step, function(error, id) {
			if (error)
				return alert(error.reason);
		});
	},
	'click #save': function(e) {
		for (var rank = 1; rank <= getHighestRank(this._id); rank++) {

			var processStep = {
				id: $(".form-group").attr('id'), 
				projectID: this._id,
				title: $("#processes-form").find('[name=title-'+ rank +']').val(), 
				body: $("#processes-form").find('[name=body-'+ rank +']').val(), 
				rank: rank,
				files: {
					file: 'inabit',
					folder: $("#processes-form").find('[name=folder-'+ rank +']').val(), 
					video: $("#processes-form").find('[name=video-'+ rank +']').val(), 
					github: $("#processes-form").find('[name=github-'+ rank +']').val(), 
					instructables: $("#processes-form").find('[name=instructables-'+ rank +']').val()
				}
			}
			Meteor.call('saveStep', processStep, function(error, id) {
				if (error)
					return alert(error.reason);
			});

			Router.go('project', {_id: this._id});
		}
	}
})