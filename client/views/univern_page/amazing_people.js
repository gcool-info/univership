Template.amazingPeople.helpers({
	person : function() {
		
		var person = People.find();

		if (person.count() > 0) {
			return person;
		}
	},
	setBackground : function() {

		var amazingPhoto = ProfilePics.findOne(this.photo);

		if (amazingPhoto)
			$('.person-' + this._id).css('background', 'url(' + amazingPhoto.url() + ') no-repeat center center fixed');
	},
	updateFullPageJS : function() {
		$.fn.fullpage.destroy('all');
		$.fn.fullpage.reBuild();
		$('.univernPage').fullpage();
	} 
})

Template.amazingPeople.events({

})