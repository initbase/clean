<template>
  <div class="card p-3">
    <div class="relative">
      <button class="btn btn-secondary" role="button" id="dropdownMenuLink" data-bs-dropdown="#dropdownMenu">Click me</button>
      <ul class="dropdown-menu hidden dropdown-light" aria-labelledby="dropdownMenuLink" id="dropdownMenu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
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
  }
}
</script>
<style scoped>
@import '../../../src/components/theme.css';
</style>