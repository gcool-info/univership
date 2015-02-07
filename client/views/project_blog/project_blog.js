Template.projectBlog.rendered = function() {
	$(".header").css('position', 'absolute');
}

Template.projectBlog.helpers({
	getProjectBlog: function() {
		return this.blog;
	},
})