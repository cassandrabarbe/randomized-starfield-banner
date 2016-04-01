var $body = $('body');
var $star;

for (i = 0; i < 75; i++) {
  $star = $('<div>');
  $star.addClass('star');
  $star.css({
  'top': Math.random() * (document.documentElement.clientHeight + 300),
  'left': Math.random() * (document.documentElement.clientHeight + 300),
  'opacity': Math.random(),
  'transform': Math.random()
  });
  $body.append($star);
}
