<?php

if (isset($_POST["mail"]) && !empty($_POST["mail"])) 
{

    $f = fopen('mails.txt', 'a');
    fwrite($f, $_POST["mail"] . "\r\n");
    fclose($f);

}
else
{

}


?>
<!DOCTYPE html>
<html>
    <head>
        <title>Terrapke doen?</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="description" content="Demo project with jQuery">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="style.css">
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    </head>
    <body>
        <div class="row">
        <div class="col-md-8">

        <p id="head" class="inhoudBlokje"></p>
        <div class="col-md-8"><p id="locatie" class="trager"> <span id="weer"></span></p><canvas id="icoon" width="128" height="128"></canvas></div>
		
        <div class="col-md-8">	
		</div>

		</div>

		<div class="dummy"></div>
		</div>
		<div class="row">
			<div class="col-md-8 trager">
				<p>Ga je binnenkort verder studeren en wil jij net als ons niets liever doen dan knappe websites, mobile apps en webapplicaties bouwen? Dan ben jij een perfecte kandidaat voor onze opleiding <a href="http://www.weareimd.be/">Interactive Multimedia Design.</a></p>
				<br>
			</div>
			<div class="col-md-8 trager"><p>Kom mee een terraske doen aan onze <a href="http://www.thecreativitygym.be/">Creativity Gym</a> en neem meteen een kijkje in onze opleiding aan de Thomas More hogeschool in Mechelen.</p><br></div>

			<div class="col-md-8 tragerreverted"><p>Laat je emailadres achter en we mailen de exacte datum, locatie en tijdstip naar je door.</p><br></div>

		</div>

<!--<form> <knop> !-->
        <div class="dummy"></div>
        </div>
            <div class="row">
				<div class="col-md-12 trager">

            <form action="#" id="form1" method="post">
				<input type="text" name="mail" placeholder="je@email.com"><input type="submit" value="Inschrijvingen">
			</form>

				</div>
			</div>
		</div>
    </body>
	
    <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script type='application/javascript' src='scripts/fastclick.js'></script>
    <script src="scripts/skycons.js"></script>
    <script src="scripts/nprogress.js"></script>
    <script src="scripts/app.js"></script>
</html>