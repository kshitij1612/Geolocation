// check for Geolocation support
if (navigator.geolocation) { console.log('Geolocation is supported!'); }
else { console.log('Geolocation is not supported for this Browser/OS.'); }

function getlocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPos, showErr);
    }
    else {
        alert("Sorry! your Browser does not support Geolocation API")
    }
}
//Showing Current Poistion on Google Map
function showPos(position) {
    latt = position.coords.latitude;
    long = position.coords.longitude;
    var lattlong = new google.maps.LatLng(latt, long);
    var myOptions = {
        center: lattlong,
        zoom: 15,
        mapTypeControl: true,
        navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL }
    }
    var maps = new google.maps.Map(document.getElementById("demo"), myOptions);
    var markers = new google.maps.Marker({ position: lattlong, map: maps, title: "You are here!" });
}

/*function get_location() { console.log("get_location") }

function locationNew() {
    console.log("Inside location_new");
    var startPos;
    var geoSuccess = function (position) {
        startPos = position;
        console.log("in between locationNew");
        document.getElementById('startLat').innerHTML = startPos.coords.latitude;
        console.log("in between get element");
        document.getElementById('startLon').innerHTML = startPos.coords.longitude;
        console.log("at last locationNew");
    };
    var geoError = function (error) {
        console.log('Error occurred. Error code: ' + error.code);
        // error.code can be: 
        // 0: unknown error 
        // 1: permission denied 
        // 2: position unavailable (error response from location provider) 
        // 3: timed out }; 
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    };*/

//Handling Error and Rejection
function showErr(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation API.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("USer location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}

