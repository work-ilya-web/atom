function animateFrom(elem, direction, delay, scale) {
	direction = direction || 1;
	var x = 0,
		y = direction * 100;
	if(elem.classList.contains("container")) {
	  x = -100;
	  y = 0;
	}
	elem.style.transform = "translate(" + x + "px, " + y + "px)";
	elem.style.opacity = "0";
	gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
	  duration: 1.5,
	  delay: delay,
	  scale: scale,
	  x: 0,
	  y: 0,
	  start: "bottom 100%",
	  autoAlpha: 1,
	  ease: "expo",
	  overwrite: "auto"
	});
  }

  function hide(elem) {
	gsap.set(elem, {autoAlpha: 0});
  }

  document.addEventListener("DOMContentLoaded", function() {
	gsap.registerPlugin(ScrollTrigger);

	  gsap.utils.toArray("[data-delay]").forEach(function(elem) {
		hide(elem); // assure that the element is hidden when scrolled into view
		var delay = $(elem).data("delay");
		ScrollTrigger.create({
		  trigger: elem,
		  onEnter: function() { animateFrom(elem, 1, delay, 1) },
		  onEnterBack: function() { animateFrom(elem, 1, delay, 1) },
		  onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
		});
	  });
  });

  setTimeout(function(){
	gsap.from(".left", {
		duration: .5, 
		delay: .5,
		x: "-30%",
		y: 0,
		opacity: 0,
	});
	gsap.from(".right", {
		duration: .6, 
		delay: .7,
		x: "30%",
		y: 0,
		opacity: 0,
	});
}, 200);

