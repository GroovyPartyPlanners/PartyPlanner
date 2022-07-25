


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
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
let type = document.getElementById('type').value;
let pages = document.getElementById('pages');
downvote.addEventListener('click', function() {
    fetch(`https://api.seatgeek.com/2/events?lat=${lat}&lon=${lng}&type=${type}&client_id=${clientId}`)
        .then(response => response.json())
        .then(data => {
                
                var events ='';
                total = document.getElementById('total');
                total.innerHTML = `<h1>Total Events ${data.meta.total}</h1>`
                for(var i = 0; i < data.events.length; i++) {
                    var popularity = data.events[i].popularity;
                    var popularitySort = data.events.sort((a, b) => a.popularity - b.popularity);
                    
                    events += `<h1>${data.events[i].title}`+" "+`${data.events[i].venue.name}`+" "+`${data.events[i].venue.display_location}`+" Date: "+`${data.events[i].datetime_local}`+" Popularity "+ `${data.events[i].popularity}</h1>`   
                }
                for(var i = 0; i < 1; i++) {
                    if(data.meta.total>=11){
                        pages = document.getElementById('pages');
                        let pagesCount = Math.ceil(data.meta.total/10);
                        console.log(pagesCount);
                        for(let i = 0; i < pagesCount; i++){
                            pages.innerHTML += `<a href="#" onclick="page(${i})">`+" "+`${i+1}</a>`
                        }
                    }
                document.getElementById("eventTitle").innerHTML = events 
            }})
            .catch(error => console.log(error));
});
upvote.addEventListener('click', function() {
    fetch(`https://api.seatgeek.com/2/events?lat=${lat}&lon=${lng}&type=${type}&client_id=${clientId}`)
        .then(response => response.json())
        .then(data => {
                
                var events ='';
                total = document.getElementById('total');
                total.innerHTML = `<h1>Total Events ${data.meta.total}</h1>`
                for(var i = 0; i < data.events.length; i++) {
                    var popularity = data.events[i].popularity;
                    var popularitySort = data.events.sort((a, b) => b.popularity - a.popularity);
                    events += `<h1>${data.events[i].title}`+" "+`${data.events[i].venue.name}`+" "+`${data.events[i].venue.display_location}`+" Date: "+`${data.events[i].datetime_local}`+" Popularity "+ `${data.events[i].popularity}</h1>`
                    
                }
                for(var i = 0; i < 1; i++) {
                    if(data.meta.total>=11){
                        pages = document.getElementById('pages');
                        let pagesCount = Math.ceil(data.meta.total/10);
                        console.log(pagesCount);
                        for(let i = 0; i < pagesCount; i++){
                            pages.innerHTML += `<a href="#" onclick="page(${i})">`+" "+`${i+1}</a>`
                        }
                    }
                document.getElementById("eventTitle").innerHTML = events 
            }})
            .catch(error => console.log(error));
});
fetch(`https://api.seatgeek.com/2/events?lat=${lat}&lon=${lng}&type=${type}&client_id=${clientId}`)
        .then(response => response.json())
        .then(data => {
                
                var events ='';
                var popularity = '';
                total = document.getElementById('total');
                total.innerHTML = `<h1>Total Events ${data.meta.total}</h1>`
                for(var i = 0; i < data.events.length; i++) {
                    
                    events += `<h1>${data.events[i].title}`+" "+`${data.events[i].venue.name}`+" "+`${data.events[i].venue.display_location}`+" Date: "+`${data.events[i].datetime_local}`+" Popularity "+ `${data.events[i].popularity}</h1>`
  
                }
                for(var i = 0; i < 1; i++) {
                    if(data.meta.total>=11){
                        pages = document.getElementById('pages');
                        let pagesCount = Math.ceil(data.meta.total/10);
                        console.log(pagesCount);
                        for(let i = 0; i < pagesCount; i++){
                            pages.innerHTML += `<a href="#" onclick="page(${i})">`+" "+`${i+1}</a>`
                        }
                    }
                document.getElementById("eventTitle").innerHTML = events 
                
            }}

        )
        .catch(error => console.log(error));
}
const upvote = document.getElementById('upvote');
const downvote = document.getElementById('downvote');

