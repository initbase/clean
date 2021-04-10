---
title: Tooltips
description: 'Clean UI custom tooltips component.'
category: 'components'
---

Clean UI custom tooltips component. This is might be different with Bootstrap tooltips, you may need to use other JS library to support tooltips component.

<br />

Install PooperJS first

```
npm install @popperjs/core

// or

yarn add @popperjs/core
```

## Examples

Tooltip component will require some steps to follow, it will be very easy to setup in Javascript libray like Vue, React, Angular, Svelte, etc.

### Basic

<tooltips-basic></tooltips-basic>

<br />

__Example with Vue.js__

```html
<div class="relative">
  <button id="button" class="tooltip-element btn btn-primary" aria-describedby="tooltip">Hover me</button>
  <div id="tooltip" class="hidden tooltip text-center" role="tooltip">
    Tooltip center
    <svg data-popper-arrow class="arrow" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
  </div>
</div>
```

```javascript
<script>
import { createPopper } from '@popperjs/core';
export default {
  mounted () {
    const popcorn = document.querySelector('#button');
    const tooltip = document.querySelector('#tooltip');
    createPopper(popcorn, tooltip, {
      placement: 'top',
    });
  }
}
</script>
```