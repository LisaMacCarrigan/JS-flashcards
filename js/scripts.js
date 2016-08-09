$(".visible").click(function() {
  $(this).removeClass("visible");
  $(this).addClass("hidden");
  $(this).next().removeClass("hidden");
  $(this).next().addClass("visible");
  $(this).parent().addClass("yellow");
});

$("p").click(function() {
  $(this).removeClass("visible");
  $(this).addClass("hidden");
  $(this).prev().removeClass("hidden");
  $(this).prev().addClass("visible");
  $(this).parent().removeClass("yellow");
});
