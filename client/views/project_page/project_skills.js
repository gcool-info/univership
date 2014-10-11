Template.projectSkills.rendered = function() {
	
	/* For some reason events don't fire when I put them in the .events section */
	$(".skill").click( function(e) { 
		e.preventDefault();
		var blockNum = $(e.target).parent().attr('id').split('-')[1];
		var blockPosition = $(e.target).parent().position();

		for (var i = 1; i <= 6; i++) {
			$("#skill-" + i + "-text").css('display', 'none');
		}

		$("#skill-" + blockNum + "-text").css('display', 'block');

		$(".explanation-block").animate({left:blockPosition.left}, 400, 
			function() {
				$(".explanation-block").animate({top:blockPosition.top}, 400)
			}
		);
	});
},

Template.projectSkills.helpers({
	getSkills: function() {
		return Skills.find();
	},
	getTitle: function(sectionTitle) {
		if (this.title == sectionTitle)
			return true;
	},
	getPercentage: function() {
		return Math.round(this.percentage*100) + '%';
	}
});

Template.projectSkills.events({

})