(function ($) {
	$(document).ready(function () {
		// Scroll to Top
		jQuery(".scrolltotop").click(function () {
			jQuery("html").animate({ scrollTop: "0px" }, 400);
			return false;
		});

		jQuery(window).scroll(function () {
			var upto = jQuery(window).scrollTop();
			if (upto > 500) {
				jQuery(".scrolltotop").fadeIn();
			} else {
				jQuery(".scrolltotop").fadeOut();
			}
		});

		$(".mobile-search-icon i").click(function () {
			$(".akbank-logo").toggleClass("d-none");
			$(".full-width-search .search-box").toggleClass("d-none");
			$(this).toggleClass("fa-solid, fa-xmark");
		});
	});
})(jQuery);
