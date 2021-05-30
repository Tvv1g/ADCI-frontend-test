$(function() {

	$('.navbar-tog').click(function() {
		$(this).toggleClass('navbar-on');
		$('.nav-wrapper').slideToggle(300);
	});

	$(document).mouseup(function (e){
		var div = $(".nav-wrapper, .navbar-tog");
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
			$('.navbar-tog').removeClass('navbar-on');
			$('.nav-wrapper').slideUp(300);
		}
	});

	$('.nav__item_has-children .nav__link').click(function() {
		return false;
	});

	$('.main__slide').each(function() {
		var img = $('img', this).attr('src');
		$('img', this).hide();
		$(this).css('background-image', 'url(' + img + ')');
	});

	$('.main__slider').slick({
		arrows: false,
		dots: true,
		appendDots: $('.main__dots'),
		fade: true
	});

	$(".info__open").click(function() {
		$('.info__content').slideToggle(300);
		$(this).toggleClass('opened');
		return false;
	});

	$('.header__modal-link').click(function() {
		$('.modal').fadeIn(300);
		return false;
	});

	$('.modal__close, .modal__blackout').click(function() {
		$('.modal').fadeOut(300);
		return false;
	});
});