<template>
  <div class="card p-3">
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled>
      <label class="form-check-label" for="flexRadioDisabled">
        Disabled radio
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled>
      <label class="form-check-label" for="flexRadioCheckedDisabled">
        Disabled checked radio
      </label>
    </div>
  </div>
</template>
<style scoped>
@import '../../../src/components/theme.css';
</style>