(function() {

  $(function() {
    $('html').removeClass('no-js').addClass('yes-js');

    /* $('.container').hide().delay(100).fadeIn(800); */

    $('.photo-album .photo').nyroModal();

    $('.photo-album .photo').mouseenter(function(e) {
      $(this).find('.zoom').stop(true, false).animate({
        bottom: '50%'
      }, 'fast')
    }).mouseleave(function(e) {
      $(this).find('.zoom').stop(true, false).animate({
        bottom: '-29px'
      }, 'fast')
    });
  });

})();
