// Fade function for top of homepage
$(window).scroll(function(){
    $(".title1").css("opacity", 1 - $(window).scrollTop() / 300);
  });

$(window).scroll(function(){
    $(".top2").css("opacity", 1 - $(window).scrollTop() / 600);
  });


$(function() {
  AOS.init({
  	easing: 'ease-in-quad',
  });
});


