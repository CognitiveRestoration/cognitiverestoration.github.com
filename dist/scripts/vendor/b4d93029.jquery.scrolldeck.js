/*
	scrolldeck - jQuery scrolldeck to create a vertically scrolling presentation deck
	by John Polacek (@johnpolacek)

	Dual licensed under MIT and GPL.
*/

(function($) {
    $.scrolldeck = function(options) {


		// VARS

		var currIndex = 0,
			buttons,
			slides,
			scrollpoints = [],
			sections = [],
			windowHeight = $(window).height(),
			i;

		var defaults = {
			buttons: '.nav-button',
			slides: '.slide',
			duration: 600,
			easing: 'easeInOutExpo',
			offset: 0
		};


		// INIT

		var scrolldeck = this;
		scrolldeck.settings = {};

		var init = function() {

			scrolldeck.settings = $.extend({}, defaults, options);

			buttons = $(scrolldeck.settings.buttons);
			slides = $(scrolldeck.settings.slides);
			scrolldeck.controller = $.scrollorama({blocks:slides, offset:scrolldeck.settings.offset});

			// add animations with scrollorama
			var anim;
			// ANIMATE INS
			for (i=0; i<$('.animate-in').length; i++) {
				anim = $('.animate-in').eq(i);
				switch (anim.attr('data-animation')) {
					case 'fly-in-left':
						anim
							.parent().css('overflow','hidden');
						scrolldeck.controller.animate(anim, { delay: windowHeight/2, duration: windowHeight/2, property:'left', start:-1200 });
						break;
					case 'fly-in-right':
						anim
							.parent().css('overflow','hidden');
						scrolldeck.controller.animate(anim, { delay: windowHeight/2, duration: windowHeight/2, property:'right', start:-1200 });
						break;
					case 'space-in':
						scrolldeck.controller.animate(anim, { delay: windowHeight*0.8, duration: windowHeight*0.2, property:'letter-spacing', start:40 });
						scrolldeck.controller.animate(anim, { delay: windowHeight*0.8, duration: windowHeight*0.2, property:'opacity', start:0 });
						break;
					case 'fade-in':
						scrolldeck.controller.animate(anim, { delay: windowHeight/2, duration: windowHeight/2, property:'opacity', start:0 });
						break;
					case 'fade-out':
						scrolldeck.controller.animate(anim, { delay: 0, duration: windowHeight/2, property:'opacity', start:1, end:0, pin:true });
						break;
					case 'unpin-it':
					  scrolldeck.controller.animate(anim, { duration: windowHeight/2, property:'top', start:50, end:-150, pin:true });
					  break;
					case 'unpin-it2':
					  scrolldeck.controller.animate(anim, { duration: windowHeight/2, property:'top', start:windowHeight/2, end:windowHeight/9, pin:true });
					  break;
					case 'cover-up':
					  scrolldeck.controller.animate(anim, { delay: 0, duration: windowHeight, property:'top', start: windowHeight/2, end:-windowHeight/4 });
					  // scrolldeck.controller.animate(anim, { delay: windowHeight, duration: windowHeight/2, property:'top', pin:true });
					  break;
					case 'cover-up2':
					  scrolldeck.controller.animate(anim, { delay: windowHeight*3, duration: windowHeight, property:'top', start: windowHeight/2, end:-windowHeight/4 });
					  // scrolldeck.controller.animate(anim, { delay: windowHeight, duration: windowHeight/2, property:'top', pin:true });
					  break;
					case 'mental-parallax':
					  scrolldeck.controller.animate(anim, { delay: windowHeight*2, duration: windowHeight, property:'top-padding', start: windowHeight, end:0 });
					  // scrollorama.animate('#parallax2',{ delay: 400, duration: 600, property:'top', start:800, end:-800 });
					  break;
					default:
						scrolldeck.controller.animate(anim, { delay: windowHeight/2, duration: windowHeight/2, property:'opacity', start:0 });

				}
			}

			// Additional custom scrollorama animations not originally in scrolldeck.js
		  // scrollorama.animate('#parallax2',{ delay: 400, duration: 600, property:'top', start:800, end:-800 });
			// scrollorama.animate('#parallax3',{ delay: 200, duration: 1200, property:'top', start:500, end:-500 });
			// scrolldeck.controller.animate('#unpin',{ duration:500, property:'padding-top', start:400, pin:true });
	    // scrolldeck.controller.animate('#fade-in',{ delay: 400, duration: 300, property:'opacity', start:0 });
	    // scrolldeck.controller.animate('#fly-in',{ delay: 400, duration: 300, property:'left', start:-1400, end:0 });
	    // scrolldeck.controller.animate('#rotate-in',{ duration: 800, property:'rotate', start:720 });
	    // scrolldeck.controller.animate('#zoom-in',{ delay: 200, duration: 600, property:'zoom', start:8 });
	    // scrolldeck.controller.animate('#any',{ delay: 700, duration: 200, property:'opacity', start:0 });
	    // scrolldeck.controller.animate('#any',{ delay: 800, duration: 200, property:'letter-spacing', start:18 });


			// ANIMATE BUILDS
			for (i=0; i<$('.animate-build').length; i++) {
				anim = $('.animate-build').eq(i);
				switch (anim.attr('data-animation')) {
					case 'fly-in-left':
						anim.parent().css('overflow','hidden');
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'left', start:-1200, pin:true });
						break;
					case 'fly-in-right':
						anim.parent().css('overflow','hidden');
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'right', start:-1200, pin:true });
						break;
					case 'space-in':
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'letter-spacing', start:40, pin:true });
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'opacity', start:0, pin:true });
						break;
					case 'fade-in':
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'opacity', start:0, pin:true });
						break;
					case 'slide-up':
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'padding-top', start:windowHeight/2, end: 0, pin:true });
						break;
					case 'fade-out':
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: windowHeight*0.6, property:'opacity', start:1, end:0, pin:true });
						break;
					case 'unpin-it':
					  scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration:500, property:'padding-top', start:400, pin:true });
					  break;
					case 'cover-up':
					  scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: windowHeight, property:'top', start: windowHeight/2, end:-windowHeight/4, pin:true});
					  // scrolldeck.controller.animate(anim, { delay: windowHeight, duration: windowHeight/2, property:'top', pin:true });
					  break;
					case 'cover-up2':
					  scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: windowHeight, property:'top', start: windowHeight/2, end:-windowHeight/5, pin:true });
					  // scrolldeck.controller.animate(anim, { delay: windowHeight, duration: windowHeight/2, property:'top', pin:true });
					  break;
					default:
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'opacity', start:0, pin:true });
				}
			}

			// set slide and animation scrollpoints
			scrollpoints = scrolldeck.controller.getScrollpoints();

			// if nav buttons, create array of section header slide indexes
			for (i=0; i<buttons.length;i++)
				sections.push(slides.index($($(buttons[i]).attr('href'))));

			// event handler for updating current slide index and current nav button
			scrolldeck.controller.onBlockChange(function() {
				// get slide index
				currIndex = scrolldeck.controller.blockIndex;

				// then update nav
				updateNav();
			});

			// Nav button click event
			buttons.on('click', function(e) {
				e.preventDefault();
				var slide = $($(this).attr('href'));
				currIndex = slide.index();
				scrollToSlide(slide);
			});

			// Keyboard events
			$(document).on('keydown', function(e){
				// up/left arrow = scroll up
				if ((e.keyCode == 37 || e.keyCode == 38) && currIndex !== 0) {
					scrollToSlide(getPrevScrollpoint());
				}
				// down/right arrow, space = scroll down
				else if ((e.keyCode == 39 || e.keyCode == 32 || e.keyCode == 40) && currIndex != slides.length-1) {
					scrollToSlide(getNextScrollpoint());
				}
			});

			// if slides are images, assign height to auto for proportional scaling
			for (i=0; i<slides.length; i++) {
				var el = slides.eq(i);
				if (el.prop('tagName').toUpperCase() === 'IMG') {
					el.css('height','auto');
				}
			}

			// if last slide is shorter than height of window, increase height
			var lastSlide = slides.eq(slides.length-1);
			if (lastSlide.outerHeight() < $(window).height()) {
				lastSlide.height(lastSlide.height()+$(window).height()-lastSlide.outerHeight());
			}

			updateNav();
		};



		// PRIVATE FUNCTIONS

		function updateNav() {
			if (buttons) {
				buttons.removeClass('current');
				var currSection = -1;
				for (i=0; i<sections.length;i++) {
					if (currIndex >= sections[i]) {
						currSection = i;
					}
				}
				if (currSection != -1) {
					buttons.eq(currSection).addClass('current');
				}
			}
		}

		function scrollToSlide(slide) {
			$(window)._scrollable().stop();
			$(window).scrollTo(slide, {
				duration: scrolldeck.settings.duration,
				easing: scrolldeck.settings.easing,
				offset: scrolldeck.settings.offset
			});
		}

		function getNextScrollpoint() {
			return getScrollpoint(2);
		}

		function getPrevScrollpoint() {
			return getScrollpoint(-1);
		}

		function getScrollpoint(n) {
			var scrollTop = $(window).scrollTop();
			// make temp dup scrollpoints array
			var points = scrollpoints.slice(0);
			// add current scroll position to new temp array
			points.push(scrollTop);
			// do sort to find nearest scrollpoint
			points.sort(function(a,b){return a - b;});
			return points[points.indexOf(scrollTop)+n];
		}


		// INIT
		init();
    };

})(jQuery);
