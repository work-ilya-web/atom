$('.partners__slick').slick({
	slidesToShow: 6,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: false,
	autoplaySpeed: 2000,
	responsive: [
	  {
		breakpoint: 1335,
		settings: {
		  slidesToShow: 5,
		  slidesToScroll: 1,
		}
	  },
	  {
		breakpoint: 1010,
		settings: {
		  slidesToShow: 4,
		  slidesToScroll: 1,
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1,
		}
	  }
	]
});