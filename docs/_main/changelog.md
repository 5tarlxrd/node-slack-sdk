---
title: Changelog
permalink: /changelog
order: 10
---

{% for release in site.github.releases %}

{% if release.name != "" %}
    {% assign name = release.name %}
{% else %}
    {% assign name = release.tag_name %}
{% endif %}

{% assign tmp_name = name | replace_first: "@" %} 
{% if tmp_name contains "@" %}
    {% assign name_parts = name | split: "@" %} 
{% else %}
    {% assign name_parts = name | split: "v" %}
{% endif %}

{% for el in name_parts %}
    {% if el contains "slack" %}
        {% assign package = el | slugify %}
    {% else %}
        {% assign version = el | replace_first: 'v', '' %}
    {% endif %}
{% endfor %}

<div class="card changelog_item" data-ver="{{ version }}" data-pkg="{{ package }}">
<h2 class="flat_grey" id="{{ name | slugify }}">{{ name }}</h2>
<p>{{ release.published_at | date: "%b %-d, %Y" }}</p>

<div class="release_notes">
{{ release.body | markdownify }}
</div>

</div>

{% endfor %}

For previous releases, see [the legacy changelog](https://github.com/slackapi/node-slack-sdk/blob/1.x/CHANGELOG.md).

<p class="rss-subscribe">Subscribe <a href="https://github.com/slackapi/node-slack-sdk/releases.atom">via RSS</a></p>
