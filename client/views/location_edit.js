Template.locationEdit.events({
	'click #save': function(e) {
		var location = {
    		country: $(".form").find('[name=country]').val(), 
    		city: $(".form").find('[name=city]').val(), 
    	}

    	Meteor.call('addLocation', location, function(error) {
			if (error)
				return alert(error.reason);
		});
	}
})