Template.basicUserInfo.rendered = {
	
},
Template.basicUserInfo.helpers({
	getName: function() {

		var username = this.profile.name;

		return (username == '' ? 'your name' : username);
	},

	getSurname: function() {
		var surname = this.profile.surname;

		return (surname == '' ? 'your surname' : surname);
	},

	getBaseline: function() {
		var baseline = this.profile.baseline;

		return (baseline == '' ? 'your slogan' : baseline);
	}

});

Template.basicUserInfo.events({
	'click #save': function() {
		var userData = {
			userID: this._id,
			name: $('#user-name').val(),
			surname: $('#user-surname').val(),
			baseline: $('#user-baseline').val()
		}

		Meteor.call('updateBasicUserInfo', userData, function(error) {
			if (!error)
				$('#basic-user-info-modal').modal('hide');
		});
	}
});