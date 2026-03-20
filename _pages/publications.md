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
  <ol class="bibliography">
    <li>
      <div class="row">
        <div class="col-sm-10">
          <div class="title">China's Evolving Role in Asian Trade: A Network Approach</div>
          <div class="author"><em>Jeancarlo Vélez Lebrón</em></div>
          <div class="periodical"><em>Universidad de Puerto Rico, Recinto Río Piedras</em>, 2020</div>
          <div class="periodical">MA Thesis</div>
          <div class="links">
            <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
            <a href="/assets/pdf/MasterThesis_JeancarloVelez 1.pdf" class="btn btn-sm z-depth-0" role="button">PDF</a>
          </div>
          <div class="abstract hidden">
            <p>This paper uses network analysis to examine China's evolving role in world trade in 1995, 2005, and 2014. I construct directed trade networks from a World Input-Output Matrix covering 43 countries and 56 industries, filtering for commercially significant linkages. Using centrality measures—including degree, betweenness, hub, and authority indices—I trace how China, Japan, South Korea, and Taiwan's positions shifted over two decades. China exhibits large increases across all centrality measures, while other East Asian economies remain stable. Combined with growing network density and diameter, these results suggest China's export-led rise expanded the trade network rather than displacing established regional economies.</p>
          </div>
        </div>
      </div>
    </li>
  </ol>
</div>
