var map;
function initMap() {
	var xiaoLoongLatLng = new google.maps.LatLng(37.738520,-122.468800);
	var xiaoLoongAddress= "250 West Portal Avenue, San Francisco, CA 94127";
map = new google.maps.Map(document.getElementById('map'), {
  center: xiaoLoongLatLng,
  zoom: 17,
  scrollwheel: false,
  draggable: false
  // streetViewControl: true
});

var marker = new google.maps.Marker({
	position: xiaoLoongLatLng,
	map: map,
	title: "Visit us!"
});

var panorama = new google.maps.StreetViewPanorama(document.getElementById('street-view'), {
	position: xiaoLoongLatLng,
	pov: {
  		heading: 320,
  		pitch: 0
		}
		});

var panoMarker = new google.maps.Marker({
	position: xiaoLoongLatLng,
	map: panorama,
	title: "Visit us!"
});
	
	map.setStreetView(panorama);

}