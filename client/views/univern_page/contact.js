Template.contact.helpers({
	getLocation: function () {
		var location = Locations.findOne();

		if (location)
			return location.city + ', ' + location.country;
	}
})