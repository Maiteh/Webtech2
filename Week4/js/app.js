// Location
var lat;
var lon;
var geocoder = new google.maps.Geocoder();
var city;

if(navigator.geolocation){

	navigator.geolocation.getCurrentPosition(getPosition, error);

}else{
	alert('No geolocation available in your browser!');
}
function error(){
	alert('No location found!');
}
