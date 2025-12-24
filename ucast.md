---
layout: page
title: Účasť podielnikov
description: Aký je podiel úcasti na právach a povinnostiach podielnika
---
<ul>
{% for member in site.data.members %}
  <li>
    
      {{ member.name }}
    
  </li>
{% endfor %}
</ul>
