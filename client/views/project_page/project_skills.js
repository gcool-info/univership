Template.projectSkills.events({

})

Template.projectSkills.helpers({
	getSkills: function() {
		return Skills.find();
	}
})