$(".visible").click(function() {
  $(this).removeClass("visible");
  $(this).addClass("hidden");
  $(this).next().removeClass("hidden");
  $(this).next().addClass("visible");
});

$("p").click(function() {
  $(this).removeClass("visible");
  $(this).addClass("hidden");
  $(this).prev().removeClass("hidden");
  $(this).prev().addClass("visible");
});
