$(document).ready(function(){
	var svBtn = $("#sv-btn");
	svBtn.click(function(){
		$(".map").toggleClass("top-ng-100pc");
	})

	function getDirection(){
		var latLng = {};
		var gmapDirUrl = "http://www.google.com/maps/dir/";

		function success(pos){
			latLng.lat = pos.coords.latitude;
			latLng.lng = pos.coords.longitude;
			window.open(gmapDirUrl + latLng.lat + "," + latLng.lng + "/" + "37.738520,-122.468800");
		}
		function error(pos){
			alert("Sorry, unable to get your current location, please enable location service on your device");
		}

		navigator.geolocation.getCurrentPosition(success,error);
	}

	var dirBtn = $("#dir-btn");
	dirBtn.click(function(e){
		e.preventDefault();
		getDirection();
	})
})