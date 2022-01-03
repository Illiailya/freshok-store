$(function () {

	$(function () {

		$('.top-slider__inner').slick({
			dots: false

		});

	});
	var containerEL1 = document.querySelector('[data-ref="container-1"]');
	var containerEL2 = document.querySelector('[data-ref="container-2"]');

	var config = {
		controls: {
			scope: 'local'
		}
	};

	$('.brands__inner').slick({
		dots: false,
		arrows: false,
		slidesToShow: 6,
		swipeToSlide: true
	});

	var mixer1 = mixitup(containerEL1, config);
	var mixer2 = mixitup(containerEL2, config);
});