(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader - DISABLED
  // $(window).on('load', function () {
  //   if ($('#preloader').length) {
  //     $('#preloader').delay(100).fadeOut('slow', function () {
  //       $(this).remove();
  //     });
  //   }
  // });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

	/*--/ Scroll Fade-in Animations /--*/
	function checkFadeIn() {
		var fadeElements = document.querySelectorAll('.fade-in-section, .slide-in-left, .slide-in-right, .scale-in, .service-box');
		
		fadeElements.forEach(function(element) {
			var elementTop = element.getBoundingClientRect().top;
			var elementBottom = element.getBoundingClientRect().bottom;
			var windowHeight = window.innerHeight;
			
			// Check if element is in viewport (with some offset for better effect)
			if (elementTop < windowHeight - 100 && elementBottom > 0) {
				element.classList.add('is-visible');
			}
		});
	}
	
	// Check on scroll
	$(window).on('scroll', function() {
		checkFadeIn();
	});
	
	// Check on page load
	$(window).on('load', function() {
		checkFadeIn();
		// Also check after a small delay to ensure everything is rendered
		setTimeout(checkFadeIn, 100);
	});
	
	// Check on resize
	$(window).on('resize', function() {
		checkFadeIn();
	});

	/*--/ Enhanced Back to Top with smooth animation /--*/
	$('.back-to-top').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 1200, 'easeInOutExpo');
		return false;
	});

	/*--/ Skills Progress Bar Animation /--*/
	function animateSkills() {
		$('.progress-bar-skill').each(function() {
			var progress = $(this).data('progress');
			var element = $(this);
			var elementTop = element.offset().top;
			var windowBottom = $(window).scrollTop() + $(window).height();
			
			if (windowBottom > elementTop && !element.hasClass('animated')) {
				element.addClass('animated');
				element.css('width', progress + '%');
			}
		});
	}
	
	$(window).on('scroll load', function() {
		animateSkills();
	});

	/*--/ Counter Animation /--*/
	function animateCounters() {
		$('.counter-number').each(function() {
			var $this = $(this);
			var target = parseInt($this.data('target'));
			var current = parseInt($this.text());
			
			var elementTop = $this.offset().top;
			var windowBottom = $(window).scrollTop() + $(window).height();
			
			if (windowBottom > elementTop && current === 0) {
				$({ Counter: 0 }).animate({ Counter: target }, {
					duration: 2000,
					easing: 'swing',
					step: function() {
						$this.text(Math.ceil(this.Counter));
					},
					complete: function() {
						$this.text(target);
					}
				});
			}
		});
	}
	
	$(window).on('scroll load', function() {
		animateCounters();
	});

	/*--/ Portfolio Filter /--*/
	$('.filter-btn').on('click', function() {
		var filter = $(this).data('filter');
		
		$('.filter-btn').removeClass('active');
		$(this).addClass('active');
		
		if (filter === 'all') {
			$('.portfolio-item').removeClass('hide').fadeIn(500);
		} else {
			$('.portfolio-item').each(function() {
				var category = $(this).data('category');
				if (category === filter) {
					$(this).removeClass('hide').fadeIn(500);
				} else {
					$(this).addClass('hide').fadeOut(500);
				}
			});
		}
	});

	/*--/ Floating Action Button Toggle /--*/
	$('#fabMain').on('click', function(e) {
		e.preventDefault();
		$('#fabOptions').toggleClass('active');
		$(this).toggleClass('active');
		
		if ($(this).hasClass('active')) {
			$(this).find('i').removeClass('ion-plus').addClass('ion-close');
		} else {
			$(this).find('i').removeClass('ion-close').addClass('ion-plus');
		}
	});

	// Close FAB when clicking outside
	$(document).on('click', function(e) {
		if (!$(e.target).closest('.floating-buttons').length) {
			$('#fabOptions').removeClass('active');
			$('#fabMain').removeClass('active');
			$('#fabMain').find('i').removeClass('ion-close').addClass('ion-plus');
		}
	});

	/*--/ Initialize Vanilla Tilt for 3D Card Effects /--*/
	if (typeof VanillaTilt !== 'undefined') {
		// Apply to service boxes
		VanillaTilt.init(document.querySelectorAll(".service-box"), {
			max: 15,
			speed: 400,
			glare: true,
			"max-glare": 0.3,
		});
		
		// Apply to project cards
		VanillaTilt.init(document.querySelectorAll(".project-card"), {
			max: 10,
			speed: 400,
			glare: true,
			"max-glare": 0.2,
		});
		
		// Apply to skill items
		VanillaTilt.init(document.querySelectorAll(".skill-item"), {
			max: 12,
			speed: 400,
			glare: true,
			"max-glare": 0.25,
		});
	}

})(jQuery);

