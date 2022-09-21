let myMap = L.map('myMap').setView([10.01620986717804, -84.10739657709694],19);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(myMap);

var marker = L.marker([10.01620986717804, -84.10739657709694]).addTo(myMap);
marker.bindPopup("<b>Condominio Las Angarillas</b><br>").openPopup();

let iconMarker = L.icon({
    iconUrl: 'luz.png',
    iconSize: [20, 20],
    iconAnchor: [5, 20]
});

L.marker([10.01577,-84.10784], { icon: iconMarker }).addTo(myMap)
L.marker([10.01577,-84.10742], { icon: iconMarker }).addTo(myMap)
L.marker([10.01582, -84.10724], { icon: iconMarker }).addTo(myMap)
L.marker([10.01597, -84.10703], { icon: iconMarker }).addTo(myMap)
L.marker([10.01597, -84.10703], { icon: iconMarker }).addTo(myMap)
L.marker([10.01621, -84.1067], { icon: iconMarker }).addTo(myMap)
L.marker([10.01623, -84.10684], { icon: iconMarker }).addTo(myMap)
L.marker([10.01616, -84.10709], { icon: iconMarker }).addTo(myMap)
L.marker([10.01609, -84.10727], { icon: iconMarker }).addTo(myMap)
L.marker([10.01598, -84.10745], { icon: iconMarker }).addTo(myMap)
L.marker([10.01621, -84.10762], { icon: iconMarker }).addTo(myMap)
L.marker([10.01636, -84.10745], { icon: iconMarker }).addTo(myMap)
L.marker([10.01659, -84.10723], { icon: iconMarker }).addTo(myMap)
L.marker([10.01668, -84.10709], { icon: iconMarker }).addTo(myMap)
L.marker([10.01703, -84.10734], { icon: iconMarker }).addTo(myMap)
L.marker([10.01716, -84.10734], { icon: iconMarker }).addTo(myMap)
L.marker([10.01692, -84.10757], { icon: iconMarker }).addTo(myMap)
L.marker([10.0166, -84.10788], { icon: iconMarker }).addTo(myMap)





