<template>
  <div class="card p-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
      <label class="form-check-label" for="flexCheckIndeterminate">
        Indeterminate checkbox
      </label>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    document.getElementById("flexCheckIndeterminate").indeterminate = true;
  }
}
</script>
<style scoped>
@import '../../../src/components/theme.css';
</style>