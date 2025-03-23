$(document).ready(function() {
	//Mobile Nav Hide Show
	//Menu Toggle Btn
	$('.mobile-nav-toggler').on('click', function () {
		$('body').addClass('mobile-menu-visible');
	});
	if ($('.mobile-menu').length) {

		$('.mobile-menu .menu-box').mCustomScrollbar();

		var mobileMenuContent = $('header .menu-area .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', function () {
			$('body').removeClass('mobile-menu-visible');
		});
	}

	function scrollToSection(event) {
		event.preventDefault();
		var $section = $($(this).attr('href')); 
		$('html, body').animate({
		  scrollTop: $section.offset().top - 60
		}, 1000);
	  }
	$('.navigation li a').on('click', scrollToSection);

	$('.client-slider').owlCarousel({
		loop:true,
		center: true,
		margin:10,
    	nav: true,
		dots: true,
		responsive:{
			0:{
				items:2
			},
			768:{
				items:4
			},
			1024:{
				items:6
			}
		}
	});
	$('.owl-carousel').find('.owl-nav').removeClass('disabled');
	$('.owl-carousel').on('changed.owl.carousel', function(event) {
		$(this).find('.owl-nav').removeClass('disabled');
	});
});