Template.univernSkills.rendered = function() {
	

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

Template.univernSkills.helpers({
	getSkillPercentage:function(skillName) {

		var skillPerc = _.reduce(_.map(Skills.find({title:skillName}).fetch(), 
            function(doc) {
              //map
              return doc.percentage
            }), 
            function(memo, num){ 
              //reduce
              return Number(memo) + Number(num);
            }, 0);

		/* 	Assuming: 
				45 Individual Projects
				4 Group Projects
				8 Placements
				------
				Total: 57
			
			If I pass the same number of time on each project, then to arrive at 100% for each skill I need:
				(1/6 skills) * (57 projects)			
		*/
		var totalSkillPerc = (1/6) * 57;

		return Math.round(skillPerc*100/totalSkillPerc) + '%';
	}
});
