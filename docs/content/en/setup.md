---
title: Setup
description: ''
position: 2
category: Guide
---

No more configuration needed just follow [__Tailwind installation guides__](https://tailwindcss.com/docs/installation#integration-guides). Clean UI is built on top of TailwiindCSS.

Component classes are following Bootstrap V5.0+ standard.

## Setup

You can simply copy and paste our ready-to-use component classes CSS from this [`dist/` directory](https://github.com/initbase/clean/tree/main/dist). 

### Browser

Import styles to your HTML like you usually do.

```html
<link rel="stylesheet" href="dist/themes.css">
```
or
```html
<link rel="stylesheet" href="dist/themes.scss">
```

## Tailwind Configuration

Clean UI using configuration as follows.

<br class="mb-1"/>

If you are going to use class like `btn-primary`, `btn-success`, `alert-primary`, `*-primary`, `*-danger`, etc, you must extend tailwind colors theme like example below.

<alert type="warning">
If you don't include `100`, `500`, and `600` color options, an error will be occured.
</alert>

<br />

Alternatively you can use `dist/themes.css` and Clean UI default Tailwind config will be applied so you can't change the colors `primary`, `secondary`, `success`, etc.

<br />

__Clean UI default config__

```javascript
// tailwind.config.js

var configuration = {
  theme: {
    extend: {
      colors: {
        primary: {
          '100': '#DBEAFE',
          '500': '#3B82F6',
          '600': '#2563EB'
        },
        secondary: {
          '100': '#E0E7FF',
          '500': '#6366F1',
          '600': '#4F46E5'
        },
        success: {
          '100': '#D1FAE5',
          '500': '#10B981',
          '600': '#059669'
        },
        danger: {
          '100': '#FEE2E2',
          '500': '#EF4444',
          '600': '#DC2626'
        },
        warning: {
          '100': '#FEF3C7',
          '500': '#F59E0B',
          '600': '#D97706'
        },
        info: {
          '100': '#DBEAFE',
          '500': '#3B82F6',
          '600': '#2563EB'
        }
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
}
```