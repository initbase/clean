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
<span class="badge bg-primary-500">Primary</span>
<span class="badge bg-secondary">Secondary</span>
<span class="badge bg-green-500">Success</span>
<span class="badge bg-red-500">Danger</span>
<span class="badge bg-yellow-400 text-gray-800">Warning</span>
<span class="badge bg-blue-400 text-gray-800">Info</span>
```

### Rounded Pill

Use the .rounded-pill utility class to make badges more rounded with a larger border-radius.
<br class="mb-4">

<badge-rounded></badge-rounded>

```html
<span class="badge rounded-pill bg-primary-500">Primary</span>
<span class="badge rounded-pill bg-secondary">Secondary</span>
<span class="badge rounded-pill bg-green-500">Success</span>
<span class="badge rounded-pill bg-red-500">Danger</span>
<span class="badge rounded-pill bg-yellow-400 text-gray-800">Warning</span>
<span class="badge rounded-pill bg-blue-400 text-gray-800">Info</span>
```