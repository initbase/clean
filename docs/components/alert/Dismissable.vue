<template>
  <div id="alert" class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong class="font-bold text-gray-800">Holy guacamole!</strong> You should check in on some of those fields below.
    <button id="alert-close" type="button" class="btn-close"  aria-label="Close"></button>
  </div>
</template>

<script>
export default {
  mounted () {
    document.getElementById('alert-close').addEventListener('click', function () {
      document.getElementById('alert').classList.remove('show')
    })
  }
}
</script>

<style scoped>
@import '../../../src/components/_alert.scss';
strong {
  color: initial !important;
}
</style>