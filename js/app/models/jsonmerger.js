define(function (require) {

    return Backbone.Model.extend({

    	initialize: function (callback) {

    		var directory = 'assets/projectpages/';
    		var projectFiles = [
				'museomixplatform',
				'25sketches',
				'multisidedplatforms',
				'agrockathon',
				'hackerinresidence',
				'jsonsilo',
				'meteor',
				'designofeverydaythings',
				'euiot',
				'opensesame',
				'raspdio',
				'cadand3dprinting',
				'qtcpills',
				'eventcommunication',
				'blender',
				'ucdexploration',
				'semanticweb',
				'combatcontrol',
				'emotionaldesign',
				'hardwarestartup',
				'offlineandonline',
				'customersupport'
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