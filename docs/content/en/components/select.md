---
title: Select
description: 'Customize the native <select>s with custom CSS that changes the element’s initial appearance.'
category: 'components'
---

Customize the native `<select>`s with custom CSS that changes the element’s initial appearance.

## Examples

### Default

<select-default></select-default>

```html
<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

### Sizing

<select-sizing></select-sizing>

```html
<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<select class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

### Disabled

<select-disabled></select-disabled>