define(function (require) {

    return Backbone.Model.extend({

    	initialize: function (callback) {

    		var directory = 'assets/projectpages/';
    		var projectFiles = [
				'museomixplatform',
				'25sketches'
			];
			var requests = [];

			for (var i = 0; i < projectFiles.length; i++) {
				requests.push( $.getJSON(directory + projectFiles[i] + '.json') );
			}

			$.when.apply($, requests)
				.then(function() {
			    	return $.map(arguments, function(v) {
			      		return v[0];
			    	});
			  	})
			  	.done(
			  		function(projects) {
  						callback(projects);
					}
				);
    	}
    });
});