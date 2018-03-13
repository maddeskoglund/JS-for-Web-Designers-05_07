var map;
function initMap() {
	var storeLocation1 /*1750 Vine St*/ = {lat: 34.1031131, lng: -118.326343},
		storeLocation2 /*1000 Vin Scully*/ = {lat: 34.073873, lng: -118.24077740000001},
		centerPoint = {lat: 34.0937772394951, lng: -118.27888622568359},

	map = new google.maps.Map(document.getElementById('hplus-map'), {
		'center' : centerPoint,
		'zoom' : 12,
		'mapTypeId' : google.maps.MapTypeId.ROADMAP,
		'draggable' : false,
		'scrollwheel' : false
	});
	
	var popupContent1 = 'H+ Sport Hollywood<br>';
	    popupContent1 += '1750 Vine St<br>';
		popupContent1 += 'Los Angeles, CA';
		
	var popupContent2 = 'H+ Sport Chavez Ravine<br>';
	    popupContent2 += '1000 Vin Scully Ave<br>';
	    popupContent2 += 'Los Angeles, CA';	
	
	var infowindow1 = new google.maps.InfoWindow({
		content: popupContent1
	});
	var infowindow2 = new google.maps.InfoWindow({
		content: popupContent2
	});
	
	var marker1 = new google.maps.Marker({
		'position': storeLocation1,
		'map': map,
		'title': 'H+ Sport in Hollywood (actually Capitol Records in real life)'
	});
	var marker2 = new google.maps.Marker({
		'position': storeLocation2,
		'map': map,
		'title': 'H+ Sport in Chavez (actually Dodger Stadium in real life)'
	});

	marker1.addListener('click', function() {
		infowindow1.open(map, marker1);
	});
	marker2.addListener('click', function() {
		infowindow2.open(map, marker2);
	});


}