$(window).on(
  'scroll',
  _.debounce(function() {
    var $nav = $('nav'),
      navHeight = $nav.outerHeight(),
      windowTop = $(this).scrollTop();

    if (windowTop > navHeight) {
      $nav.addClass('small');
      $('nav > a').text('TC');
    } else {
      $nav.removeClass('small');
      $('nav > a').text('The Company');
    }
  }, 200)
);
