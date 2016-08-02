var myOptions;
var map;
var center;
var infowindow;
var Andrew;
var Porter_Square;
var Harvard_Square;
var JFK_UMASS;
var Savin_Hill;
var Park_Street;
var Broadway;
var North_Quincy;
var Shawmut;
var Davis;
var Alewife;
var Kendall_MIT;
var Charles_MGH;
var Downtown_Crossing;
var Quincy_Center;
var Quincy_Adams;
var Ashmont;
var Wollaston;
var Fields_Corner;
var Central_Square;
var Braintree;
var stations = [];

function init()
{
    center = new google.maps.LatLng(42.352271, -71.0552420000001);

    myOptions = {
	zoom: 13,
	center: center,
	mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    var image = 'subway.jpg';
    
    South_Station = new google.maps.Marker({
	 position: center,
	 map: map,
	 icon: image,
	 title: "South Station"
    })
    stations.push(South_Station);

    Andrew = new google.maps.Marker({
	 position: new google.maps.LatLng(42.330154, -71.057655),
	 map: map,
	 icon: image,
	 title: "Andrew"
    })
    stations.push(Andrew);

     Porter_Square = new google.maps.Marker({
	 position: new google.maps.LatLng(42.3884, -71.11914899999999),
	 map: map,
	 icon: image,
	 title: "Porter Square"
     })
    stations.push(Porter_Square);

     Harvard_Square = new google.maps.Marker({
	 position: new google.maps.LatLng(42.373362, -71.118956),
	 map: map,
	 icon: image,
	 title: "Havard Square"
     })
    stations.push(Harvard_Square);

     JFK_UMASS = new google.maps.Marker({
	 position: new google.maps.LatLng(42.320685, -71.052391),
	 map: map,
	 icon: image,
	 title: "JFK/UMass"
     })
    stations.push(JFK_UMASS);

     Savin_Hill = new google.maps.Marker({
	 position: new google.maps.LatLng(42.31129, -71.053331),
	 map: map,
	 icon: image,
	 title: "Savin Hill"
     })
    stations.push(Savin_Hill);

     Park_Street = new google.maps.Marker({
	 position: new google.maps.LatLng(42.35639457, -71.0624242),
	 map: map,
	 icon: image,
	 title: "Park Street"
     })
    stations.push(Park_Street);

     Broadway = new google.maps.Marker({
	 position: new google.maps.LatLng(42.342622, -71.056967),
	 map: map,
	 icon: image,
	 title: "Broadway"
     })
    stations.push(Broadway);

     North_Quincy = new google.maps.Marker({
	 position: new google.maps.LatLng(42.275275, -71.029583),
	 map: map,
	 icon: image,
	 title: "North Quincy"
     })
    stations.push(North_Quincy);

     Shawmut = new google.maps.Marker({
	 position: new google.maps.LatLng(42.29312583, -71.06573796000001),
	 map: map,
	 icon: image,
	 title: "Shawmut"
     })
    stations.push(Shawmut);

     Davis = new google.maps.Marker({
	 position: new google.maps.LatLng(42.39674, -71.121815),
	 map: map,
	 icon: image,
	 title: "Davis"
     })
    stations.push(Davis);

     Alewife = new google.maps.Marker({
	 position: new google.maps.LatLng(42.395428, -71.142483),
	 map: map,
	 icon: image,
	 title: "Alewife"
     })
    stations.push(Alewife);

     Kendall_MIT = new google.maps.Marker({
	 position: new google.maps.LatLng(42.36249079, -71.08617653),
	 map: map,
	 icon: image,
	 title: "Kendall/MIT"
     })
    stations.push(Kendall_MIT);

     Charles_MGH = new google.maps.Marker({
	 position: new google.maps.LatLng(42.361166, -71.070628),
	 map: map,
	 icon: image,
	 title: "Charles/MGH"
     })
    stations.push(Charles_MGH);

     Downtown_Crossing = new google.maps.Marker({
	 position: new google.maps.LatLng(42.355518, -71.060225),
	 map: map,
	 icon: image,
	 title: "Downtown Crossing"
     })
    stations.push(Downtown_Crossing);

     Quincy_Center = new google.maps.Marker({
	 position: new google.maps.LatLng(42.251809, -71.005409),
	 map: map,
	 icon: image,
	 title: "Quincy Center"
     })
    stations.push(Quincy_Center);

     Quincy_Adams = new google.maps.Marker({
	 position: new google.maps.LatLng(42.233391, -71.007153),
	 map: map,
	 icon: image,
	 title: "Quincy Adams"
     })
    stations.push(Quincy_Adams);

     Ashmont = new google.maps.Marker({
	 position: new google.maps.LatLng(42.284652, -71.06448899999999),
	 map: map,
	 icon: image,
	 title: "Ashmont"
     })
    stations.push(Ashmont);

     Wollaston  = new google.maps.Marker({
	 position: new google.maps.LatLng(42.2665139, -71.0203369),
	 map: map,
	 icon: image,
	 title: "Wollaston"
     })
    stations.push(Wollaston);

     Fields_Corner = new google.maps.Marker({
	 position: new google.maps.LatLng(42.300093, -71.061667),
	 map: map,
	 icon: image,
	 title: "Fields Corner"
     })
    stations.push(Fields_Corner);

     Central_Square = new google.maps.Marker({
	 position: new google.maps.LatLng(42.365486, -71.103802),
	 map: map,
	 icon: image,
	 title: "Central Square"
     })
    stations.push(Central_Square);

     Braintree = new google.maps.Marker({
	 position: new google.maps.LatLng(42.2078543, -71.0011385),
	 map: map,
	 icon: image,
	 title: "Braintree"
     })
    stations.push(Braintree);

     var AlewifeToJFKCoordinates = [
	 Alewife.position,
	 Davis.position,
	 Porter_Square.position,
	 Harvard_Square.position,
	 Central_Square.position,
	 Kendall_MIT.position,
	 Charles_MGH.position,
	 Park_Street.position,
	 Downtown_Crossing.position,
	 South_Station.position,
	 Broadway.position,
	 Andrew.position,
	 JFK_UMASS.position
     ];

     var AlewifeToJFK = new google.maps.Polyline({
	 path: AlewifeToJFKCoordinates,
	 strokeColor: 'red',
	 strokeOpacity: 1.0,
	 strokeWeight: 2,
	 map: map
     });

     var JFKToAshmontCoordinates = [
	 JFK_UMASS.position,
	 Savin_Hill.position,
	 Fields_Corner.position,
	 Shawmut.position,
	 Ashmont.position
     ];

     var JFKToAshmont = new google.maps.Polyline({
	 path: JFKToAshmontCoordinates,
	 strokeColor: 'red',
	 strokeOpacity: 1.0,
	 strokeWeight: 2,
	 map: map
     });

     var JFKToBraintreeCoordinates = [
	 JFK_UMASS.position,
	 North_Quincy.position,
	 Wollaston.position,
	 Quincy_Center.position,
	 Quincy_Adams.position,
	 Braintree.position
     ];

     var JFKToAshmont = new google.maps.Polyline({
	 path: JFKToBraintreeCoordinates,
	 strokeColor: 'red',
	 strokeOpacity: 1.0,
	 strokeWeight: 2,
	 map: map
     });

    infowindow = new google.maps.InfoWindow();

    request = new XMLHttpRequest();
    request.open("GET", "https://powerful-depths-66091.herokuapp.com/redline.json", true);
    request.onreadystatechange = callme;
    request.send(null);

    function callme() {
	if (request.readyState == 4 && request.status == 200) {
	    raw = request.responseText;
	    theScheduleData = JSON.parse(raw);
	    for (i=0; i < stations.length; i++) {
		stations[i].addListener('click', function() {
		    var content = "Upcoming trains to " + this.title + ": <br>"
		    for (j=0; j < theScheduleData["TripList"]["Trips"].length; j++) {
			for(k=0; k<theScheduleData["TripList"]["Trips"][j]["Predictions"].length; k++) {
			    if (theScheduleData["TripList"]["Trips"][j]["Predictions"][k].Stop == this.title) {
				content += "Train arriving in " + theScheduleData["TripList"]["Trips"][j]["Predictions"][k].Seconds + " seconds.<br>";
			    }
			}
		    }
		    infowindow.setContent(content);
		    infowindow.open(map, this);
		});
	    }
	}
    }

    getMyLocation();

 }

var lat1 = 0;
var lon1 = 0;

function getMyLocation() {
    if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
	    lat1 = position.coords.latitude;
	    lon1 = position.coords.longitude;
	    PlaceMarker();
	    NearestStation();
	});
    }
    else {
	alert("Geolocation not supported");
    }
}

