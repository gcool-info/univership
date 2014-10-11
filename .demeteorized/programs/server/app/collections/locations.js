(function(){Locations = new Meteor.Collection('locations');

Meteor.methods({
  addLocation: function(locationAttributes) {
      var user = Meteor.user();

        if (!user)
          throw new Meteor.Error(401, "You need to be a univern to edit this project");


      	var location = _.extend(_.pick(locationAttributes, 'city', 'country'), {
			univernID: user._id,
			created: new Date().getTime()
		});
        

        Locations.insert( location );
  },
});

})();
