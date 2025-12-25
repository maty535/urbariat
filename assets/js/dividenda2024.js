
// Funkcia, ktorá vypocita zisk na podiel
function vypocetZiskuPodielnika(){
   ucast     = parseFloat(document.getElementById('ucast-in').value);
   dividenda = ucast*201.39*0.9;
   plocha    = ucast*12868.89;

  // Zapíšeme výsledok do bunky v tfoot
  document.getElementById('ucast').textContent      = ucast.toFixed(4) + " %";
  document.getElementById('plocha').textContent     = plocha.toFixed(4) +  " m2";
  document.getElementById('dividenda').textContent  = dividenda.toFixed(0) + " €";

}

var timer;
function delayedVypocetZiskuPodielnika() {
	clearTimeout(timer);
	console.log('delay-vypocet')
    timer = setTimeout(function () {
		console.log('delay-running')
		  vypocetZiskuPodielnika();
    }, 500);
  }

