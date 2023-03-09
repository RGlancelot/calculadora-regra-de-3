
var hist = 0;
var hist6 = 0;
var hist5 = 0;
var hist4 = 0;
var hist3 = 0;
var hist2 = 0;

function calcular() {


	var valor1 = parseFloat(document.getElementById("valor1").value);
	var valor2 = parseFloat(document.getElementById("valor2").value);
	var valor3 = parseFloat(document.getElementById("valor3").value);

	var resultado = (valor2 * valor3) / valor1;
	document.getElementById("resultado").innerHTML = "Resultado: " + resultado.toFixed(2);

	hist6 = hist5;
	hist5 = hist4;
	hist4 = hist3;
	hist3 = hist2;
	hist2 = hist;
	hist = resultado;

	document.getElementById("hist").innerHTML = "Historico: " + hist2;
	document.getElementById("hist2").innerHTML = "Historico2: " + hist3;
	document.getElementById("hist3").innerHTML = "Historico3: " + hist4;
	document.getElementById("hist4").innerHTML = "Historico4: " + hist5;
	document.getElementById("hist5").innerHTML = "Historico5: " + hist6;

}

