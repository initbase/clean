---
title: Badges
description: 'Documentation and examples for badges, our small count and labeling component.'
category: 'components'
---

Documentation and examples for badges, our small count and labeling component.

## Examples

### Button Badge

<badge-button></badge-button>

```html
<button type="button" class="btn btn-primary">
  Notifications <span class="badge bg-gray-800">4</span>
</button>
```

### Background Colors

You can modify the background color and text color using Tailwind utility classes.
<br class="mb-4">

<badge-bg-color></badge-bg-color>

```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-info">Info</span>
```

### Rounded Pill

Use the .rounded-pill utility class to make badges more rounded with a larger border-radius.
<br class="mb-4">

<badge-rounded></badge-rounded>

```html
<span class="badge rounded-pill badge-primary">Primary</span>
<span class="badge rounded-pill badge-secondary">Secondary</span>
<span class="badge rounded-pill badge-success">Success</span>
<span class="badge rounded-pill badge-danger">Danger</span>
<span class="badge rounded-pill badge-warning">Warning</span>
<span class="badge rounded-pill badge-info">Info</span>
```