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
    });