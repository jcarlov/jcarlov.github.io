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
          </div>
          <div class="abstract hidden">
            <p>In this paper, network analysis is used to examine the changing role that China has played in the years 1995, 2005, and 2014. A network is constructed from a World Input-Output Matrix consisting of 43 countries and 56 industries. This matrix is transformed into a technology matrix where a filter is used to turn this matrix into a binary matrix. This matrix, in turn, is used to form a unweighted and directed network where each vertex represents a country and each edge represents a significant commercial relation that exceed the world average. Network centrality measures such as indegree, outdegree, betweeness centrality, hub index, and authority index are derived from this network and used to trace the role that China, Japan, South Korea, and Taiwan have played in World Trade, and see if there is evidence of interaction between these. Of the network measures used in this unweighted matrix, it is found that export-related measures show a strong positive correlation with GDP and import related measures have a negative correlation with GDP. It is observed that China has a large increase in all centrality measures across these years, while the centrality measures of the other East Asian nations remain largely unchanged. This, in conjunction with the increase in density and diameter of the World Trade Network as a whole, lead us to believe that even though China has made huge gains from trade through an export-led approach in the preceding decades with no evidence of displacement or "crowding out" of other developed economies in the East Asian region.</p>
          </div>
        </div>
      </div>
    </li>
  </ol>
</div>
