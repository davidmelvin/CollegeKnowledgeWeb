<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />

    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/skeleton.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/style.css">
      <script <script type="text/javascript"
      src="js/jquery-1.11.0.min.js"></script>
    <script type="text/javascript"
      src="http://maps.googleapis.com/maps/api/js?sensor=false">
    </script>
    <script type="text/javascript" src="js/loadmap.js"></script>
  </head>
  <body>
      <?php
        $lat = $_GET['lat'];
        $long = $_GET['long'];
      ?>
      
      <div id="searchPanel">
    <input id="address" type="textbox" value="Enter a City">
    <input type="button" value="Find Colleges!" onclick="zoomOnLocation()">
  </div>
    <div id="map-canvas"/>
   

  </body>
  <script type="text/javascript" src="js/loadmap.js">
      
    </script>
</html>