Template.peopleAdd.events({
	    'submit': function(e) {
    		e.preventDefault();
    		var person = {
    			name: $(e.target).find('[name=name]').val(),
    			public: false
    		}
    		
    		Meteor.call('addPerson', person, function(error, id) {
				if (error)
					return alert(error.reason);

				Router.go('peopleEdit', {_id: id});

			});
    }
})