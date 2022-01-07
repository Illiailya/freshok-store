$(function () {
// Main Page Top-slider
	$('.top-slider__inner').slick({
		dots: false
	});

// Main Page Переменные для двух mixitup
	var containerEL1 = document.querySelector('[data-ref="container-1"]');
	var containerEL2 = document.querySelector('[data-ref="container-2"]');

	var config = {
		controls: {
			scope: 'local'
		}
	};
// Main Page Слайдер Брендов
	$('.brands__inner').slick({
		dots: false,
		arrows: false,
		slidesToShow: 6,
		swipeToSlide: true
	});

//  Catalog Page выпадающие фильтры
	$('.filters-item__title').on('click', function () {
		$(this).parent().find('.filters-item__title').toggleClass('filters-item__title--active');
		$(this).parent().find('.filters-item__content').toggleClass('filters-item__content--active');
		$(this).parent().find('.filters-item__list').toggleClass('filters-item__list--active');
		$(this).parent().find('.filters-item__form').toggleClass('filters-item__form--active');
	});

// Catalog Page слайдер филтра цен
	$(".price-form").ionRangeSlider({
		type: "double",
	});

	// Catalog Page Стилизатор select
	$('.catalog-top__list').styler();

	// Catalog Page филтр Список/Грид-плитка
	$('.catalog-top__btn--list').on('click', function() {
		$('.catalog-top__btn--list').addClass('catalog-top__btn--active');
		$('.catalog-page__body--list').addClass('catalog-page__body--active');
		$('.catalog-top__btn--grid').removeClass('catalog-top__btn--active');
		$('.catalog-page__body--grid').removeClass('catalog-page__body--active');
	});
	
	$('.catalog-top__btn--grid').on('click', function() {
		$('.catalog-top__btn--grid').addClass('catalog-top__btn--active');
		$('.catalog-page__body--grid').addClass('catalog-page__body--active');
		$('.catalog-top__btn--list').removeClass('catalog-top__btn--active');
		$('.catalog-page__body--list').removeClass('catalog-page__body--active');
	});

	// Main Page для Mixitupp
	var mixer1 = mixitup(containerEL1, config);
	var mixer2 = mixitup(containerEL2, config);
});