var path = 'ситроен';

// Open sub-menu
$('.sub-link').click(function(){
  $('.sub-menu').toggleClass('hide');
  $('.sub-link').toggleClass('rotate');
});

// Add arrow under car class
$('.class-item').on('click', function() {
	$('.calc-btn-block').find('button').removeClass('arrow');
	$('.calc-btn-block').find('button').eq($(this).index()).toggleClass('arrow');
	if($(this).index() == 0){
		$('.main-img').attr('src','img/ситроен/чистая.jpg');
		path = 'ситроен';
	} else if($(this).index() == 1){
		$('.main-img').attr('src','img/мазда/чистая.jpg');
		path = 'мазда';
	} else {
		$('.main-img').attr('src','img/мерседес/чистая.jpg');
		path = 'мерседес';
	}
});

// Disable selection in menu
$('body').click(function(e) {
	var block = $('aside').find('li');		
	if (!block.is(e.target)) $('li').removeClass('active');
});

// Add 'active' class on click
$('.main-menu').find('li').click(function(e) {
	if($(this).hasClass('active')) {
		$(this).removeClass('active');
	} else if($(this).index() < 6){
		$('li').removeClass('active');
		$(this).toggleClass('active');
		switch($(this).index()) {
			case 0: $('.main-img').attr('src','img/'+path+'/минимальный.jpg'); break
			case 1: $('.main-img').attr('src','img/'+path+'/стандарт.jpg'); break
			case 2: $('.main-img').attr('src','img/'+path+'/стандарт+.jpg'); break
			case 3: $('.main-img').attr('src','img/'+path+'/стандарт++.jpg'); break
			case 4: $('.main-img').attr('src','img/'+path+'/стандарт+++.jpg'); break
			case 5: $('.main-img').attr('src','img/'+path+'/целиком.jpg'); break
			default: $('.main-img').attr('src','img/'+path+'/чистая.jpg'); break
		}
	}	
});

// Hover main
$('aside').find('.main-menu').hover(function(){
	switch($(this).index()) {
		case 0: $('.main-img').attr('src','img/'+path+'/минимальный.jpg'); break
		case 1: $('.main-img').attr('src','img/'+path+'/стандарт.jpg'); break
		case 2: $('.main-img').attr('src','img/'+path+'/стандарт+.jpg'); break
		case 3: $('.main-img').attr('src','img/'+path+'/стандарт++.jpg'); break
		case 4: $('.main-img').attr('src','img/'+path+'/стандарт+++.jpg'); break
		case 5: $('.main-img').attr('src','img/'+path+'/целиком.jpg'); break
		default: $('.main-img').attr('src','img/'+path+'/чистая.jpg'); break
	};
},
function(){
	if($('aside').find('.main-menu').hasClass('active')){
		switch($('.main-menu').find('li.active').index()) {
			case 0: $('.main-img').attr('src','img/'+path+'/минимальный.jpg'); break
			case 1: $('.main-img').attr('src','img/'+path+'/стандарт.jpg'); break
			case 2: $('.main-img').attr('src','img/'+path+'/стандарт+.jpg'); break
			case 3: $('.main-img').attr('src','img/'+path+'/стандарт++.jpg'); break
			case 4: $('.main-img').attr('src','img/'+path+'/стандарт+++.jpg'); break
			case 5: $('.main-img').attr('src','img/'+path+'/целиком.jpg'); break
			default: $('.main-img').attr('src','img/'+path+'/чистая.jpg'); break
		};
	} else $('.main-img').attr('src','img/'+path+'/чистая.jpg');
});

// Hover partials
$('.sub-menu').find('li').hover(function(){
	if($('.sub-link').hasClass('rotate') && $('aside').find('li').hasClass('active') && $('li.active').index() < 5){
		function addPartials(){
			$('.calc-item').find('.main-img').removeClass('mb-strong');
			$('.calc-item').find('.partials').addClass('hide');
			$('.calc-item').find('.partials').eq($('li.active').index()).toggleClass('hide');
		};
		switch($(this).index()) {
		case 0: $('.main-img').attr('src','img/'+path+'/оптика.jpg'); addPartials(); break
		case 1: $('.main-img').attr('src','img/'+path+'/пороги-внутренние.jpg'); addPartials(); break
		case 2: $('.main-img').attr('src','img/'+path+'/пороги-наружние.jpg'); addPartials(); break
		case 3: $('.main-img').attr('src','img/'+path+'/двери.jpg'); addPartials(); break
		case 4: $('.main-img').attr('src','img/'+path+'/задние-крылья.jpg'); addPartials(); break
		case 5: $('.main-img').attr('src','img/'+path+'/капот.jpg'); addPartials(); break
		case 6: $('.main-img').attr('src','img/'+path+'/передний-бампер.jpg'); addPartials(); break
		case 7: $('.main-img').attr('src','img/'+path+'/задний-бампер.jpg'); addPartials(); break
		default: $('.main-img').attr('src','img/'+path+'/чистая.jpg'); addPartials(); break
		};	
	}	
},
function(){
	if($('.main-menu').find('li').hasClass('active')){
		switch($('aside').children(":first").find('li.active').index()) {
			case 0: $('.main-img').attr('src','img/'+path+'/минимальный.jpg'); break
			case 1: $('.main-img').attr('src','img/'+path+'/стандарт.jpg'); break
			case 2: $('.main-img').attr('src','img/'+path+'/стандарт+.jpg'); break
			case 3: $('.main-img').attr('src','img/'+path+'/стандарт++.jpg'); break
			case 4: $('.main-img').attr('src','img/'+path+'/стандарт+++.jpg'); break
			case 5: $('.main-img').attr('src','img/'+path+'/целиком.jpg'); break
			default: $('.main-img').attr('src','img/'+path+'/чистая.jpg'); break
		};
		$('.calc-item').find('.main-img').addClass('mb-strong');
		$('.calc-item').find('.partials').addClass('hide');	
	}
});