/*======================================
//--//-->  PARTICLES.JS CONFIGURATION
======================================*/
if (typeof particlesJS !== 'undefined') {
	// Global particles background
	particlesJS('particles-js-global', {
		particles: {
			number: {
				value: 60,
				density: {
					enable: true,
					value_area: 800
				}
			},
			color: {
				value: '#64b5f6'
			},
			shape: {
				type: 'circle',
				stroke: {
					width: 0,
					color: '#000000'
				}
			},
			opacity: {
				value: 0.3,
				random: false,
				anim: {
					enable: true,
					speed: 0.5,
					opacity_min: 0.1,
					sync: false
				}
			},
			size: {
				value: 3,
				random: true,
				anim: {
					enable: false,
					speed: 40,
					size_min: 0.1,
					sync: false
				}
			},
			line_linked: {
				enable: true,
				distance: 150,
				color: '#64b5f6',
				opacity: 0.3,
				width: 1
			},
			move: {
				enable: true,
				speed: 1.5,
				direction: 'none',
				random: false,
				straight: false,
				out_mode: 'out',
				bounce: false,
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200
				}
			}
		},
		interactivity: {
			detect_on: 'canvas',
			events: {
				onhover: {
					enable: true,
					mode: 'grab'
				},
				onclick: {
					enable: true,
					mode: 'push'
				},
				resize: true
			},
			modes: {
				grab: {
					distance: 140,
					line_linked: {
						opacity: 1
					}
				},
				push: {
					particles_nb: 4
				}
			}
		},
		retina_detect: true
	});
}

/*======================================
//--//-->  DARK MODE TOGGLE
======================================*/
document.addEventListener('DOMContentLoaded', function() {
	const darkModeToggle = document.getElementById('darkModeToggle');
	const lightIcon = document.getElementById('lightIcon');
	const darkIcon = document.getElementById('darkIcon');
	const body = document.body;
	
	// Check for saved mode preference
	const savedMode = localStorage.getItem('darkMode');
	if (savedMode === 'light') {
		body.classList.add('light-mode');
		lightIcon.style.display = 'none';
		darkIcon.style.display = 'block';
	}
	
	// Toggle dark mode
	darkModeToggle.addEventListener('click', function() {
		body.classList.toggle('light-mode');
		
		if (body.classList.contains('light-mode')) {
			lightIcon.style.display = 'none';
			darkIcon.style.display = 'block';
			localStorage.setItem('darkMode', 'light');
		} else {
			lightIcon.style.display = 'block';
			darkIcon.style.display = 'none';
			localStorage.setItem('darkMode', 'dark');
		}
	});
	
	/*======================================
	//--//-->  SCROLL ANIMATIONS
	======================================*/
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -100px 0px'
	};
	
	const observer = new IntersectionObserver(function(entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('is-visible');
			}
		});
	}, observerOptions);
	
	// Observe all fade-in sections
	document.querySelectorAll('.fade-in-section').forEach(section => {
		observer.observe(section);
	});
	
	// Observe slide-in elements
	document.querySelectorAll('.slide-in-left, .slide-in-right').forEach(element => {
		observer.observe(element);
	});
	
	// Observe scale-in elements
	document.querySelectorAll('.scale-in').forEach(element => {
		observer.observe(element);
	});
});

