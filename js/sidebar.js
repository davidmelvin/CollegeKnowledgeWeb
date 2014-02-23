var locations = [
  ['The College of New Jersey',40.268835,-74.78091,"2000 Pennington Rd, Ewing Township, NJ 08618", 0.46,7270,14378,550,650,580,680,560,670,0.43,0.8,0.72,0.94],
  ['Rider University',40.279189,-74.732546,"2083 Lawrenceville Rd, Lawrence Township, NJ 08648", 0.72,5485,33420,420,500,400,520,420,510,0.51,0.6,0.88,0.98],
  ['Princeton University',40.343989,-74.651448, "Princeton University, Princeton, N.J. 08544", 0.08,7975,39537,700,790,710,800,710,800,0.42,0.98,0.57,0.76],
  ['Rutgers Universty at New Brunswick',40.500657,-74.449317,"56 College Ave, New Brunswick, New Jersey 08901", 0.61,40434,130732,520,630,560,680,540,650,0.51,0.79,0.57,0.91]
];
$(document).ready(function(){
    for (i = 0; i < locations.length; i++){
        $('div#sidebar').append("<div id=" + i + "><h2>" + locations[i][0]  + 
            "</h2><p id='collegeAddress'>" + locations[i][3] + "</p></div>" +
            "<a href='#'>Show more</a>");
    }

});