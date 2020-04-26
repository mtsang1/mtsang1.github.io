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


  $(document).ready(function() {
    $('.carousel .carousel-caption').css('zoom', $('.carousel').width()/1250);
  });

  $(window).resize(function() {
    $('.carousel .carousel-caption').css('zoom', $('.carousel').width()/1250);
  });