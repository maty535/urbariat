---
layout: page
title: Účasť podielnikov
description: Aký je podiel úcasti na právach a povinnostiach podielnika
---
<ul>
{% for member in site.data.members %}
  <li>
    
      Id: {{ member.Id }} 
      Ideálna výmera: {{ member.aread}} 
      Pomer na celkovej výmer: {{ member.power }} % (HLASOV)
    
  </li>
{% endfor %}
</ul>
