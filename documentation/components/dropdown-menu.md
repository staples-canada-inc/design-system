---
layout: docs
title: Dropdown
description: Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.
group: Elements
toc: true
---

# Dropdown Menu


Via data attributes or JavaScript, the dropdown plugin toggles hidden content (dropdown menus) by toggling the `.show` class on the parent list item. The `data-toggle="dropdown"` attribute is relied on for closing dropdown menus at an application level, so it's a good idea to always use it.

On touch-enabled devices, opening a dropdown adds empty `mouseover` handlers to the immediate children of the `<body>` element. This admittedly ugly hack is necessary to work around a [quirk in iOS' event delegation](https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html), which would otherwise prevent a tap anywhere outside of the dropdown from triggering the code that closes the dropdown. Once the dropdown is closed, these additional empty `mouseover` handlers are removed.

### General Guidance
Dropdowns present a list of options that can be used to filter existing content. They can also be used for nested menu items or in responsive views for components like tabs. For multi-level dropdowns, it is recommended to limit options to 1-2 additional levels as it can get confusing for the user.

### Dropdown Menu

In this dropdown menu, we have multi-leveled dropdowns which allows users to have the option to select certain things based on a subject/category.

### Multi-Level Dropdown Menu

    <div class="container">
        <div class="row">
            <h2>Multi level dropdown menu in Bootstrap</h2>
            <hr>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
                </button>
                <ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                    <li class="dropdown-item"><a href="#">Some action</a></li>
                    <li class="dropdown-item"><a href="#">Some other action</a></li>
                    <li class="dropdown-submenu">
                    <a  class="dropdown-item" tabindex="-1" href="#">Hover me for more options</a>
                    <ul class="dropdown-menu">
                        <li class="dropdown-item"><a tabindex="-1" href="#">Second level</a></li>
                        <li class="dropdown-submenu">
                        <a class="dropdown-item" href="#">Second Level</a>
                        <ul class="dropdown-menu">
                            <li class="dropdown-item"><a href="#">Third level</a></li>
                                <li class="dropdown-item"><a href="#">Third level</a></li>
                        </ul>
                        </li>
                        <li class="dropdown-item"><a href="#">Second level</a></li>
                        <li class="dropdown-item"><a href="#">Second level</a></li>
                    </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>


### Navbar with Multi-Level Dropdown Menu

    <ul class="nav nav-tabs">
    <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
        </div>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </li>
    </ul>

We also can do dropdowns in forms.

### Menu Forms

Put a form within a dropdown menu, or make it into a dropdown menu, and use `margin or padding utilities` to give it the negative space you require.

### Simple Dropdown Menu Form

    <div class="dropdown-menu">
    <form class="px-4 py-3">
        <div class="form-group">
        <label for="exampleDropdownFormEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
        </div>
        <div class="form-group">
        <label for="exampleDropdownFormPassword1">Password</label>
        <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
        </div>
        <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck">
        <label class="form-check-label" for="dropdownCheck">
            Remember me
        </label>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">New around here? Sign up</a>
    <a class="dropdown-item" href="#">Forgot password?</a>
    </div>

You can also change the directions of the dropdowns to become droplefts. droprights or dropups.

<table>
<thead>
    <th>Class</th>
    <th>Direction</th>

</thead>
<tbody>
    <tr>
        <td><code>.dropdown</code></td>
        <td>Down</td>
    </tr>
    <tr>
        <td><code>.dropright</code></td>
        <td>Right</td>
    </tr>
    <tr>
        <td><code>.dropleft</code></td>
        <td>Left</td>
    </tr>
    <tr>
        <td><code>.dropup</code></td>
        <td>Up</td>
    </tr>
</tbody>
</table>