$('.reviews--js').on('click', function (e) {
	e.preventDefault();
	$("body").addClass("lock");
	$(".site").addClass("lock-window");
	$(".reviews-modal").addClass("visible");
	setTimeout(function(){
		$(".modal__wrap").addClass("visible");
	}, 300);
});

$('.privacy--js').on('click', function (e) {
	e.preventDefault();
	$("body").addClass("lock");
	$(".site").addClass("lock-window");
	$(".privacy-policy").addClass("visible");
	setTimeout(function(){
		$(".modal__wrap").addClass("visible");
	}, 300);
});

$('.modal__close').on('click', function (event) {
	event.preventDefault();
	$(".modal__wrap").removeClass("visible");
	setTimeout(function(){
		$("body").removeClass("lock");
		$(".site").removeClass("lock-window");
		$(".modal").removeClass("visible");
	}, 300);
});