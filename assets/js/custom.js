$(document).ready(function () {
    $("#formbtn-1").click(function () {
        $("#form-2").removeClass("active");
        $("#formbtn-2").removeClass("active");
        $("#form-1").addClass("active");
        $("#formbtn-1").addClass("active");
      });
      $("#formbtn-2").click(function () {
        $("#form-1").removeClass("active");
        $("#formbtn-1").removeClass("active");
        $("#form-2").addClass("active");
        $("#formbtn-2").addClass("active");
      });
 
       //toggle dropdown
  $(".dropdown").click(function () {
    if ($("> .dropdown-menu", this).hasClass("active")) {
      $(".dropdown-menu").removeClass("active");
      $(".dropdown > a > img").removeClass("active");
    } else {
      $(".dropdown-menu").removeClass("active");
      $("> .dropdown-menu", this).toggleClass("active");
      $(".dropdown > a > img").removeClass("active");
      $("> a > img", this).toggleClass("active");
    }
  });

      $(".slider").slick({
        dots: true,
        infinite: true,
        arrows: true,
    
        prevArrow: $(".left-arrow"),
        nextArrow: $(".right-arrow"),
    
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        nav: true,
      });

      $(".below-slider").slick({
        dots: true,
        infinite: true,
        arrows: false,
    
        // prevArrow: $(".left-arrow"),
        // nextArrow: $(".right-arrow"),
    
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        nav: true,
      });




    }); 