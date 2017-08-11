var map;
function initMap() {
    var myLoc = {lat: 38.6450919, lng: -121.161911}; 
    map = new google.maps.Map(document.getElementById('map'), {
      center: myLoc,
      zoom: 14
    });
    
    var marker = new google.maps.Marker({
        'position': myLoc,
        'map': map,
        'title': 'Intel Corporation'
    });
    
    var contentString = 'Intel Corporation<br>';
        contentString += '1900 Prarie City Rd<br>';
        contentString += 'Folsom, CA 95630';
    
    var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
    
    marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
  }
