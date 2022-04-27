function sleep(ms) {
  return new Promise(function(resolve) { 
    setTimeout(function() { 
      resolve()
    }, ms)
})
}

window.onload = function() {
  $('.wrap').addClass('is-show');
  $(".js-loading").delay(1500).fadeOut(800,function(){
    $(this).remove();
    sleep(10)
    .then(function() {
      $('.message1').addClass('is-show');
      return sleep(100)
    }).then(function() {
      $('.bnr').addClass('is-show');
    })
    // setTimeout(function () {
    //   $('.scene1').addClass('is-show');
    // }, 2500);
    // $('.bnr').addClass('is-show');
  });
};