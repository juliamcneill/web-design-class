$(document).ready( function(){

	//js
	var isLightOn = false;

	$("#lightswitch").click(function(){

		console.log("Light switch clicked");

		if(isLightOn){
			console.log("Light is on, turning off");
			$("body").css("background", "white");
			isLightOn = false;

			$("#monitor").html("<h1>OFF</h1>");

			setTimeout( function(){

				$("#monitor").fadeOut( )

			}, 1000);

		}else{
			console.log("Light is off, turning on");
			// update element style
			$("body").css("background", "lightgrey");
			isLightOn = true;

			//update element content
			$("#monitor").html("<h1>ON</h1>");

			setTimeout( function(){

				$("#monitor").fadeOut(  );

			}, 1000);

			// vanilla js version
			//document.getElementById("monitor").innerHTML = "";
		}


	});

} );
