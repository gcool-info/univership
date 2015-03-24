Template.projectBlog.rendered = function() {
	$(".header").css('position', 'absolute');
	$(".header").css('height', '90vh');
	$("body").css('overflow-y', 'scroll');
	$("html").css('overflow-y', 'scroll');
}

Template.projectBlog.helpers({
	getProjectBlog: function() {
		return this.blog;
	},
})