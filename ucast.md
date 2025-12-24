---
layout: page
title: Účasť podielnikov
description: Aký je podiel úcasti na právach a povinnostiach podielnika
---
  
    
| Id | Ideálna výmera | Podiel na celkovej výmere |
| ---: | --------------------: | ------------------------: |
{% for member in site.data.members %}| {{ member.Id }} | {{ member.area}} m<sup>2</sup> | {{ member.power }} % |
{% endfor %}
