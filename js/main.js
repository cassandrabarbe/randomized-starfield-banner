var $body = $('body');

for(i=0; i<75; i++) {
    var $star = $('<div>');

    $star.addClass('star');
    $star.css({
      'top': Math.random() * (document.documentElement.clientHeight + 300),
      'left': Math.random() * (document.documentElement.clientHeight + 300),
      'opacity': Math.random()
  });
  $body.append($star);
}
