"use strict";

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    console.log(position);
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    
    fetch(`https://api.seatgeek.com/2/venues?lat=${lat}&lon=${long}&client_id=${clientId}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    }
    )
    .catch(error => console.log(error));
    
}
getLocation();









