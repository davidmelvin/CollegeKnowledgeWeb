 var geocoder;
  var map;
function initialize() {
            var query=window.location.search.substring(1);
            console.log(query);
            var latstart = query.indexOf("lat=");
            var latend = query.indexOf("&");
            var lat = query.substring(latstart+4, latend);
            console.log("lat:" + lat);

            var longstart = query.indexOf("long=");
            var longend = query.indexOf("&", longstart);
            var longitude = query.substring(longstart+5, longend);
            console.log("longitude:" + longitude);


 
        var mapOptions = {
          center: new google.maps.LatLng(lat , longitude),
          zoom: 13
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);