"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

	var link = document.querySelectorAll("a");

	link.forEach(function (val, idx) {

		val.addEventListener("click", function (e) {
			if (val.getAttribute("href") === "#") {
				e.preventDefault();
			}
		});
	});
};

/**
 * @description Document DOM ready.
 */
(function () {
	/*
 * =============================================
 * CALLBACK :: start
 * ============================================= */
	var handMadeCustom = function handMadeCustom() {
		window.app = { el: {}, fn: {} };
		app.el['window'] = $(window);
		app.el['document'] = $(document);
		app.el['html-body'] = $('html,body');
		app.el['body'] = $('body');
		app.el['back-to-top'] = $('.back-to-top');

		//Smooth scroll to ID
		$('.scroll-to').on('click', function (event) {
			var target = $(this).attr('href');
			if ($(target).length) {
				event.preventDefault();
				app.el['html-body'].animate({
					scrollTop: $(target).offset().top
				}, 750);
			}
		});

		// Back to top
		app.el['back-to-top'].click(function (event) {
			event.preventDefault();
			app.el['html-body'].animate({
				scrollTop: 0
			}, 750);
		});
		function fadeScrollTop() {
			if (app.el['window'].scrollTop() > 500) {
				app.el['back-to-top'].fadeIn();
			} else {
				app.el['back-to-top'].fadeOut();
			}
		}

		// Window scroll events
		app.el['window'].on('scroll', function () {
			fadeScrollTop();
		});

		$('.mobile-menu-toggle').on('click', function (event) {
			event.preventDefault();
			$('.menu-mobile').toggleClass('open');
		});

		$('.banner-carousel').slick({
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1
		});
		$('.vns-carousel').slick({
			dots: true,
			arrows: false,
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});

		$('.accordion').accordion({
			"transitionSpeed": 400
		});
	};

	var servicesCalc = function servicesCalc() {
		$('[btn-result-js]').on('click', function (ev) {
			$('[textarea-result-js]').removeClass('hidden');
		});
	};

	var productFilterCalc = function productFilterCalc() {
		var range1 = $(".js-range-slider-1"),
		    range2 = $(".js-range-slider-2"),
		    rangeInputMin1 = $('[range1-input-min-js]'),
		    rangeInputMax1 = $('[range1-input-max-js]'),
		    rangeInputMin2 = $('[range2-input-min-js]'),
		    rangeInputMax2 = $('[range2-input-max-js]');

		function checkedCB(el, instanceEl, inputArr) {
			if ($(el).is(':checked')) {
				instanceEl.update({ block: false });
				$(inputArr).removeAttr('disabled');
			} else {
				instanceEl.update({ block: true });
				$(inputArr).attr('disabled', true);
			}
		}

		/*function inputFromCB (inputEl, instanceEl) {
  	let val = $(inputEl).prop("value");
  	
  	if (val < instanceEl.options.min) {
  		val = instanceEl.options.min;
  	} else if (val > instanceEl.options.to) {
  		val = instanceEl.options.to;
  	}
  	
  	instanceEl.update({from: val});
  	$(inputEl).prop("value", val);
  }
  function inputToCB (inputEl, instanceEl) {
  	var val = $(inputEl).prop("value");
  	
  	if (val < instanceEl.options.from) {
  		val = instanceEl.options.from;
  	} else if (val > instanceEl.options.max) {
  		val = instanceEl.options.max;
  	}
  	
  	instanceEl.update({to: val});
  	$(inputEl).prop("value", val);
  }*/

		range1.ionRangeSlider({
			skin: "sharp",
			min: 0,
			max: 50,
			from: 15,
			grid: true,
			block: true
		});

		range2.ionRangeSlider({
			skin: "sharp",
			min: 0,
			max: 6,
			step: 1,
			from: 1,
			grid: true,
			block: true
		});

		var range1_instance = range1.data("ionRangeSlider"),
		    range2_instance = range2.data("ionRangeSlider");

		$('[range1-checked-js]').on('change', function (ev) {
			checkedCB(ev.currentTarget, range1_instance, '[range1-input-min-js], [range1-input-max-js]');
		});

		$('[range2-checked-js]').on('change', function (ev) {
			checkedCB(ev.currentTarget, range2_instance, '[range2-input-min-js], [range2-input-max-js]');
		});

		/*rangeInputMin1.on("input", (ev) => inputFromCB(rangeInputMin1, range1_instance));
  rangeInputMax1.on("input", (ev) => inputToCB(rangeInputMax1, range1_instance));
  
  rangeInputMin2.on("input", (ev) => inputFromCB(rangeInputMin2, range2_instance));
  rangeInputMax2.on("input", (ev) => inputToCB(rangeInputMax2, range2_instance));*/
	};
	/*
 * CALLBACK :: end
 * ============================================= */

	/**
  * @name initNative
  *
  * @description Init all method
  */
	var initNative = function initNative() {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		// ==========================================

		// callback
		handMadeCustom();
		servicesCalc();
		productFilterCalc();
		// ==========================================
	};
	initNative();
})();