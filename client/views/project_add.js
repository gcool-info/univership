Template.projectAdd.events({
	    'submit': function(e) {
    		e.preventDefault();
    		var project = {
    			title: $(e.target).find('[name=title]').val(),
    			public: false
    		}
    		
    		Meteor.call('createProject', project, function(error, id) {
				if (error)
					return alert(error.reason);

				Router.go('projectEdit', {_id: id});

			});
    }
})