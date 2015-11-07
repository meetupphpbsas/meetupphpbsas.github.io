$(function() {
    // Init Skrollr
    /*var sk = skrollr.init({
        smoothScrolling: false,
        mobileDeceleration: 0.004
    });*/









    // Setup variables
    $window = $(window);
    $slide = $('.homeSlide');
    $slideTall = $('.homeSlideTall');
    $slideTall2 = $('.homeSlideTall2');
    $body = $('body');

    //FadeIn all sections
    $body.imagesLoaded( function() {
        setTimeout(function() {

              // Resize sections
              adjustWindow();

              // Fade in sections
              $body.removeClass('loading').addClass('loaded');

        }, 800);
    });

    function adjustWindow(){

        // Init Skrollr
        var s = skrollr.init({
            render: function(data) {

                //Debugging - Log the current scroll position.
                //console.log(data.curTop);
            }
        });

        // Get window size
        winH = $window.height();

        // Keep minimum height 550
        if(winH <= 550) {
            winH = 550;
        }

        // Resize our slides
        $slide.height(winH);
        $slideTall.height(winH*2);
        $slideTall2.height(winH*3);

        // Refresh Skrollr after resizing our sections
        s.refresh($('.homeSlide'));

    }
    
});
