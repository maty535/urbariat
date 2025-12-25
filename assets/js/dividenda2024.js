
<script>
  // Funkcia, ktorá vypocita zisk na podiel
  function vypocetZiskuPodielnika(){
     ucast     = parseFloat(document.getElementById('ucast-in').textContent);
     dividenda = ucast*201.39*0.9;
     plocha    = ucast*12868.89;

    // Zapíšeme výsledok do bunky v tfoot
    document.getElementById('plocha').textContent     = plocha +  " m<sup>2</sup>";
    document.getElementById('ucast').textContent      = ucast + " %";
    document.getElementById('dividenda').textContent  = dividenda + " €";

  }
</script>
