$(document).ready(function () {
  //  toogle nav

  $("#toggle-nav").click(function () {
    $(".navbar").slideToggle();

    $("body").toggleClass("overflow");
  });

  // 2. change icon on click burger icon to cross icon
  var imgs = 0;
  $("#toggle-nav").click(function () {
    if (imgs == 0) {
      $(".image").attr("src", "assets/img/menu-close.png");
      imgs = 1;
    } else if (imgs == 1) {
      $(".image").attr("src", "assets/img/menu-icon.png");
      imgs = 0;
    }
  });

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

  $(".top-slider").slick({
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
