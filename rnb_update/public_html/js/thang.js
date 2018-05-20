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




// Maps

jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize&key=AIzaSyC_4WrrXeQ1T7C9mS6phmm_D-nCAdU-t90";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'hybrid'
     // mapTypeId: 'satellite'
        // mapTypeId: 'roadmap'
      // mapTypeId: 'terrain'
    };
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);
        
    // Multiple Markers
    var markers = [
        ['Southeast Asia office', 10.7674564,106.687215],
        ['Coperate Headquarter ', 40.7651128,-73.9836765],
      ['Hong Kong office ', 22.3037397,114.1611068],
      
    ];
                        
    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Southeast Asia office</h3>' +
        '<p>1489 Nguyen Van Linh, Tan Phong Ward, District 7, Ho Chi Minh, Vietnam.</p>' +
         '<p>Tel: (123) 456-789</p>' + '<p>Email: sf@our-tb-candidate.com</p>' +'</div>'],
       ['<div class="info_content">' +
        '<h3>Coperate Headquarter</h3>' +
        '<p>1740 Broadway, New York NY 10019.</p>' +
         '<p>Tel: (123) 456-789</p>' + '<p>Email: newyork@our-tb-candidate.com</p>' +'</div>'],
      ['<div class="info_content">' +
        '<h3>1 Austin Rd W, West Kowloon, Hong Kong</h3>' +
        '<p>1740 Broadway, New York NY 10019.</p>' +
         '<p>Tel: (123) 456-789</p>' + '<p>Email: washington@our-tb-candidate.com</p>' +'</div>'],
      
    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(2);
        google.maps.event.removeListener(boundsListener);
    });
    
}