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

		var process = {
			projectID: this._id,
			rank: getHighestRank(this._id) + 1,
		}

		Meteor.call('addProcess', process, function(error, id) {
			if (error)
				return alert(error.reason);
		});
	}
})