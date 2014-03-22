jQuery(function()
{
	console.log("jQuery loaded");
});

  var skycons = new Skycons({"color": "white"});

$(function() 
{
    FastClick.attach(document.body);
    console.log("FastClick werkt");
});

    var huidigePositie = '';
    var jsonResponse = '';
    var locatieResponse = '';

    function unixToHuman(tijd)
	{
        var cachedTijd = new Date(tijd*1000);
        return cachedTijd;
    }

    function getLocation()
    {
		if (navigator.geolocation)
        {
			navigator.geolocation.getCurrentPosition(showPosition, error);
			console.log("logo");
        }
		else{this.x.innerHTML = "Geolocation is not supported by this browser.";}
	}
	
    function showPosition(position)
    {
    huidigePositie = position;
		if(localStorage.jsonitem == null)
		{
			doAjax();
		}
		else
		{
			var jsonResponse = localStorage.getItem("jsonitem");
            console.log("Weer is gecached");
			var locatieResponse = localStorage.getItem("locatie");
            var nu = new Date();
			var cachedTijd = new Date(JSON.parse(jsonResponse).currently.time*1000);
			var t1 = new Date(0, 0, 0, cachedTijd.getHours(), cachedTijd.getMinutes(), 0, 0);
			var t2 = new Date(0, 0, 0, nu.getHours(), nu.getMinutes(), 0, 0);
            var dif = t2.getTime() - t1.getTime();
            var Seconds_from_T1_to_T2 = dif / 1000;
            var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);

        if( Seconds_Between_Dates >= 3600)
		{
			console.log("Weer update nodig");
            var nu = new Date().getTime();
            doAjax();
        }
		else
		{
            console.log("Geen weerupdate nodig");
            gebruikResponse(JSON.parse(jsonResponse));
        }
	}
		}

    function error()
	{
		console.log("Error met het vinden van locatie")
    }
		getLocation();

function doAjax() 
{
    var jqxhr = $.ajax(
	{
    url: 'https://api.forecast.io/forecast/a599b1c2ef494d38f43dc128640af340/' + huidigePositie.coords.latitude + ',' + huidigePositie.coords.longitude + '?units=auto',
    type: 'GET',
    global: true,
    dataType: 'jsonp',
    })
	
        .done(function () 
		{
            console.log("success");
            jsonResponse = jqxhr.responseJSON;
            gebruikResponse(jsonResponse);
            localStorage.setItem("jsonitem", JSON.stringify(jsonResponse));
        })
            .fail(function () 
			{
				console.log("error");
			})
            .always(function () 
			{
            console.log("complete");
            });
    }

function getWeer(summary)
{
	switch(summary)
	{
		case "clear-day":
			$("#head").append("Een passie voor het web en apps ?<br /> Kom dan met mee een terr<span id='span'>app</span>ke doen, het is er het weer voor");
			skycons.add(document.getElementById("icoon"), Skycons.CLEAR_DAY);
			 $( "body" ).css("background-color", "Gold");
			 $( "p").css("color","black");
			 $( "a").css("color","black");
			 $( "#span").css("color", "red");
		break;
		
		case "clear-night":
			$("#head").append("Misschien doen we morgen terug een terr<span id='span'>app</span>ke");
			skycons.add(document.getElementById("icoon"), Skycons.CLEAR_NIGHT);
			$( "body" ).css("background-color", "Navy");
		break;
		
		case "rain":
			$("#head").append("Misschien doen we later terug een terr<span id='span'>app</span>ke, als het gedaan is met regenen");
			skycons.add(document.getElementById("icoon"), Skycons.RAIN);
			$( "body" ).css("background-color", "CornFlowerBlue");
			//$skycons({"color" : "black"});
			
		break;
		
		case "snow":
			$("#head").append("Kom gerust langs voor een sneeuwgevecht, maar voor een terr<span id='span'>app</span>ke is het nu een beetje koud.");
			skycons.add(document.getElementById("icoon"), Skycons.SNOW);
			$( "body" ).css("background-color", "LightBlue");
			$( "p").css("color","black");
			$( "a").css("color","black");
			$( "#span").css("color", "red");
		break;
		
		case "sleet":
			$("#head").append("Vandaag is het wat te koud voor een terr<span id='span'>app</span>ke, misschien morgen?");
			skycons.add(document.getElementById("icoon"), Skycons.SLEET)
			 $( "body" ).css("background-color", "LightBlue");
		break;
		
		case "wind":
			$("#head").append("Kleed je warm aan want er is veel wind, en kom dan voor een terr<span id='span'>app</span>ke");
			skycons.add(document.getElementById("icoon"), Skycons.WIND);
			 $( "body" ).css("background-color", "DarkGrey");
		break;
		
		case "fog":
			$("#head").append("Misschien doen we morgen terug een terr<span id='span'>app</span>ke, nu gaan we nogal weinig zien.");
			skycons.add(document.getElementById("icoon"), Skycons.FOG);
			$( "body" ).css("background-color", "Silver");
			$( "p").css("color","black");
			$( "a").css("color","black");
			$( "#span").css("color", "red");
		break;
		
		case "cloudy":
			$("#head").append("Het zonnetje wil er niet door komen, neem toch maar een jas of trui mee voor een terr<span id='span'>app</span>ke");
			skycons.add(document.getElementById("icoon"), Skycons.CLOUDY);
			$( "body" ).css("background-color", "SkyBlue");
		break;
		
		case "partly-cloudy-day":
			$("#head").append("Een passie voor het web en apps ?<br /> Kom dan met mee een terr<span id='span'>app</span>ke doen, die wolkjes houden ons toch niet tegen");
			skycons.add(document.getElementById("icoon"), Skycons.PARTLY_CLOUDY_DAY);
			$( "body" ).css("background-color", "PowderBlue");
			$( "p").css("color","black");
			$( "a").css("color","black");
			$( "#span").css("color", "red");
		break;
		
		case "partly-cloudy-night":
			$("#head").append("Misschien doen we morgen terug een terr<span id='span'>app</span>ke");
			skycons.add(document.getElementById("icoon"), Skycons.PARTLY_CLOUDY_NIGHT);
			$( "body" ).css("background-color", "SteelBlue");
		break;
		
		default:
			$("#head").append("Tijd om een terrapke te doen!");
			skycons.add(document.getElementById("icoon"), Skycons.CLEAR_DAY);
			$( "body" ).css("background-color", "Orange");

		break;
		break;
	}
	skycons.play();
}


function gebruikResponse(jsonResponse)
{
    var date = new Date(jsonResponse.currently.time*1000);
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var formattedTime = hours + ':' + minutes + ':' + seconds;
    var conditie = jsonResponse.currently.icon;
   // getIcon(conditie);
   // getColor(conditie);
    $("#weer").append(Math.round(jsonResponse.currently.temperature) + '°C');
    getWeer(conditie);
    $("#forecast").append('<div class="dummy"></div>');
}
