---
title: Card
description: 'Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.'
category: 'components'
---

Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.

## About

A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.

## Examples

### Basic 

Basic example below is using transparent background. You can modify it using Tailwind built-in background colors `bg-*`.

<br class="mb-4">

<card-basic></card-basic>

```html
<div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>
```

### Image

<card-images></card-images>

```html
<div class="card" style="width: 18rem;">
  <img src="https://miro.medium.com/max/1838/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

### Header & Footer

Add an optional header and/or footer within a card.
<br class="mb-4">

<card-header></card-header>

```html
<div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="mb-3">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

### Quote

<card-quote></card-quote>

```html
<div class="card">
  <div class="card-header">
    Quote
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>A well-known quote, contained in a blockquote element.</p>
      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
```

### Header Footer

<card-header-footer></card-header-footer>

```html
<div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="mb-3">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
```