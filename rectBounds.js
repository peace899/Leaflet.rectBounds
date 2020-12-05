function rectBounds(lat, lng, height, width) {
    
    hypotenuse = Math.hypot(height, width);
    distance = hypotenuse/2;
    oppositeAngle = Math.atan(width/height)*180/Math.PI;
    swAngle = 180 - oppositeAngle;
    neAngle = 0 - oppositeAngle;

    latlng = L.latLng(lat, lng)
    var southWest = destination(latlng, swAngle, distance) //returns point L.latlng
    var northEast = destination(latlng, neAngle, distance)
    var bounds = L.latLngBounds(southWest, northEast);

    return bounds
}



bounds = rectBounds(lat, lon, height, width)
//To add rectangle to Leaflet map
//var rectangle = L.rectangle(bounds).addTo(map);
