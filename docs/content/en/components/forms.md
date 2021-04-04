---
title: Forms
description: 'Give textual form controls like <input>s and <textarea>s an upgrade with custom styles, sizing, focus states, and more.'
category: 'components'
---

Give textual form controls like `<input>`s and `<textarea>`s an upgrade with custom styles, sizing, focus states, and more.

## Examples

### Form control

<forms-control></forms-control>

```html
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
```

### Size

<forms-size></forms-size>

```html
<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example">
<input class="form-control" type="text" placeholder="Default input" aria-label="default input example">
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">
```

### Disabled & Readonly

<forms-disabled></forms-disabled>

```html
<input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled>
<input class="form-control" type="text" placeholder="Disabled readonly input" aria-label="Disabled input example" disabled readonly>
```

### Readonly Plain Text

If you want to have `<input readonly>` elements in your form styled as plain text, use the .form-control-plaintext class to remove the default form field styling and preserve the correct margin and padding.
<br class="mb-3" />

<forms-readonly-plain-text></forms-readonly-plain-text>

```html
<div class="mb-3 grid grid-cols-12">
  <label for="staticEmail" class="col-span-2 form-label">Email</label>
  <div class="col-span-10">
    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
  </div>
</div>
<div class="mb-3 grid grid-cols-12">
  <label for="inputPassword" class="col-span-2 form-label">Password</label>
  <div class="col-span-10">
    <input type="password" class="form-control" id="inputPassword">
  </div>
</div>
```