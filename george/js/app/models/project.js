define(function (require) {

    return Backbone.Model.extend({
		default: {
			"id"				: null,
			"url"				: null,
			"type"				: null,
			"title" 			: null,
			"abstract" 			: null,
			"logo"				: null,
			"photo"				: null,
			"skills"			: [],
			"video"				: null,
			"folderLink"		: null,
			"githubLink"		: null,
			"external link"		: null,
			"instructablesLink" : null,
			"blogContent"		: null,
			"createdDate"		: null
		}
    });
});