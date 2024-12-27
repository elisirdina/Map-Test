let map;
function initMap() {
    map = new google.maps.Map(document.getElementById("map1"), {
        center: { lat: 28.70, lng: 77.10 },
        zoom: 8,
        mapTypeId: "terrain"
    });
    new google.maps.Marker({
        position: { lat: 28.70, lng: 77.10 },
        map: map,
        label: "A",
        title: "New Delhi",
        draggeable: false,
        animation: google.maps.Animation.DROP
    });
}