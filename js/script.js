$(function(){
//effekt bounce
$("#btn1").on("click",function(){
$(".div1").effect("bounce",{
	times: 7,
	distance: 100,
	direction: "up"
}, 1000);
});
//effekt explode
$("#btn2").on("click",function(){
$(".div2").effect("explode", {
	pieces: 9

}, 2000,function(){
	$(".div2").effect("explode", {
     pieces: 9,
     mode: 'show'
	}, 2000);
});
});
//effect pulsed
$("#btn3").on("click",function(){
$(".div3").effect("pulsate",{
	times: 7,
	mode: 'hide',
	}, 1000, function(){
		$(".div3").css({
			backgroundColor: "white",
			display: "block",
			border: "none"
		});
	}); 
/*,function(){
		$(".div3").effect("pulsate", {
     times: 7,
     mode: 'show'
	}, 1000);*/
	});
//show / hide
$("#btnshow").on("click", function(){
	$(".divshow").show("explode", 2000);
});
$("#btnhide").on("click", function(){
	$(".divhide").hide("explode", 2000);
});
//add/remove class
$("#btnadd").on("click", function(){
	$("#pic1").addClass("imgcircle",1000);
});
$("#btnremove").on("click", function(){
	$("#pic2").remove("imgcircle",1000);
});


//switch class
$("#switchbtn").on("click", function(){
	$(".divtext p").switchClass("abzac", "newabzac", 2000);
});


$("#animbtn").on("click", function(){
	$(".anim").animate({
		backgroundColor: "yellow",
		width: "400",
		height: "400",
		color: "red"
	}, 2000);
});
//widget accordeon
$("#accordeon").accordion({
	active: false,
	collapsible: true,
	heightStyle: 'content',//
	/*event: 'mouseover'//меню открывается по наведению курсора мыши*/
	icons: {"header": "ui-icon-plus", "activeHeader": "ui-icon-minus"}//меняем стандартную иконку треугольничек на + и -

});
//widget tabs
$("#tabs").tabs({
	/*event: 'mouseover'*/
	collapsible: true,
	heightStyle: 'auto',//задает контейнер самой большой по размеру вкладке  для всех  остальніх вкладок
	active: 1   
});
//menu
$("ul.menu").menu();
//datepicker
$("#calendar").datepicker({
	changeYear: true,
	changeMonth: true,
	yearRange: '1940:2018',
	showWeek: true,
	showOn: 'both',
	showButtonPanel: true,
	showAnim:'explode',
	numberOfMonths:[1,3],
	duration: 'slow',
	buttonText: 'Выбрать дату'

});
//widget button
$("#btn4, #link").button();
//dialog
$("#btn5").on("click", function(){
	$("#dialog").dialog({
	modal: true,
	buttons: {
		Cancel: function(){
			$(this).dialog("close");
		}
	},
	show: {effect: 'explode', duration: 800},
	hide: {effect: 'explode', duration: 800}
	});	
  });
//SLIDER widget
$("#slider").slider({
	max: 200,
	range: true,
	values: [10,50],
	step: 5,
	animate: true,
slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider" ).slider( "values", 0 ) +
      " - $" + $( "#slider" ).slider( "values", 1 ) );
 //Draggable
 $("#kart1, #kart2, #kart3").draggable({ 
 revert: true,
 helper: 'clone',
 opacity: 0.5,
 zIndex: 100,
 cursor: 'pointer',
 revertDuration: 1000
 }); 
 // Droppa
 $(".pics img").draggable({
 	revert: "invalid",
 	start: function(event, ui) {
 		ui.helper.css('transform', 'rotate(5deg) scale(1.5)');
 	},
 	stop: function(event, ui) {
 	ui.helper.css('transform', 'rotate(0deg) scale(1)');	
 	},
 	zIndex: 100
 });
 $("#trash").droppable({
 	activeClass: 'highlight',
 	drop: function(event, ui) {
 		ui.helper.hide('explode');
 		$(this).attr('src', 'img/trashcan-empty-icon.png');
 	}
 });
 //SORTABLE
 $(".spisok1").sortable({
 	connectWith:'.spisok2'
 });
 $(".spisok2").sortable({
 	connectWith:'.spisok1'
 });
 //superfish menu
 $("#menu1, #menu2, #menu3").superfish({
 	delay: 1000,
 	animation: {apacity: 'show'},
 	animationOut: {apacity: 'hide'},
 	speed: 'slow'
 });
 //Gallery colorbox
 $(".gal").colorbox({
 	rel: "gal",//группируем картинки в в галлерею(id для всех картинок в галлереи должен быть одинаков )
 	transition: 'fade',//эффекты переключения между картинками
 	speed: 500,//скорость переключения между картинками
 	width: 600,//задает ширину рамки
 	height: 500,//задает высоту рамки
 	innerWidth: 350,//задает ширину картинки
 	innerHeight: 350,//задает высоту картинки
 	opacity: 0.7,//задает прозрачность щкна в котором смотрим галлерею
 	slideshow: true,
 	slideshowSpeed: 2500,
 	slideshowAuto: true,
 	current: "Фото {current} из {total}",
 	slideshowStart: "Запуск слайдшоу",
 	slideshowStop: "Стоп слайдшоу"
 });
 $(".youtube").colorbox({
 	iframe: true,
 	width: 500,
 	height: 400,
 });
 //выводит скрытый текст , формы и др , в окно в новой вкладке колорбокс
 $(".inline").colorbox({
 	inline: true,
 	width: "50%"
 });
 //bx slider
 $(".slider").bxSlider({
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 600,
  speed: 700,
  minSlides: 3,
  maxSlides: 3,
  slideWidth: 600,
  moveSlides: 1,
  slideMargin: 20,
  video: true,
  adaptiveHeight: true
  });
});










