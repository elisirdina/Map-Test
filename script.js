let map;
function initMap() {
    map = new google.maps.Map(document.getElementById("map1"), {
        center: { lat: 28.70, lng: 77.10 },
        zoom: 8,
        mapTypeId: "terrain"
    });
    const marker = new google.maps.marker.AdvancedMarkerElement({
        position: { lat: 28.70, lng: 77.10 },
        map: map,
        title: "New Delhi",
        draggable: false,
    });

    const infoWindow = new google.maps.InfoWindow({
        content: "<p>This is an info window</p>"
    });
    infoWindow.open(map, marker);
}