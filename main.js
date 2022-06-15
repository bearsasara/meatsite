$(function($){
    $(window).scroll(function(){
        var targetElement = $('.fadein').offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight + 200){
            $('.fadein').css('opacity','1');
            $('.fadein').css('transform','translateY(0)');
        }
    });

        $(".inview").on("inview", function (event, isInView) {
          if (isInView) {
            $(this).stop().addClass("is_show");
          } else {
            $(this).stop().removeClass("is_show");
          }
        });
});