


function sleep(ms) {
  return new Promise(function(resolve) { 
    setTimeout(function() { 
      resolve()
    }, ms)
})
}

window.onload = function() {
  $('.wrap').addClass('is-show');
  $(".js-loading").delay(1000).fadeOut(800,function(){
    $(this).remove();
    sleep(2000)
    .then(function() {
      $('.scene1').addClass('is-show');
      return sleep(2000)
    }).then(function() {
      $('.message1').addClass('is-show');
      return sleep(1500)
    }).then(function() {
      $('.bnr').addClass('is-show');
    })

  });
};
