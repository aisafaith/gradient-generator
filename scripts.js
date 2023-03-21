
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1"); //query selector similar to css
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");
var rgb = [];

	function setGradient(){
		body.style.background = 
		"linear-gradient(to right, "
		+ color1.value 
		+ ", " 
		+ color2.value
		+ ")";

		if(color1 > "" || color2 > "") {						
			css.textContent = body.style.background + ";";		
		}		
	};

	function getRandomRgb(max = 255) {
		for (i = 0; i < 3; i++) {
			var random = Math.floor(Math.random() * (max + 1));
			rgb.push(random);
		}
		return rgb;
	};

	function rgbToHex() {
		let r = (+rgb[0]).toString(16),			
	    	g = (+rgb[1]).toString(16),
	   		b = (+rgb[2]).toString(16);

	   		if (r.length == 1)
	    		r = "0" + r;
	  		if (g.length == 1)
	    		g = "0" + g;
	  		if (b.length == 1)
	    		b = "0" + b;
	   		return "#" + r + g + b;
	};

	color1.addEventListener("input", setGradient);
	color2.addEventListener("input", setGradient);
	randomButton.addEventListener("click", function() {
		rgb.length = 0; 						// clear the rgb array
		rgb = getRandomRgb();					//need to call getRandomRgb to generate RGB values
		color1.value = rgbToHex();
		rgb.length = 0; 						// clear the rgb array again
		rgb = getRandomRgb();
		color2.value = rgbToHex();
		setGradient(); 							// update the gradient with the new colors
	});
	
