$(document).ready(function () {

	// menu (toggleMenu)
	$('.dropdown').click(function (event) {
		/* Act on the event */
		event.preventDefault();
		$('.dropdown').toggleClass('active');
		$('.dropdown-open').slideToggle();
	});

	// Nivo-slider
	$(window).on('load', function () {
		$('#slider').nivoSlider();
	});

	// top 按鈕
	$('.top a').click(function (event) {
		/* Act on the event */
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 1000)
	});

});