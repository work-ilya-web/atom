$('.reviews--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.open({
		loop: false,
		src: '#reviews-modal',
		baseClass: 'dark-fancybox',
		touch: false,
	});
});