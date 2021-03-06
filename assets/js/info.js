$(document).ready(function(){
	var InfoPage = {};

	InfoPage.svBtn = $("#sv-btn");
	InfoPage.svBtn.click(function(){
		$(".map").toggleClass("top-ng-100pc");
	})

	function getDirection(){
		var latLng = {};
		var gmapDirUrl = "http://www.google.com/maps/dir/";

		function success(pos){
			latLng.lat = pos.coords.latitude;
			latLng.lng = pos.coords.longitude;
			var url = gmapDirUrl + latLng.lat + "," + latLng.lng + "/" + "37.738520,-122.468800";
			$("#dir-link a").attr("href",url);
			$("#dir-link").toggleClass("show-dir-link");
		}
		function error(pos){
			alert("Sorry, unable to get your current location, please enable location service on your device");
		}

		navigator.geolocation.getCurrentPosition(success,error);
	}

	InfoPage.dirBtn = $("#dir-btn");
	InfoPage.dirBtn.click(function(e){
		e.preventDefault();
		getDirection();
	})


	InfoPage.today = new Date().getDay();
	InfoPage.highLightDay = function(day){
		if(day === 0){
			$(".sun").addClass("today");
		}
		if(day === 1){
			$(".mon").addClass("today");
		}
		if(day > 1 && day < 5){
			$(".tue-thur").addClass("today");
		}
		if(day >= 5){
			$(".fri-sat").addClass("today");
		}
	};

	InfoPage.highLightDay(InfoPage.today);

	$("#dir-link a").click(function(){
		$("#dir-link").toggleClass("show-dir-link")
	})
})