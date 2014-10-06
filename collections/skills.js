Skills = new Meteor.Collection('skills');


Meteor.methods({
  setSkill: function(skill) {
      var user = Meteor.user(),
      	skillId = Skills.findOne({"projectID":skill.projectID, "title":skill.title})

        if (!user)
          throw new Meteor.Error(401, "You need to be a univern to edit this project");

        if (user._id !== skill.univernID)
          throw new Meteor.Error(401, "Bad Univern! This is not your project!");

      	if (skillId) 
        	Skills.remove(skillId);
        
        if (skill.percentage > 0)
        	Skills.insert( skill );
  },
});