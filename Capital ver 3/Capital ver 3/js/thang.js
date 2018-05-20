jQuery(function($) {
  var h = $('#getFixed').height();
  var position = $('.newsletter').position().top - h - 60;
  function fixDiv() {
    
    var $cache = $('#getFixed');
    if ($(window).scrollTop() > 682)
      {
        if( $(window).scrollTop() < position)
        $cache.css({
          'position': 'fixed',
          'top': '50px'
        });
        else
          $cache.css({
            'position': 'relative',
            'top': position - h - 430
            });
      }
    else
        { 
          $cache.css({
            'position': 'relative',
            'top': 'auto'
            });
        }
  }
  $(window).scroll(fixDiv);
  fixDiv();
});