upvote.addEventListener('click', function() {
    

    fetch(`https://api.seatgeek.com/2/events?lat=${lat}&lon=${long}&client_id=${clientId}`)
        .then(response => response.json())
        .then(data => {
            
                var events ='';
                total = document.getElementById('total');
                total.innerHTML = `<h1>Total Events ${data.meta.total}</h1>`
                for(var i = 0; i < data.events.length; i++) {
                    var popularity = data.events[i].popularity;
                    var popularitySort = data.events.sort((a, b) => b.popularity - a.popularity);
                    events += `<h1>${data.events[i].title}`+" "+`${data.events[i].venue.name}`+" "+`${data.events[i].venue.display_location}`+" Date: "+`${data.events[i].datetime_local}`+" Popularity "+ `${data.events[i].popularity}</h1>` 
                    
                }
                for(var i = 0; i < 1; i++) {
                    if(data.meta.total>=11){
                        pages = document.getElementById('pages');
                        let pagesCount = Math.ceil(data.meta.total/10);
                        console.log(pagesCount);
                        for(let i = 0; i < pagesCount; i++){
                            pages.innerHTML += `<a href="#" onclick="page(${i})">`+" "+`${i+1}</a>`
                        }
                    }
                document.getElementById("eventTitle").innerHTML = events 
            }})
            .catch(error => console.log(error));
});
downvote.addEventListener('click', function() {
    fetch(`https://api.seatgeek.com/2/events?lat=${lat}&lon=${long}&client_id=${clientId}`)
        .then(response => response.json())
        .then(data => {
                
                var events ='';
                total = document.getElementById('total');
                total.innerHTML = `<h1>Total Events ${data.meta.total}</h1>`
                for(var i = 0; i < data.events.length; i++) {
                    var popularity = data.events[i].popularity;
                    var popularitySort = data.events.sort((a, b) => a.popularity - b.popularity);
                    events += `<h1>${data.events[i].title}`+" "+`${data.events[i].venue.name}`+" "+`${data.events[i].venue.display_location}`+" Date: "+`${data.events[i].datetime_local}`+" Popularity "+ `${data.events[i].popularity}</h1>` 
                    
                }
                for(var i = 0; i < 1; i++) {
                    if(data.meta.total>=11){
                        pages = document.getElementById('pages');
                        let pagesCount = Math.ceil(data.meta.total/10);
                        console.log(pagesCount);
                        for(let i = 0; i < pagesCount; i++){
                            pages.innerHTML += `<a href="#" onclick="page(${i})">`+" "+`${i+1}</a>`
                        }
                    }
                document.getElementById("eventTitle").innerHTML = events 
            }})
            .catch(error => console.log(error));
});
marker.on('dragend', onDragEnd);

    fetch(`https://api.seatgeek.com/2/events?lat=${lat}&lon=${long}&type=comedy&client_id=${clientId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
                var events ='';
                total = document.getElementById('total');
                total.innerHTML = `<h1>Total Events ${data.meta.total}</h1>`
                for(var i = 0; i < data.events.length; i++) {
                events += `<h1>${data.events[i].title}`+" "+`${data.events[i].venue.name}`+" "+`${data.events[i].venue.display_location}`+" Date: "+`${data.events[i].datetime_local}`+" Popularity "+ `${data.events[i].popularity}</h1>`
                }
                
                for(var i = 0; i < 1; i++) {
                    if(data.meta.total>=11){
                        pages = document.getElementById('pages');
                        let pagesCount = Math.ceil(data.meta.total/10);
                        console.log(pagesCount);
                        for(let i = 0; i < pagesCount; i++){
                            pages.innerHTML += `<a href="#" onclick="page(${i})">`+" "+`${i+1}</a>`
                        }
                    }
                    
                    
                }
                document.getElementById("eventTitle").innerHTML = events
                
            }

        )
        .catch(error => console.log(error));

}
getLocation();


document.getElementById('search-btn').addEventListener('click', function (e){
    e.preventDefault();
    downvote.addEventListener('click', function() {
        fetch(`https://api.seatgeek.com/2/events?q=${search}&type=${type}&range=${range}mi&client_id=${clientId}`)
            .then(response => response.json())
            .then(data => {
                    
                    var events ='';
                    total = document.getElementById('total');
                    total.innerHTML = `<h1>Total Events ${data.meta.total}</h1>`
                    
                    for(var i = 0; i < data.events.length; i++) {
                        var popularity = data.events[i].popularity;
                        var popularitySort = data.events.sort((a, b) => a.popularity - b.popularity);
                        events += `<h1>${data.events[i].title}`+" "+`${data.events[i].venue.name}`+" "+`${data.events[i].venue.display_location}`+" Date: "+`${data.events[i].datetime_local}`+" Popularity "+ `${data.events[i].popularity}</h1>` 
                        
                    }
                    for(var i = 0; i < 1; i++) {
                        if(data.meta.total>=11){
                            pages = document.getElementById('pages');
                            let pagesCount = Math.ceil(data.meta.total/10);
                            console.log(pagesCount);
                            for(let i = 0; i < pagesCount; i++){
                                pages.innerHTML += `<a href="#" onclick="page(${i})">`+" "+`${i+1}</a>`
                            }
                        }
                    document.getElementById("eventTitle").innerHTML = events 
                }})
                .catch(error => console.log(error));
    });
    upvote.addEventListener('click', function() {
        fetch(`https://api.seatgeek.com/2/events?q=${search}&type=${type}&range=${range}mi&client_id=${clientId}`)
            .then(response => response.json())
            .then(data => {
                    
                    var events ='';
                    total = document.getElementById('total');
                total.innerHTML = `<h1>Total Events ${data.meta.total}</h1>`
                    for(var i = 0; i < data.events.length; i++) {
                        var popularity = data.events[i].popularity;
                        var popularitySort = data.events.sort((a, b) => b.popularity - a.popularity);
                        events += `<h1>${data.events[i].title}`+" "+`${data.events[i].venue.name}`+" "+`${data.events[i].venue.display_location}`+" Date: "+`${data.events[i].datetime_local}`+" Popularity "+ `${data.events[i].popularity}</h1>` 
                        
                    }
                    for(var i = 0; i < 1; i++) {
                        if(data.meta.total>=11){
                            pages = document.getElementById('pages');
                            let pagesCount = Math.ceil(data.meta.total/10);
                            console.log(pagesCount);
                            for(let i = 0; i < pagesCount; i++){
                                pages.innerHTML += `<a href="#" onclick="page(${i})">`+" "+`${i+1}</a>`
                            }
                        }
                    document.getElementById("eventTitle").innerHTML = events 
                }})
                .catch(error => console.log(error));
    });
    var type = document.getElementById("type").value
    var search = document.getElementById("search").value
    var range = document.getElementById("radius").value
    fetch(`https://api.seatgeek.com/2/events?q=${search}&type=${type}&range=${range}mi&client_id=${clientId}`)
        .then(response => response.json())
        .then(data => {
                
                var events ='';
                
                total = document.getElementById('total');
                total.innerHTML = `<h1>Total Events ${data.meta.total}</h1>`
                for(var i = 0; i < data.events.length; i++) {
                    events += `<h1>${data.events[i].title}`+" "+`${data.events[i].venue.name}`+" "+`${data.events[i].venue.display_location}`+" Date: "+`${data.events[i].datetime_local}`+" Popularity "+ `${data.events[i].popularity}</h1>`
                }
                for(var i = 0; i < 1; i++) {
                    if(data.meta.total>=11){
                        pages = document.getElementById('pages');
                        let pagesCount = Math.ceil(data.meta.total/10);
                        console.log(pagesCount);
                        for(let i = 0; i < pagesCount; i++){
                            pages.innerHTML += `<a href="#" onclick="page(${i})">`+" "+`${i+1}</a>`
                        }
                    }
                document.getElementById("eventTitle").innerHTML = events
            }})
            .catch(error => console.log(error));
});






