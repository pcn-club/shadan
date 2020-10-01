//pagetop
$(function() {
    var pageTop = $('.pagetop p');
    pageTop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }
    });
    pageTop.click(function () {
        $('body, html').animate({scrollTop:0}, 500, 'swing');
        return false;
    });
});

//scroll
$(function(){
	$('a[href^="#"]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		if (target.length) {
			var position = target.offset().top;
			$("html, body").animate({scrollTop:position}, speed, "swing");
		}
		return false;
	});
});
