var map = L.map('map').setView([51.505, -0.09], 13);

//L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);



var layer = new L.TileLayer('http://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png');
map.addLayer(layer);

L.marker([51.505, -0.09]).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('Hello World Leaflet this might be your location.')
    .openPopup();





