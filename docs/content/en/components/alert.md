---
title: Alert
description: 'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.'
position: 1
category: 'components'
---

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

## Example

### Basic examples

Basic alert component class based on Bootstrap. You can change the color with Tailwind built-in colors like `class="alert bg-blue-500 text-gray-100"`.
<br class="mb-5"/>

<alert-basic-usage></alert-basic-usage>

```html
  <div class="alert alert-primary" role="alert">
    A simple primary alert—check it out!
  </div>
  <div class="alert alert-secondary" role="alert">
    A simple secondary alert—check it out!
  </div>
  <div class="alert alert-success" role="alert">
    A simple success alert—check it out!
  </div>
  <div class="alert alert-danger" role="alert">
    A simple danger alert—check it out!
  </div>
  <div class="alert alert-warning" role="alert">
    A simple warning alert—check it out!
  </div>
  <div class="alert alert-info" role="alert">
    A simple info alert—check it out!
  </div>
  <div class="alert alert-light" role="alert">
    A simple light alert—check it out!
  </div>
  <div class="alert alert-dark" role="alert">
    A simple dark alert—check it out!
  </div>
```
<alert>
You can customize the background color and text color using Tailwind built-in colors.
</alert>

### Link Color

Use the `.alert-link` class to quickly provide matching colored links within any alert.
<br class="mb-5" />

<alert-link-color></alert-link-color>

```html
<div class="alert alert-primary" role="alert">
  A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-success" role="alert">
  A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-info" role="alert">
  A simple info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-light" role="alert">
  A simple light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-dark" role="alert">
  A simple dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
```

### Additional Heading

Alerts can also contain additional HTML elements like headings, paragraphs and dividers.
<br class="mb-4" />

<alert-heading></alert-heading>

```html
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr class="alert-border">
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
```

### Dismissible Alert

Dismissible alert lets you close the alert using click event. To use this alert you need to use javascript to remove `show` class when alert state is off/hidden.
<br class="mb-4"/>

<alert-dismissable></alert-dismissable>

<code-group>
  <code-block label="html" active>

```html
<div id="alert" class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong class="font-bold text-gray-800">Holy guacamole!</strong> You should check in on some of those fields below.
  <button id="alert-close" type="button" class="btn-close"  aria-label="Close"></button>
</div>
```

  </code-block>
  <code-block label="javascript">

  ```javascript
  document.getElementById('alert-close').addEventListener('click', function () {
    document.getElementById('alert').classList.remove('show')
  })
  ```

  </code-block>
</code-group>