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
function getPosition(position){
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    codeLatLng(lat, lon);
    w = new Weather(lat, lon);
}
  function codeLatLng(lat, lng) {

    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[1]) {
         //formatted address
         city = results[3].formatted_address;
        } else {
          alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
    });
  }
//End location

// Change day
 var days = $("a");
  days.each(function(day){
    $(this).on("click", function(){
     weatherData(day-1);
    });
  });
// Weather
var theWeather;
var weatherDay
var skycons = new Skycons({"color": "white"});

var Weather = function (lat, lon){
    this.lat = lat;
    this.lon = lon;
    this.key = "b90e2409c25c39a24e68b8dd6d219976";
    check();
}
/* Gebruik van localStorage: In het geheugen opslaan van data

    * localStorage.setItem("NAAM", data in die naam)
    * localStorage.getItem("NAAM")

*/
function check(){
    if(!localStorage.getItem("weatherdata")){
        // Not a localStorage
        loadData();
    }else{
        // There is a storage
        if(Date().getTime - localStorage.getItem('time')< 300000){
            console.log("Data up-to-date");
        }else{
            // Old data in the storage
            loadData();
        }
    }
}
function loadData (){
    // var url = "https://api.forecast.io/forecast/"+this.key+"/"+this.lat+","+this.lon;
    var url = "https://api.forecast.io/forecast/b90e2409c25c39a24e68b8dd6d219976/"+this.lat+","+this.lon;
    console.log(url);
    $.ajax({
        url: url, 
        type: "GET", 
        dataType: "jsonp"})

    .done(function(data) {
        console.log("Great succes! *Voice of Borat*");
        theWeather = data;
        localStorage.setItem("weatherdata", JSON.stringify(this.theWeather));
        localStorage.setItem("time",new Date().getTime());

        weatherData(0);
    });
     weatherData = function(day){
        
        weatherDay = this.theWeather.daily.data[day];
        show(weatherDay);
    }
    
}