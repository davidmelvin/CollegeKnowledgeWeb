 var geocoder;
var map;
var circle;
var locations = [
  ['The College of New Jersey',40.268835,-74.78091,"2000 Pennington Rd, Ewing Township, NJ 08618", 0.46,7270,14378,550,650,580,680,560,670,0.43,0.8,0.72,0.94],
  ['Rider University',40.279189,-74.732546,"2083 Lawrenceville Rd, Lawrence Township, NJ 08648", 0.72,5485,33420,420,500,400,520,420,510,0.51,0.6,0.88,0.98],
  ['Princeton University',40.343989,-74.651448, "Princeton University, Princeton, N.J. 08544", 0.08,7975,39537,700,790,710,800,710,800,0.42,0.98,0.57,0.76],
  ['Rutgers Universty at New Brunswick',40.500657,-74.449317,"56 College Ave, New Brunswick, New Jersey 08901", 0.61,40434,130732,520,630,560,680,540,650,0.51,0.79,0.57,0.91]
];

for (i = 0; i < locations.length; i++){
  if(i == 0)
  {
    $('#TCNJ').append(
   "<li>Address: "+locations[i][3]+"</li>"+
    "<li>Acceptance Rate: " +locations[i][4]+"</li>"+
    "<li>Total Enrollment: "+locations[i][5]+"</li>"+
    "<li>In-State Tuition: "+locations[i][6]+"</li>"+
    "<li>SAT Reading 25%: "+locations[i][7]+"</li> " +         
    "<li>SAT Reading 75%: "+locations[i][8]+"</li>  " +         
    "<li>SAT Math 25%: " +locations[i][9]+"</li>"+
    "<li>SAT Math 75%: "+locations[i][10]+"</li>"+
    "<li>SAT Writing 25%: "+locations[i][11]+"</li>" +
    "<li>SAT Writing 75%: "+locations[i][12]+"</li>"+
    "<li>Percent male: "+locations[i][13]+"</li>"+
    "<li>Percentage Aid: "+locations[i][14]+"</li>"+
    "<li>4 Year Graduation rate: "+locations[i][15]+" </li>"+ 
    "<li>Retention rate:"+locations[i][16]+ "</li>"+
    "</ul>"
    );
  } 
  if(i == 1)
  {
    $('#Rider').append(
   "<li>Address: "+locations[i][3]+"</li>"+
    "<li>Acceptance Rate: " +locations[i][4]+"</li>"+
    "<li>Total Enrollment: "+locations[i][5]+"</li>"+
    "<li>In-State Tuition: "+locations[i][6]+"</li>"+
    "<li>SAT Reading 25%: "+locations[i][7]+"</li> " +         
    "<li>SAT Reading 75%: "+locations[i][8]+"</li>  " +         
    "<li>SAT Math 25%: " +locations[i][9]+"</li>"+
    "<li>SAT Math 75%: "+locations[i][10]+"</li>"+
    "<li>SAT Writing 25%: "+locations[i][11]+"</li>" +
    "<li>SAT Writing 75%: "+locations[i][12]+"</li>"+
    "<li>Percent male: "+locations[i][13]+"</li>"+
    "<li>Percentage Aid: "+locations[i][14]+"</li>"+
    "<li>4 Year Graduation rate: "+locations[i][15]+" </li>"+ 
    "<li>Retention rate:"+locations[i][16]+ "</li>"+
    "</ul>"
    );
  } 
  if(i == 2)
  {
    $('#Princeton').append(
   "<li>Address: "+locations[i][3]+"</li>"+
    "<li>Acceptance Rate: " +locations[i][4]+"</li>"+
    "<li>Total Enrollment: "+locations[i][5]+"</li>"+
    "<li>In-State Tuition: "+locations[i][6]+"</li>"+
    "<li>SAT Reading 25%: "+locations[i][7]+"</li> " +         
    "<li>SAT Reading 75%: "+locations[i][8]+"</li>  " +         
    "<li>SAT Math 25%: " +locations[i][9]+"</li>"+
    "<li>SAT Math 75%: "+locations[i][10]+"</li>"+
    "<li>SAT Writing 25%: "+locations[i][11]+"</li>" +
    "<li>SAT Writing 75%: "+locations[i][12]+"</li>"+
    "<li>Percent male: "+locations[i][13]+"</li>"+
    "<li>Percentage Aid: "+locations[i][14]+"</li>"+
    "<li>4 Year Graduation rate: "+locations[i][15]+" </li>"+ 
    "<li>Retention rate:"+locations[i][16]+ "</li>"+
    "</ul>"
    );
  } 
  if(i == 3)
  {
    $('#RU').append(
   "<li>Address: "+locations[i][3]+"</li>"+
    "<li>Acceptance Rate: " +locations[i][4]+"</li>"+
    "<li>Total Enrollment: "+locations[i][5]+"</li>"+
    "<li>In-State Tuition: "+locations[i][6]+"</li>"+
    "<li>SAT Reading 25%: "+locations[i][7]+"</li> " +         
    "<li>SAT Reading 75%: "+locations[i][8]+"</li>  " +         
    "<li>SAT Math 25%: " +locations[i][9]+"</li>"+
    "<li>SAT Math 75%: "+locations[i][10]+"</li>"+
    "<li>SAT Writing 25%: "+locations[i][11]+"</li>" +
    "<li>SAT Writing 75%: "+locations[i][12]+"</li>"+
    "<li>Percent male: "+locations[i][13]+"</li>"+
    "<li>Percentage Aid: "+locations[i][14]+"</li>"+
    "<li>4 Year Graduation rate: "+locations[i][15]+" </li>"+ 
    "<li>Retention rate:"+locations[i][16]+ "</li>"+
    "</ul>"
    );
  } 
}
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

 var circleOptions = {
      fillOpacity:0,
      strokeOpacity:0,
      map:map,
      radius:15
   }

   circle = new google.maps.Circle(circleOptions);
   /*var marker, i;
  for (i = 0; i < locations.length; i++) {  
         marker = new google.maps.Marker({
          position: new google.maps.LatLng(40,40),
          map: map
        });*/
}
google.maps.event.addDomListener(window, 'load', initialize);

