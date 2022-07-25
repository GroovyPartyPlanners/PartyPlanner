


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
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2VhdG9uaHV0dG8iLCJhIjoiY2wycWw3cWRnMDFwOTNqcGFwbDhqZTh6aCJ9.JA4KRbfaB02VWnaD8Ecs7g';
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2VhdG9uaHV0dG8iLCJhIjoiY2wycWw3cWRnMDFwOTNqcGFwbDhqZTh6aCJ9.JA4KRbfaB02VWnaD8Ecs7g';
    const coordinates = document.getElementById('coordinates');
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [long, lat],
        zoom: 8
    });

    const marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([long, lat])
        .addTo(map);

    function onDragEnd() {
        const lngLat = marker.getLngLat();
        let lat = lngLat.lat;
        let lng = lngLat.lng;
        console.log(lat, lng);
// coordinates.style.display = 'block';
// coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
        fetch(`https://api.seatgeek.com/2/events?lat=${lat}&lon=${lng}&client_id=${clientId}`)
            .then(response => response.json())
            .then(data => {
                    console.log(data);
                    var events ='';
                    var eventsDate = '';
                    var eventsLocation = '';
                    var eventsCity = '';
                    var eventImage = '';
                    for(var i = 0; i < data.events.length; i++) {
                        events += `<h1>${data.events[i].title}`+" "+`${data.events[i].venue.name}`+" "+`${data.events[i].venue.display_location}</h1>`
                        eventsLocation += `<h1>${data.events[i].venue.display_location}</h1>`

                    }
                    document.getElementById("eventTitle").innerHTML = events
                }

            )
            .catch(error => console.log(error));
    }

    marker.on('dragend', onDragEnd);

    fetch(`https://api.seatgeek.com/2/events?lat=${lat}&lon=${long}&client_id=${clientId}`)
        .then(response => response.json())
        .then(data => {
                console.log(data);
                var events ='';
                var eventsDate = '';
                var eventsLocation = '';
                var eventsCity = '';
                var eventImage = '';
                for(var i = 0; i < data.events.length; i++) {
                    events += `<h1>${data.events[i].title}`+" "+`${data.events[i].venue.name}`+" "+`${data.events[i].venue.display_location}`+" Date: "+`${data.events[i].datetime_local}`+" Popularity "+ `${data.events[i].popularity}`+`<a href="/parties" th:href="@{/parties}">Click</a></h1>`

                }
                document.getElementById("eventTitle").innerHTML = events
            }

        )
        .catch(error => console.log(error));

}
getLocation();

// google.maps.event.addDomListener(window, 'load', function () {
//     var places = new google.maps.places.Autocomplete(document.getElementById('search'));
//     google.maps.event.addListener(places, 'place_changed', function () {
//         var city = places.getPlace().address_components[0].long_name;
//         var state = places.getPlace().address_components[2].short_name
//         var fulladdres = places.getPlace().formatted_address;        
//          fetch(`https://api.seatgeek.com/2/events?venue.state=${state}&venue.city=${city}&client_id=${clientId}`)

//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 var events ='';
//                 var eventsDate = '';
//                 var eventsLocation = '';
//                 var eventsCity = '';
//                 var eventImage = '';
//                 for(var i = 0; i < data.events.length; i++) {
//                     events += `<h1>${data.events[i].title}`+" "+`${data.events[i].venue.name}`+" "+`${data.events[i].venue.display_location}</h1>`
//                     eventsLocation += `<h1>${data.events[i].venue.display_location}</h1>`
//                 }
//                 document.getElementById("eventTitle").innerHTML = events
//             }
//             )
//             .catch(error => console.log(error));
//     });
// });
document.getElementById('search-btn').addEventListener('click', function (e){
    e.preventDefault();

    var type = document.getElementById("type").value
    var search = document.getElementById("search").value
    console.log(search)
    fetch(`https://api.seatgeek.com/2/events?q=${search}&type=${type}&client_id=${clientId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var events ='';
            var eventsDate = '';
            var eventsLocation = '';
            var eventsCity = '';
            var eventImage = '';
            for(var i = 0; i < data.events.length; i++) {
                events += `<h1>${data.events[i].title}`+" "+`${data.events[i].venue.name}`+" "+`${data.events[i].venue.display_location}</h1>`
                eventsLocation += `<h1>${data.events[i].venue.display_location}</h1>`
            }
            document.getElementById("eventTitle").innerHTML = events
        })
        .catch(error => console.log(error));
});








