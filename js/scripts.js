$(".visible").click(function() {
  $(this).removeClass("visible");
  $(this).addClass("hidden");
  $(this).next().removeClass("hidden");
  $(this).next().addClass("visible");
});
