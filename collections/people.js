People = new Meteor.Collection('people');

People.allow({
	update: function(userId, doc) {
		if (userId == doc.univernID)
			return true;
	}
});

Meteor.methods({
  	addPerson: function(personAttributes) {
      var user = Meteor.user();

        if (!user)
          throw new Meteor.Error(401, "You need to be a univern to add a project");

      	var person = _.extend(_.pick(personAttributes, 'name'), {
			univernID: user._id,
			created: new Date().getTime(),
			public: true
		});

      	var personId = People.insert(person);

		return personId;
	},
	updatePerson: function(personAttributes) {
      var user = Meteor.user();

        if (!user)
          throw new Meteor.Error(401, "You need to be a univern to add a project");

      	if (user._id !== personAttributes.univernID)
          throw new Meteor.Error(401, "Bad Univern! This is not your project!");

   
      	var person = _.extend(_.pick(personAttributes, 'name', 'proffesion', 'body', 'contact'), {
		});

		People.update({_id: personAttributes.id}, {$set: person});
	},
	setPersonPhoto: function(personAttributes) {
      var user = Meteor.user(),
        previousPhoto = ProfilePics.findOne(personAttributes.previousPhoto);

        if (!user)
          throw new Meteor.Error(401, "You need to be a univern to add a project");

      	if (user._id !== personAttributes.univernID)
          throw new Meteor.Error(401, "Bad Univern! This is not your project!");

   
   		if (previousPhoto) 
   			ProfilePics.remove(previousPhoto._id)

   		People.update(personAttributes.id, {$set : {"photo" : personAttributes.newphoto} });

	},
})