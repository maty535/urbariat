
// Funkcia, ktorá vypocita zisk na podiel
function vypocetZiskuPodielnika(){
   
  // definicie ------------------------------------------------
  zisk        = 20139.0 ;   // suma na finstate pre 2024
  urbarPlocha = 1286889.0 ; // plocha v m2   
  //-----------------------------------------------------------
   
   ziskNaRozdelenie = zisk * 0.9;     //  kolko z toho ide podielnikom, co si schvalili
   ucast     = parseFloat(document.getElementById('ucast-in').value);  // sila podielnika, de-facto Hlas v %
   dividenda = (ucast*ziskNaRozdelenie)/100.0;
   plocha    = (ucast*urbarPlocha)/100.0;

  // Zapíšeme výsledok do bunky v tfoot
  document.getElementById('ucast').textContent      = ucast.toFixed(4)     + " %";
  document.getElementById('plocha').textContent     = plocha.toFixed(4)    + " m2";
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

