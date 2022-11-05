let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.748440, lng: -73.985664 },
    zoom: 8,
  });
}

window.initMap = initMap;