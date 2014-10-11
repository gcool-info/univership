(function(){// Fixture data
if (Projects.find().count() === 0) {

	/* The user data */
    var georgeID = Accounts.createUser({
        username: 'gcool',
        email: 'g_koul@hotmail.com',
        password: 'CoolOuris=+',
        profile : { name : "George Koulouris" },
    });
	
	var boxduinoID = Projects.insert ({
		univernID: georgeID,
		type: 'group',
		title: 'boxduino',
		body: 'A project to develop easy, fun, computing-based science sessions for schools... all in a box!',
		logo: '/project_logos/boxduino.svg',
		introVideo: 'https://www.youtube.com/watch?v=Xmsjrt_RjqE',
		finalVideo: 'https://www.youtube.com/watch?v=QQGEpKeR1Uc',  
	});

	Processes.insert({
		projectID: boxduinoID,
		title: 'brainstorming #1',
		body: 'I sat down with Sam to define the need in UK\'s science classes.',
		files: {
			file: '/project_logos/boxduino/1st_brainstorm.pdf',
			logo: '/general_logos/file.svg'
		},
		rank: 1
	});

	var samID = People.insert({
		projectID: boxduinoID,
		name: 'Sam Cryer',
		proffesion: 'teacher', 
		body: 'Sam is a PhD chemistry candidate at Imperial College London. He also teaches science in secondary school.<br/><br/>He really helped me simplify complex concepts so that even a 10-year-old could understand them.<br/><br/>Sam likes teaching & researching molecular chemistry.',
		profile_pic: '/people_photots/sam_cryer.png',
		contact: {
			email: 'g_koul@hotmail.com',
			facebook: 'https://www.facebook.com/koulouris2',
			twitter: 'https://twitter.com/GCoolInfo'
		}
	});

	Skills.insert({
		univernID: georgeID,
		projectID: boxduinoID,
		peopleID: samID,
		title: 'physical-object-design',
		body: 'I am learning how to create a tool box using a laser cutter.',
		logo: '/general_logos/physical_object_design.svg',
		percentage: 0.1
	})
}

})();
