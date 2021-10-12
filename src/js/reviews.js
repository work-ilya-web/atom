$('.reviews__slick').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	infinite: true,
	speed: 1000,
	variableWidth: true,
	autoplay: false,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: false,
			}
		}
	]
});
$('.reviews .arrow.arrow--prew').on("click", function (event) {
	$(this).parents('.reviews').find('.reviews__slick').slick('slickPrev');
});
$('.reviews .arrow.arrow--next').on("click", function (event) {
	$(this).parents('.reviews').find('.reviews__slick').slick('slickNext');
});