---
layout: page
title: Účasť podielnikov
description: Aký je podiel úcasti na právach a povinnostiach podielnika
---
  
    
| Id | Ideálna výmera | Podiel na celkovej výmere |
| ---: | --------------------: | ------------------------: |
{% for member in site.data.members %}| {{ member.Id }} | {{ member.area}} m<sup>2</sup> | {{ member.power }} % |
{% endfor %}


Vyhľadávanie: <!-- Search Input --> <input type="text" id="search-input" placeholder="Search...">


<!-- Results Display -->
<ul id="search-results"></ul>

<!-- Initialization Script -->
<script>
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('search-results'),
    json: '/searchUcast.json',
    searchResultTemplate: '<li>{{ member.Id }}, {{ member.area}} m<sup>2</sup> ,  {{ member.power }} %</li>',
    noResultsText: 'No results found'
  });
</script>
