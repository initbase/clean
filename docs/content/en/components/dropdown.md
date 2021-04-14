---
title: Dropdown
description: 'Dropdowns are toggleable, contextual overlays for displaying lists of links and more.'
category: 'components'
---

Dropdowns are toggleable, contextual overlays for displaying lists of links and more.

## Examples

### Basic Bootstrap Dropdown

Dropdown component will need additional Javascript to make it works. Clean UI didn't include Bootstrap Javascript code, but Clean UI will provide minimal JS code for demonstration purpose, you can make your own JS code. 

You can switch theme to light mode or dark mode with classes `.dropdown-light` and `.dropdown-dark`.

<dropdown-basic></dropdown-basic>

<br />

<code-group>
  <code-block label="HTML" active>

  ```html
  <div class="relative">
    <button class="btn btn-secondary" role="button" id="dropdownMenuLink" data-bs-dropdown="#dropdownMenu">Click me</button>
    <ul class="dropdown-menu hidden dropdown-light" aria-labelledby="dropdownMenuLink" id="dropdownMenu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
  ```

  </code-block>
  
  <code-block label="javascript">
    
  ```javascript 
  document.querySelectorAll('[data-bs-dropdown]').forEach(el => {
    el.addEventListener('click', function () {
      var toggleId = this['attributes']['data-bs-dropdown'].nodeValue;
      document.querySelector(toggleId).classList.toggle('hidden');
      document.addEventListener('click', function (event) {
        if (!event.target.matches('[data-bs-dropdown="'+ toggleId +'"]')) {
          var dropdowns = document.getElementsByClassName("dropdown-menu");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (!openDropdown.classList.contains('hidden')) {
              openDropdown.classList.add('hidden');
            }
          }
        }
      })
    }, false);
  });
  ```

  </code-block>
</code-group>