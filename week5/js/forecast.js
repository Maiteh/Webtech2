//dag en maand
		var day=document.getElementById('dag');
		var m=document.getElementById('maand');

		//weervariabelen
		var w=document.getElementById('weer');
		var om=document.getElementById('omschrijving');
		var ico=document.getElementById('icoon');

		day.innerHTML = new Date().getDate();
		month = new Date().getMonth()+1;

		switch (month){
			case 1:
				m.innerHTML = 'JANUARY';
				break;
			case 2:
				m.innerHTML = 'FEBRUARY';
				break;
			case 3:
				m.innerHTML = 'MARCH';
				break;
			case 4:
				m.innerHTML = 'APRIL';
				break;
			case 5:
				m.innerHTML = 'MAY';
				break;
			case 6:
				m.innerHTML = 'JUNE';
				break;
			case 7:
				m.innerHTML = 'JULY';
				break;
			case 8:
				m.innerHTML = 'AUGUST';
				break;
			case 9:
				m.innerHTML = 'SEPTEMBER';
				break;
			case 10:
				m.innerHTML = 'OCTOBER';
				break;
			case 11:
				m.innerHTML = 'NOVEMBER';
				break;
			case 12:
				m.innerHTML = 'DECEMBER';
				break;
		}

		function getLocation()
		{
			if(navigator.geolocation){
	    		navigator.geolocation.getCurrentPosition(getWeather);
			}
			else
			{
				alert("Geolocation is not supported by this browser.");
			}
		}

	  	function getWeather(position){
	  		$.ajax({
	  			url:"https://api.forecast.io/forecast/3de8a44fe3a6eb3969672216283e5aeb/" + position.coords.latitude + "," + position.coords.longitude,
	  			dataType:"jsonp",
				success: function(response) {
					w.innerHTML = Math.round((response.currently.temperature - 32)/1.8) + " <strong>&degC</strong>";
					om.innerHTML = response.daily.data[0].summary;
					min.innerHTML = "Min: " + Math.round((response.daily.data[0].temperatureMin-32)/1.8) + " &degC";
					max.innerHTML = "Max: " + Math.round((response.daily.data[0].temperatureMax-32)/1.8)+ " &degC";

					var i = response.currently.icon;
					switch(i){
						case "clear-day":
							ico.src="http://www.iconsdb.com/icons/preview/white/sun-xxl.png";
							break;

						case "clear-night":
							ico.src="http://www.iconsdb.com/icons/preview/white/moon-xxl.png";
							break;

						case "partly-cloudy-day":
							ico.src="http://www.iconsdb.com/icons/preview/white/partly-cloudy-day-xxl.png";

						case "partly-cloudy-night":
							ico.src="http://www.iconsdb.com/icons/preview/white/partly-cloudy-night-xxl.png";

						case "wind":
							ico.src="http://www.iconsdb.com/icons/preview/white/little-rain-xxl.png";

						default:
							ico.src="http://www.iconsdb.com/icons/preview/white/clouds-xxl.png";
					}
	   			}
			});
	 	}