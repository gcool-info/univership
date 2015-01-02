/* Add 4 Skills */
if (Skill.find().count() == 0) {

	var designID = Skill.insert({
		title: "Design",
		description: "User-centered design, physical-object design &  graphic design",
		photo: {
		    id: "",
		    url: ""
		},
		created: "", 
		score: "0",
		author: ""
	});

	var entrepreneurshipID = Skill.insert({
		title: "Entrepreneurship",
		description: "Successfully launching & running a tech startup",
		photo: {
		    id: "",
		    url: ""
		},
		created: "", 
		score: "0",
		author: ""
	});

	var communicationID = Skill.insert({
		title: "Communication",
		description: "Using social media to create a community",
		photo: {
		    id: "",
		    url: ""
		},
		created: "", 
		score: "0",
		author: ""
	});

	var codingID = Skill.insert({
		title: "Coding",
		description: "Creating smart devices connected to the internet",
		photo: {
		    id: "",
		    url: ""
		},
		created: "", 
		score: "0",
		author: ""
	});
}

/* Add the users */
if (Meteor.users.find().count() == 0) {

	/************************ Univern **************************/
	var georgeID = Accounts.createUser({
        username: 'gcool',
        email: 'george.koulouris1@gmail.com',
        password: 'changethis',
        profile : { 
            social: {
            	facebook: "https://www.facebook.com/koulouris2",
		        twitter: "https://twitter.com/GCoolInfo",
		        linkedIn: "https://www.linkedin.com/profile/view?id=378280275&trk=hp-identity-photo",
		        timetable: "https://www.google.com/calendar/embed?src=s4upfalmc1b6qdg5r08b9d893g%40group.calendar.google.com&ctz=Europe/Paris"
            },
            photo: {
            	id: "",
            	url: "",
            	thumb: ""
            },
            name: "George",
            surname: "Koulouris",
            skills: [designID, entrepreneurshipID, communicationID, codingID],
            type: "univern",
            baseline: "Working 24/7 to learn & make",
            video: "https://www.youtube.com/watch?v=bgW5Snd-CFM",
            description: ""
        }
    });

    /* Update the author of the skills */
    Skill.update({"_id" : designID}, {$set: {"author":georgeID}});
    Skill.update({"_id" : entrepreneurshipID}, {$set: {"author":georgeID}});
    Skill.update({"_id" : communicationID}, {$set: {"author":georgeID}});
    Skill.update({"_id" : codingID}, {$set: {"author":georgeID}});

	/************************ Mentor **************************/
	var LarissaID = Accounts.createUser({
        username: 'larissa',
        email: 'larissa@gmail.com',
        password: 'changethis',
        profile : { 
            social: {
            	facebook: "https://www.facebook.com/larissa.kunsteltabet?ref=ts&fref=ts",
		        twitter: "",
		        linkedIn: "https://www.linkedin.com/profile/view?id=378280275&trk=hp-identity-photo",
		        timetable: ""
            },
            photo: {
            	id: "",
            	url: "",
            	thumb: ""
            },
            name: "Larissa",
            surname: "Kunstel-Tabet",
            skills: [],
            type: "mentor",
            baseline: "Designer & Engineer",
            video: "",
            description: "<p>Larissa is a recent graduate from the RCA & Imperial College London and she loves to...</p>",
        }
    });

	/************************ Collaborator **************************/
	var sarihaID = Accounts.createUser({
        username: 'sarisha',
        email: 'sariha@gmail.com',
        password: 'changethis',
        profile : { 
            social: {
            	facebook: "",
		        twitter: "https://twitter.com/sariha_alive",
		        linkedIn: "",
		        timetable: ""
            },
            photo: {
            	id: "",
            	url: "",
            	thumb: ""
            },
            name: "sariha",
            surname: "Chabert",
            skills: [],
            type: "collaborator",
            baseline: "Self-taught coder & curious",
            video: "",
            description: '<p>Sariha is more than just a web developer. He is passionate about a great number of things, one of which is "re-mixing" & "hacking" museums.</p><p>This is how we met; at Museomix, in Montreal.</p><p>During our work together we set up a web server to host meteor applications. And even though I believe wordpress is dying, he managed to slightly shift my belief...!</p>',
        }
    });
	
}

/* Add 2 locations */
if (Locations.find().count() == 0) {

    Locations.insert({
        latitude: '2.3508',
        longtitude: '48.8567',
        city: 'Paris',
        country: 'France',
        dates: {
            start: 'Fri Dec 26 2014 16:48:53 GMT+0100 (CET)', 
            end: 'Fri Jan 02 2015 16:48:53 GMT+0100 (CET)',
        },
        owner: 'FKKnMctNRaxxohC6p' 
    });

    Locations.insert({
        latitude: '74.0059',
        longtitude: '40.7127',
        city: 'New York',
        country: 'United States',
        dates: {
            start: 'Mon Nov 03 2014 16:48:02 GMT+0100 (CET)', 
            end: 'Tue Nov 03 2014 16:18:53 GMT+0100 (CET)',
        },
        owner: 'FKKnMctNRaxxohC6p' 
    });
}

/* Add 1 project */
if (Project.find().count() == 0) {

    Project.insert({
        title: 'Multisided Platforms',
        shortDescr: 'I tried to formally understand how platforms such as Facebook, Google & Amazon gain money.',
        photos: [],
        mainPhoto: '',
        lesson: {
            id: '',
            shortDescr: '',
        },
        type: 'individual',
        dates: {
            start: 'Mon Nov 03 2014 16:48:02 GMT+0100 (CET)', 
            end: 'Mon Nov 10 2014 16:18:53 GMT+0100 (CET)',
        },
        skills: ['EY9y8s6D5cDxPsq59'],
        relatedPosts: [],
        people: [],
        owner: 'FKKnMctNRaxxohC6p',
        location: {
             id: 'FKKnMctNRaxxohC6p',
             city: 'New York',
             country: 'United States'
        }
    })	
}

/* Add 2 Posts */
if (Post.find().count() == 0) {
	
}

