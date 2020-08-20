function loadMap() {
    const mymap = L.map('mapid').setView([39.8225, -105.0367], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWtlbHNleWEiLCJhIjoiY2tlMGwwZ25xMnFtazJybnhnZWRoMW9ubSJ9.3vOQluFDEQheUsEj0iexiw', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZWtlbHNleWEiLCJhIjoiY2tlMGwwZ25xMnFtazJybnhnZWRoMW9ubSJ9.3vOQluFDEQheUsEj0iexiw'
    }).addTo(mymap);

    const markerFest = L.marker([39.822421, -105.029481]).addTo(mymap);
    markerFest.bindPopup("<b>Westminster Station Food Fest</b><br><b>August 7-9, 2020</b><br>6995 Grove St<br>Westminster, CO 80030").openPopup();

    const markerSchool = L.marker([39.821844, -105.043358]).addTo(mymap);
    markerSchool.bindPopup("<b>Westminster High</b><br>6933 Raleigh St<br>Westminster, CO 80030").openPopup();
}
