function okaun_calculate() {
    var number = document.getElementById("number").value;
	var power = document.getElementById("power").value;
	var toughness = document.getElementById("toughness").value;
	
	power = power * Math.pow(2, number);
	toughness = toughness * Math.pow(2, number);
	
	var pow_out = document.createElement("span");
	pow_out.setAttribute("style", "font-size: 150%;");
	pow_out.appendChild(document.createTextNode(power));
	
	var tgh_out = document.createElement("span");
	tgh_out.setAttribute("style", "font-size: 150%;");
	tgh_out.appendChild(document.createTextNode(toughness));
	
    var div = document.getElementById("results");	
    div.innerHTML = "";	
	div.appendChild(document.createTextNode("Okaun becomes:"));
	div.appendChild(document.createElement("br"));
	div.appendChild(pow_out);
	div.appendChild(document.createTextNode(" / "));
	div.appendChild(tgh_out);
}