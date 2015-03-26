$(function() {
    
    // Clock
    var data = {
        count_past_zero: false,
        circle_bg_color: "#3D7B94",
        fg_width: 0.02,
        bg_width: 0.2,
        time: {

            Days: {
                text: "Dias",
                color: "#3D7B94",
                show: true
            },
            Hours: {
                text: "Horas",
                color: "#3D7B94",
                show: true
            },
            Minutes: {
                text: "Minutos",
                color: "#3D7B94",
                show: true
            },
            Seconds: {
                text: "Segundos",
                color: "#3D7B94",
                show: true
            }
        }
    };
    $(".countdownClock").TimeCircles(data);

    $(window).resize(function(){
        $(".countdownClock").TimeCircles().rebuild();
    });

    
    var infowindow = new google.maps.InfoWindow({
        content: "<b>IT Master</b><br>Av Rivadavia 5040, Buenos Aires."
    });
    var myLatlng = new google.maps.LatLng(-34.6185322, -58.4369542);
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
    
});
