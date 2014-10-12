Template.peopleEdit.rendered = function() {

	$(".header").css('display', 'none');
}


Template.peopleEdit.helpers ({
	personName: function() {
		return this.name;
	},
	personProffesion: function() {
		return this.proffesion;
	},
	personDescription: function() {
		return this.body;
	},
	personEmail: function() {
		if (this.contact)
			return this.contact.email;
	},
	personTwitter: function() {
		if (this.contact)
			return this.contact.twitter;
	},
	personFacebook: function() {
		if (this.contact)
			return this.contact.facebook;
	},
	getProjects: function() {
		return this.projectID;
	},
	getID: function() {
		return this._id;
	}, 
	getPhoto: function() {
		var photo = ProfilePics.findOne(this.photo);

		if (photo) 
			return photo.url();
	}
})

Template.peopleEdit.events ({

	'click .delete':function(e) {
		People.update(
			{_id: $(".form").attr('id')}, 
			{ $pull: { "projectID": e.target.id } 
		});
	},
	'click #save':function(){
		var person = {
			id: this._id,
			univernID: this.univernID,
			name: $(".form").find('[name=name]').val(),
			proffesion: $(".form").find('[name=proffesion]').val(),
			body: $(".form").find('[name=body]').val(),
			contact: {
				email: $(".form").find('[name=email]').val(),
				twitter: $(".form").find('[name=twitter]').val(),
				facebook: $(".form").find('[name=facebook]').val(),
			}
		}

		Meteor.call('updatePerson', person, function(error, id) {
			if (error)
				return alert(error.reason);
		});
	},
	'change #add-photo': function(e) {
		e.preventDefault();
		
		var handle = ProfilePics.insert(e.target.files[0], function (err, fileObj) {});

		console.log(e.target.files[0]);
		var person = {
			id: this._id,
			previousPhoto: this.photo,
			univernID: this.univernID,
			newphoto: handle._id
		}

		Meteor.call('setPersonPhoto', person, function(error, id) {
			if (error)
				return alert(error.reason);
		});
    }, 
})

Template.peopleEdit.settings = function() {
	var personID = this._id;
	return {
	position: "bottom",
	limit: 5,
	rules: [
	 {
	   collection: Projects,
	   field: "title",
	   template: Template.projectTitle,
	   callback: function(doc) {
		    People.update(
		    	{_id: personID},
		    	{ $push: { "projectID": doc._id } 
		    });
	    	$("#projectAdd").val('');
	   }
	 }
	]
	}
};