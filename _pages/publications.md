---
layout: page
permalink: /publications/
title: research
description: Research papers and work in progress.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<h2 class="bibliography-heading">Work in Progress</h2>

<div class="publications">

{% bibliography --query @unpublished %}

</div>

<h2 class="bibliography-heading" style="margin-top: 2rem;">Other Work</h2>

<div class="publications">

{% bibliography --query @mastersthesis %}

</div>
