$(function () {
  var introImage = {width: 1500, height: 452};
  $('#intro img').css({
    width: $(document).width(),
    height: ($(document).width() * introImage.height) / introImage.width
  });
  $('img.lazy').lazyload({effect: 'fadeIn'});
});
