Template.videoUploadUnivern.rendered = {
	
},
Template.videoUploadUnivern.helpers({

});
Template.videoUploadUnivern.events({
	'click #save': function() {
		var data = {
			userID: this._id,
			video: $('#url').val(),
		}

		Meteor.call('uploadUserVideo', data, function(error) {
			if (!error)
				$('#video-upload-modal').modal('hide');
		});   
	},

	'keyup #url':function() {

		var url = $('#url').val();

		/* Regular expression to get the video key (only youtube is supported for now) */
		var videoRegEx = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;

		var videoKey = url.match(videoRegEx);

		if (!videoKey)
			$('#save').prop('disabled', true);
		else 
			$('#save').removeAttr('disabled');
	}
});