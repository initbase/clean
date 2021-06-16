<template>
  <div class="relative">
    <button id="button" class="tooltip-element btn btn-primary" aria-describedby="tooltip">Hover me</button>
    <div id="tooltip" class="hidden tooltip text-center" role="tooltip">
      Tooltip center
      <svg data-popper-arrow class="arrow" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
    </div>
  </div>
</template>
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
<style scoped>
@import '../../../src/components/theme.css';
</style>