 var geocoder;
var map;
var locations = [
  ['The College of New Jersey',40.268835,-74.78091,0.46,7270,14378,550,650,580,680,560,670,0.43,0.8,0.72,0.94],
  ['Rider University',40.279189,-74.732546,0.72,5485,33420,420,500,400,520,420,510,0.51,0.6,0.88,0.98],
  ['Princeton University',40.343989,-74.651448,0.08,7975,39537,700,790,710,800,710,800,0.42,0.98,0.57,0.76],
  ['Rutgers Universty at New Brunswick',40.500657,-74.449317,0.61,40434,130732,520,630,560,680,540,650,0.51,0.79,0.57,0.91]
];
function initialize() {
  geocoder = new google.maps.Geocoder();

  /*
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
  */

var mapOptions = {
  center: new google.maps.LatLng(39.8282 , -98.5795),
  zoom: 4
};
 map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);
   /*var marker, i;
  for (i = 0; i < locations.length; i++) {  
         marker = new google.maps.Marker({
          position: new google.maps.LatLng(40,40),
          map: map
        });*/
  
}
google.maps.event.addDomListener(window, 'load', initialize);

function zoomOnLocation() {
    var address = document.getElementById("address").value;
   // var address = "2000 Pennington Rd Ewing Township, NJ";
   var myLatlng= [];
   for ( x = 0; x < locations.length; x++){
       myLatlng[x] = new google.maps.LatLng(locations[x][1],locations [x][2]);
   }
   
    
    console.log("lat:" + locations[0][1]);
    console.log("ong:" + locations [0][2]);
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        map.setZoom(12);

        var marker, m, c;
        for (a = 0; a < locations.length; a++){
           marker = new google.maps.Marker({
            map: map,
            position: myLatlng[a]
            //position:  google.maps.LatLng(40.268835,-74.78091)
        });

        }
        
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }