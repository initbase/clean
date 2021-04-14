---
title: Navbar
description: 'Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.'
category: 'components'
---

Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.

## Bootstrap Examples

### Basic

Basically Bootstrap navbar component required Javascript, so here we wont include any JS code from Bootstrap instead we provide simple Javascript when attribute `data-bs-target` clicked.

<br/>

- ▪️ `.navbar-brand` for your company, product, or project name.
- ▪️ `.navbar-nav` for a full-height and lightweight navigation (including support for dropdowns).
- ▪️ `.navbar-toggler` for use with our collapse plugin and other navigation toggling behaviors.
- ▪️ Flex and spacing utilities for any form controls and actions.
- ▪️ `.navbar-text` for adding vertically centered strings of text.
- ▪️ `.collapse.navbar-collapse` for grouping and hiding navbar contents by a parent breakpoint.

<br />

<navbar-basic></navbar-basic>

If you feel the Javascript function do not fit with your site, you can easily make your own.

<code-group>
  <code-block label="HTML" active>

  ```html
  <nav class="navbar navbar-expand-lg bg-gray-200">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">CleanUI</a>
      <button class="navbar-toggler" type="button" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  ```

  </code-block>
  
  <code-block label="javascript">
    
  ```javascript 
  document.querySelectorAll('[data-bs-target]').forEach(el => {
    el.addEventListener('click', function (e) {
      var toggleId = this['attributes']['data-bs-target'].nodeValue;
      document.querySelector(toggleId).classList.toggle('show');
    }, false);
  });
  ```

  </code-block>
</code-group>

### Basic Dark Variant

Change `.navbar-light` with `.navbar-dark`

<br />

<navbar-basic variant="dark"></navbar-basic>

<code-group>
  <code-block label="HTML" active>

  ```html
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">CleanUI</a>
      <button class="navbar-toggler" type="button" data-bs-target="#navbarSupportedContentDark" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContentDark">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  ```

  </code-block>
  
  <code-block label="javascript">
    
  ```javascript 
  document.querySelectorAll('[data-bs-target]').forEach(el => {
    el.addEventListener('click', function (e) {
      var toggleId = this['attributes']['data-bs-target'].nodeValue;
      document.querySelector(toggleId).classList.toggle('show');
    }, false);
  });
  ```

  </code-block>
</code-group>