$('#TCNJ').hide();
$('#Rider').hide();
$('#Princeton').hide();
$('#RU').hide();

function zoomOnLocation() {
  for (i = 0; i < locations.length; i++){
        $('div#sidebar').append("<div class='showmore' id=" + i + "><a  href='#' " + "'><h2>" + locations[i][0]  + 
            "</h2></a><p id='collegeAddress'>" + locations[i][3] + "</p></div>" );
    }

    var address = document.getElementById("address").value;
    var radius = document.getElementById("radius").value;
   // var address = "2000 Pennington Rd Ewing Township, NJ";
   var myLatlng= [];
   for ( x = 0; x < locations.length; x++){
       myLatlng[x] = new google.maps.LatLng(locations[x][1],locations [x][2]);
   }    
    console.log("lat:" + locations[0][1]);
    console.log("ong:" + locations [0][2]);
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        circle.setCenter(results[0].geometry.location);
        circle.setRadius(parseFloat(radius)*804.5);
        map.setCenter(results[0].geometry.location);
        map.fitBounds(circle.getBounds());
        //map.setZoom(parseFloat(radius));

        var marker, m, c;
        for (a = 0; a < locations.length; a++){
            //if(google.maps.geometry.spherical.computeDistanceBetween(myLatlng[a], results[0].geometry.location) <= parseFloat(radius)){
              marker = new google.maps.Marker({
              map: map,
              position: myLatlng[a]
              //position:  google.maps.LatLng(40.268835,-74.78091)
              });
            //}
        }
        
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
     $(".showmore").click(function(){
        //$('div#sidebar > div').hide();
        var divid = $(this).attr('id');
        console.log(divid);
        $('div.showmore').hide();

        if(divid == 0){
            $('#TCNJ').show();
            console.log("show tcnj");
        }
        if(divid ==1){
            $('#Rider').show();
        }
        if(divid == 2){
            $('#Princeton').show();
        }
        if(divid == 3){
            $('#RU').show();
        }
        
    });
  }