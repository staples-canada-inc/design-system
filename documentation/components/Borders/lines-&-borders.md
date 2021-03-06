---
name: Borders

menu: Components
---

import { Playground, Props } from "docz";

# Lines & Borders

All borders, horizontal and vertical dividers are `light-gray` with a stroke of 1px. All element outlines have a corner radius value of zero unless noted otherwise.

## Border

Use border utilities to add or remove an element's borders. Choose class `.border` for all borders or specify a specific side as noted below.

### Example: Additive

    <div class="bd-example-border-utils">
        <span class="border"></span>
        <span class="border-top"></span>
        <span class="border-right"></span>
        <span class="border-bottom"></span>
        <span class="border-left"></span>
    </div>

### Example: Subtractive

    <div>
        <span class="border-0"></span>
        <span class="border-top-0"></span>
        <span class="border-right-0"></span>
        <span class="border-bottom-0"></span>
        <span class="border-left-0"></span>
    </div>

## Border Colour

Change the border colour using utilities built on our colour theme.

    <div>
        <span class="border border-primary"></span>
        <span class="border border-secondary"></span>
        <span class="border border-success"></span>
        <span class="border border-danger"></span>
        <span class="border border-warning"></span>
        <span class="border border-info"></span>
        <span class="border border-light"></span>
        <span class="border border-dark"></span>
        <span class="border border-white"></span>
    </div>

## Border Radius

Add classes to an element to easily round its corners.

### Border Radius and Shape Characteristics

    <div>
        <img src="..." alt="..." class="rounded">
        <img src="..." alt="..." class="rounded-top">
        <img src="..." alt="..." class="rounded-right">
        <img src="..." alt="..." class="rounded-bottom">
        <img src="..." alt="..." class="rounded-left">
        <img src="..." alt="..." class="rounded-circle">
        <img src="..." alt="..." class="rounded-pill">
        <img src="..." alt="..." class="rounded-0">
    <div>

## Lines

### Vertical Lines

Use line utilities to quickly style lines. This can be done by using border-left or border-right and adjusting its length, and size.

    <style>
    .vl {
      border-left: 1px solid #D9D9D6;
      height: 500px;
    }
    </style>

    <div class="vl"></div>

### Centered Vertical Line

    <style>
    .vl {
      border-left: 6px solid #D9D9D6;
      height: 500px;
      position: absolute;
      left: 50%;
      margin-left: -3px;
      top: 50vh;
    }
    </style>
    <div class="vl"></div>

### Horizontal Line

Create horizontal lines by using the `<hr>` tag.

    <hr>

You can also customize the `<hr>` tag to adjust the line weight as shown below.

    <style>
    .hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid #D9D9D6;
        margin: 1em 0;
        padding: 0;
    }
    </style>
    <div class="hr"></div>
