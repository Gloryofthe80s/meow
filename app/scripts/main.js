$(document).ready(function () {

  // VISUAL ANIMATIONS
  $('.nav-menu-container').hover(
    function() {
      $(this).addClass('nav-hover-active');
    }, function() {
      $(this).removeClass('nav-hover-active');
    }
  );

  // apply responsive text fitting to banner lead text
  $(".lead").fitText(1.4, { minFontSize: '14px', maxFontSize: '100px' });


});