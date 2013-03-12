(function() {

  $(function() {
    $('html').removeClass('no-js').addClass('yes-js');
    $('.container').hide().delay(100).fadeIn(800);
    $('.photo-album a').nyroModal();
  });

})();