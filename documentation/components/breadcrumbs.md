---
layout: docs
title: Breadcrumbs
description: Indicate the current page's location within a navigational hierarchy that automatically adds separators via CSS.
group: Navigation
---

# Breadcrumbs
## Changing the Separator
  Separators are automatically added in CSS through `::before` and `content`. They can be changed by changing `$breadcrumb-divider`. The `quote` function is needed to generate the quotes around a string, so if you want > as separator, you can use this:

`$breadcrumb-divider: quote(">");`

  Or by using CSS we can also do this and apply padding. Here's an example: 

        .breadcrumb-item + .breadcrumb-item {
        padding-left: 0.5rem; }
        .breadcrumb-item + .breadcrumb-item::before {
            display: inline-block;
            padding-right: 0.5rem;
            color: #747679;
            content: ">"; }

  It’s also possible to use a <b>base64 embedded</b> SVG icon:

    $breadcrumb-divider: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwYXRoIGQ9Ik0yLjUgMEwxIDEuNSAzLjUgNCAxIDYuNSAyLjUgOGw0LTQtNC00eiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+);

  The separator can be removed by setting `$breadcrumb-divider` to `none`:

    $breadcrumb-divider: none;

## Accessibility
  Since breadcrumbs provide a navigation, it’s a good idea to add a meaningful label such as `aria-label="breadcrumb"` to describe the type of navigation provided in the `<nav>` element, as well as applying an `aria-current="page"` to the last item of the set to indicate that it represents the current page.

### Breadcrumbs with White Background

<nav class="navbar navbar-default " aria-label="breadcrumb">
    <ol class="breadcrumb" style="background-color: white;">
        <li class="breadcrumb-item">
            <a class="text-decoration-none" href="#">Home</a>
        </li>
        <li class="breadcrumb-item text-decoration-none">
            <a class="text-decoration-none" href="#">Library</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
    </ol>
</nav>

  For more information, see the <b>WAI-ARIA Authoring Practices</b> for the breadcrumb pattern.