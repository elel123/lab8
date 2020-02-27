function initMap() {
	// add your code here
	L.mapquest.key = '82W882mUJqF1Iq0prHMYrhSILWLHGqP0';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	  center: [32.8806635, -117.238115],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 12
	});

	// Add a marker to the map
	L.marker([32.88, -117.236]).addTo(map);
}