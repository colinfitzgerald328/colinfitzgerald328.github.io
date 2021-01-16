---
title: Blog
permalink: /blog/
layout: single
author_profile: true
classes: wide
---
<h3 class="archive__subtitle">{{ "Pinned Posts 📌" }}</h3>

{% for post in site.categories.pinned %}
  {% include archive-single.html %}
{% endfor %}

<h3 class="archive__subtitle">{{ site.data.ui-text[site.locale].recent_posts | default: "Recent Posts" }}</h3>

{% for post in site.posts %}
{% include archive-single.html %}
{% endfor %}