var me;

function PlaceMarker() {
    me = new google.maps.Marker({
	position: new google.maps.LatLng(lat1, lon1),
	map: map,
	title: "You are here"
    });
}

var lat2;
var lon2;
var distToClosestStation;
var distToCurrentStation;

function NearestStation() {
    var stationsLength = stations.length;
    var closestStation;

    lat2 = stations[0].getPosition().lat();
    lon2 = stations[0].getPosition().lng();
    Haversine();
    distToClosestStation = distToCurrentStation;
    closestStation = stations[0];
    
    for (var i=1; i < stationsLength; i++) {
	lat2 = stations[i].getPosition().lat();
	lon2 = stations[i].getPosition().lng();
	Haversine();
	if (distToCurrentStation < distToClosestStation) {
	    distToClosestStation = distToCurrentStation;
	    closestStation = stations[i];
	}
    }

    distToClosestStation *= 0.621371; //km to mi
	
    google.maps.event.addListener(me, 'click', function() {
	infowindow.setContent("Closest Station: " + closestStation.title + " - " + distToClosestStation.toFixed(2) + "mi");
	infowindow.open(map, me);
    });

     var ToClosestStation = new google.maps.Polyline({
	 path: [me.position, closestStation.position],
	 strokeColor: 'black',
	 strokeOpacity: 1.0,
	 strokeWeight: 2,
	 map: map
     });    
    
}

// Taken from StackOverflow
function Haversine() {
    Number.prototype.toRad = function() {
	return this * Math.PI / 180;
    }

    var R = 6371;
    var x1 = lat2-lat1;
    var dLat = x1.toRad();  
    var x2 = lon2-lon1;
    var dLon = x2.toRad();  
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
                Math.sin(dLon/2) * Math.sin(dLon/2);  
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    distToCurrentStation = R * c;
}
