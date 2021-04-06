---
title: Setup
description: ''
position: 2
category: Guide
---

No more configuration needed just follow [__Tailwind installation guides__](https://tailwindcss.com/docs/installation#integration-guides). Clean UI is built on top of TailwiindCSS.

<alert type="warning">
We are still using TailwindCSS V1. 
</alert>

[Read here](https://tailwindcss.com/docs/upgrading-to-v2#update-renamed-utility-classes) about Tailwind V1 and V2 update.

<br />

Component classes are following Bootstrap V5.0+ standard.

## Setup

You can simply copy and paste our ready-to-use component classes CSS from this [`dist/` directory](https://github.com/initbase/clean/tree/main/dist).

<br />
<Installation></Installation>
<br />

### TailwindCSS CDN

By using Tailwind CDN version, you will not be able to use `@apply` there and you cannot _extends_ Tailwind themes, therefore you will use default color configuration from Clean UI.

```html
<link
  href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
  rel="stylesheet"
/>
<link
  href="https://unpkg.com/initbase-clean-ui@1.1.0/dist/theme.plain.css"
  rel="stylesheet"
/>
```

See [CDN example](/static-cdn)

### VueJS 2.x/3.x

For usage with Vue, you can simply import Clean UI in single component or in `main.js`.

<br />

__Global config__

```css
/* ./assets/index.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

```javascript
// main.js

import Vue from 'vue'
import App from './App.vue'

import './assets/index.css';
import 'initbase-clean-ui/dist/theme.css'

. . . 

```

Then you can use Tailwind classes and Clean UI classes like usually you do.

<br />

__Note:__ If you make changes in `tailwind.config.js` in `theme.extend.colors`, you must restart your Vue dev server (ctrl + c) in order to apply changes to Clean UI component classes.


### React CRA

Follow Tailwind CRA installation [here](https://tailwindcss.com/docs/guides/create-react-app).

<br />

Then add Clean UI css to `index.js`.

```javascript
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'initbase-clean-ui/dist/theme.css'

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

```

### Next.js

Follow Tailwind Next.js installation [here](https://tailwindcss.com/docs/guides/nextjs).

<br />

Then you can something like this.

```javascript
// pages/_app.js

import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import 'initbase-clean-ui/dist/theme.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

## Tailwind Configuration (required)

Clean UI using configuration as follows.

<br class="mb-1"/>

If you are going to use class like `btn-primary`, `btn-success`, `alert-primary`, `*-primary`, `*-danger`, etc, you must extend tailwind colors theme like example below.

<alert type="warning">
If you don't include `100`, `500`, and `600` color options, an error will be occured.
</alert>


- `100`: mostly for text color (lighter color)
- `500`: the color
- `600`: hover color

<br />

---

<br />

Alternatively you can use `dist/theme.plain.css` and Clean UI default Tailwind config will be applied so you can't change the colors `primary`, `secondary`, `success`, etc.

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