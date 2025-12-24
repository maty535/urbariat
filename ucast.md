---
layout: page
title: Účasť podielnikov
description: Aký je podiel úcasti na právach a povinnostiach podielnika
---
  
    
| Id | Ideálna výmera [m2] | Podiel na celkovej výmere [%] |
|:--:|--------------------:|------------------------------:|
{% for member in site.data.members %}
| {{ member.Id }} | {{ member.area}} | {{ member.power }} |
{% endfor %}
