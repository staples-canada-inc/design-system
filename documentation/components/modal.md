---
layout: docs
title: Modal
description: Use Bootstrap's JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.
group: components
toc: true
---

## How it works

Before getting started with Bootstrap's modal component, be sure to read the following as our menu options have recently changed.

- Modals are built with HTML, CSS, and JavaScript. They're positioned over everything else in the document and remove scroll from the `<body>` so that modal content scrolls instead.
- Clicking on the modal "backdrop" will automatically close the modal.
- Bootstrap only supports one modal window at a time. Nested modals aren't supported as we believe them to be poor user experiences.
- Modals use `position: fixed`, which can sometimes be a bit particular about its rendering. Whenever possible, place your modal HTML in a top-level position to avoid potential interference from other elements. You'll likely run into issues when nesting a `.modal` within another fixed element.
- Once again, due to `position: fixed`, there are some caveats with using modals on mobile devices. 
- Due to how HTML5 defines its semantics, the autofocus HTML attribute has no effect in Bootstrap modals. To achieve the same effect, use some custom JavaScript:

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })

### Modal components
  Below is a static modal example (meaning its `position` and `display` have been overridden). Included are the modal header, modal body (required for `padding`), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.

Here is an example of a simple modal:

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header p-4">
                    <h4 class="modal-title" id="exampleModalLabel">Modal title</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <svg class="Header-navToggleIcon Header-navToggleIcon--open" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z"/>
            </svg>
            </button>
                </div>
                <div class="modal-body p-4">
                    Modal content goes here.
                </div>
                <div class="modal-footer p-4">
                    <a href="#" data-dismiss="modal"><strong>Close</strong></a>
                    <button type="button" class="btn btn-primary ml-3">Save changes</button>
                </div>
            </div>
        </div>
    </div>

Or you can have two buttons in the footer like this:

    <div>
        <div class="col-md-6 ml-auto">
            <button type="button" class="btn btn-primary btn-block" style="margin-top:0px;">Agree</button>
        </div>
        <div class="col-md-6 ml-auto">
            <button type="button" class="btn btn-tertiary btn-block" data-dismiss="modal" style="vertical-align:middle;">Close</button>
        </div>
    </div>

  <b>Note</b>: This previous example can also have scrollable modals when we have a lot of content in a modal. This is typically used for consent forms and agrrements 



You can also create a scrollable modal that allows the user to scroll the modal body by adding `.modal-dialog-scrollable` to `.modal-dialog`.

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-header p-4">
                    <h4 class="modal-title" id="exampleModalLabel">Modal title</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <svg class="Header-navToggleIcon Header-navToggleIcon--open" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z"/>
            </svg>
            </button>
                </div>
                <div class="modal-body p-4">
                    Modal content goes here.
                </div>
                <div class="modal-footer p-4">
                    <a href="#" data-dismiss="modal"><strong>Close</strong></a>
                    <button type="button" class="btn btn-primary ml-3">Save changes</button>
                </div>
            </div>
        </div>
    </div>




## Optional sizes

Even though the modals provided earlier are the ideal size you can also change the size of the modals as well.

Modals have two optional sizes, available via modifier classes to be placed on a `.modal-dialog`. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.



### Example: Large Modal

    <!-- Large modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>

    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
        ...
        </div>
    </div>
    </div>

### Example: Small Modal 

    <!-- Small modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button>

    <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
        ...
        </div>
    </div>
    </div>

### Vertically centered

Add .modal-dialog-centered to .modal-dialog to vertically center the modal.

### Tooltips and popovers

Tooltips and popovers can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed.

### Using the grid

Utilize the Bootstrap grid system within a modal by nesting .container-fluid within the .modal-body. Then, use the normal grid system classes as you would anywhere else.

## Usage

The modal plugin toggles your hidden content on demand, via data attributes or JavaScript. It also adds `.modal-open` to the `<body>` to override default scrolling behavior and generates a `.modal-backdrop` to provide a click area for dismissing shown modals when clicking outside the modal.

### Via data attributes

Activate a modal without writing JavaScript. Set `data-toggle="modal"` on a controller element, like a button, along with a `data-target="#foo"` or `href="#foo"` to target a specific modal to toggle.

    <button type="button" data-toggle="modal" data-target="#myModal">Launch modal</button>

### Via JavaScript

Call a modal with id myModal with a single line of JavaScript:

    $('#myModal').modal(options)

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-backdrop=""`.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">Name</th>
      <th style="width: 50px;">Type</th>
      <th style="width: 50px;">Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>backdrop</td>
      <td>boolean or the string <code>'static'</code></td>
      <td>true</td>
      <td>Includes a modal-backdrop element. Alternatively, specify <code>static</code> for a backdrop which doesn't close the modal on click.</td>
    </tr>
    <tr>
      <td>keyboard</td>
      <td>boolean</td>
      <td>true</td>
      <td>Closes the modal when escape key is pressed</td>
    </tr>
    <tr>
      <td>focus</td>
      <td>boolean</td>
      <td>true</td>
      <td>Puts the focus on the modal when initialized.</td>
    </tr>
    <tr>
      <td>show</td>
      <td>boolean</td>
      <td>true</td>
      <td>Shows the modal when initialized.</td>
    </tr>
  </tbody>
</table>

### Methods

#### .modal(options)
Activates your content as a modal. Accepts an optional options object.


    $('#myModal').modal({
        keyboard: false
    })

#### .modal('toggle')

Manually toggles a modal. Returns to the caller before the modal has actually been shown or hidden (i.e. before the shown.bs.modal or hidden.bs.modal event occurs).


    $('#myModal').modal('toggle')

#### .modal('show')

Manually opens a modal. Returns to the caller before the modal has actually been shown (i.e. before the shown.bs.modal event occurs).


    $('#myModal').modal('show')
    
#### .modal('hide')

Manually hides a modal. Returns to the caller before the modal has actually been hidden (i.e. before the hidden.bs.modal event occurs).


    $('#myModal').modal('hide')

#### .modal('handleUpdate')

Manually readjust the modal’s position if the height of a modal changes while it is open (i.e. in case a scrollbar appears).

    $('#myModal').modal('handleUpdate')

#### .modal('dispose')

Destroys an element’s modal.

### Events

Bootstrap's modal class exposes a few events for hooking into modal functionality. All modal events are fired at the modal itself (i.e. at the `<div class="modal">`).

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">Event Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>show.bs.modal</td>
      <td>This event fires immediately when the <code>show</code> instance method is called. If caused by a click, the clicked element is available as the <code>relatedTarget</code> property of the event.</td>
    </tr>
    <tr>
      <td>shown.bs.modal</td>
      <td>This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete). If caused by a click, the clicked element is available as the <code>relatedTarget</code> property of the event.</td>
    </tr>
    <tr>
      <td>hide.bs.modal</td>
      <td>This event is fired immediately when the <code>hide</code> instance method has been called.</td>
    </tr>
    <tr>
      <td>hidden.bs.modal</td>
      <td>This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete).</td>
    </tr>
  </tbody>
</table>

    $('#myModal').on('hidden.bs.modal', function (e) {
        // do something...
    })