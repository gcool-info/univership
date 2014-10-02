Template.header.rendered = function() { 

	var showHeader = true;
	var t = setTimeout(hideHeader, 5000);

	function hideHeader() {
		var height = $(".header").height();
		$(".header").animate({top: -height},500);
		if (!showHeader) {
			clearTimeout(t);
			showHeader = true;
		} else {
			showHeader = false;
		}
	}

	$("body").click(function(){
		if (showHeader) {
			clearTimeout(t);
			var height = $(".header").height();
			$(".header").animate({top: -height},500);
			showHeader = false;
		} else {
			clearTimeout(t);
			$(".header").animate({top: 0},500);
			showHeader = true;
			t = setTimeout(hideHeader, 5000);
		}
	});
}