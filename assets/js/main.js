$(function() {
    /** ****************************************
     * Clock - Countdown
     **************************************** */
    var data = {
        count_past_zero: false,
        //circle_bg_color: "#3D7B94",
        circle_bg_color: "#3e7b95",
        fg_width: 0.02,
        bg_width: 0.2,
        time: {

            Days: {
                text: "Dias",
                //color: "#3D7B94",
                color: "#3e7b95",
                show: true
            },
            Hours: {
                text: "Horas",
                //color: "#3D7B94",
                color: "#3e7b95",
                show: true
            },
            Minutes: {
                text: "Minutos",
                //color: "#3D7B94",
                color: "#3e7b95",
                show: true
            },
            Seconds: {
                text: "Segundos",
                //color: "#3D7B94",
                color: "#3e7b95",
                show: true
            }
        }
    };
    $(".countdownClock").TimeCircles(data);
    $(window).resize(function(){
        $(".countdownClock").TimeCircles().rebuild();
    });

    /** ****************************************
     * Parallax
     **************************************** */
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
        var s = skrollr.init({});
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


    /** ****************************************
     * Google Maps
     **************************************** */
    var infowindow = new google.maps.InfoWindow({
        content: "<span class='infowin'><b>Espacio Wayra</b><br>Costa Rica 5546.</span>"
    });
    var myLatlng = new google.maps.LatLng(-34.582819, -58.434146);
    var mapOptions = {
        center: myLatlng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        draggable: false, 
        scrollwheel: false, 
        disableDoubleClickZoom: true,
        zoomControl: true,
        streetViewControl:true,
        panControl: true,
        panControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        },
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        },
        streetViewControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        }
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'IT Master'
    });
    infowindow.open(map,marker);













    stLight.options({publisher: "5adeefc8-b469-405f-9429-4c60792df37e", doNotHash: false, doNotCopy: false, hashAddressBar: false});
    var options = {
        "publisher": "5adeefc8-b469-405f-9429-4c60792df37e", 
        "position": "right", 
        "ad": { 
            "visible": false, 
            "openDelay": 5, 
            "closeDelay": 0
        }, 
        "chicklets": { 
            "items": ["facebook", "twitter", "linkedin", "sharethis"]
        }
    };
    var st_hover_widget = new sharethis.widgets.hoverbuttons(options);
});
