---
layout: home
title: Spoločenstvo urbariát Dulova Ves pozemkové spoločenstvo
list_title: Najnovšie oznamy
description: Prehľad oznamov spoločenstva
---

<!-- Search Input -->
<input type="text" id="search-input" placeholder="Search...">

<!-- Results Display -->
<ul id="search-results"></ul>

<!-- Initialization Script -->
<script>
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('search-results'),
    json: '/search.json',
    searchResultTemplate: '<li><a href="{url}" title="{title}">{title}</a></li>',
    noResultsText: 'No results found'
  });
</script>
