---
title: Button
description: 'Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.'
category: 'components'
---

Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

## Examples

### Basic Button

Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.
<br class="mb-4"/>

<button-basic></button-basic>

```html
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-link">Link</button>
```

### Outline Button

In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the `.btn-outline-*` ones to remove all background images and colors on any button.
<br class="mb-4" />

<button-outline></button-outline>

```html
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-info">Info</button>
```

### Button Size

#### __Large__

<button-large></button-large>

```html
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>
```
<br class="mb-4">

#### __Small__

<button-small></button-small>
```html
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>
```

### Disabled

Sometimes you may need a button with disabled state which is unclickable for users.

<br />

<button-disabled></button-disabled>

```html
<button type="button" class="btn btn-primary disabled">Button</button>
<button type="button" class="btn btn-secondary disabled">Button</button>
<button type="button" class="btn btn-outline-success disabled">Button</button>
```