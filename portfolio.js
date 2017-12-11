function loading (){
  $('#head').fadeOut(700).css('display', 'none');
  $('#loading').fadeIn(700).css('display', 'block');
  $('#loading').delay(600).fadeOut(600);
  $('#mainBody').hide();
  $('#mainBody').delay(1000).fadeIn(1000);
}

$('#head_top_left').click(function() {
  loading()
})

$('#head_bottom_left').click(function() {
  loading()
})

$('#head_top_right').click(function() {
  loading()
})

$('#head_bottom_right').click(function() {
  loading()
})

$('#head_bottom').click(function() {
  loading()
})


$(window).scroll(function() {
if ($(this).scrollTop() > 50 ) {
    $('.scrolltop:hidden').stop(true, true).fadeIn();
} else {
    $('.scrolltop').stop(true, true).fadeOut();
}
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})})
