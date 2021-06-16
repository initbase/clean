<template>
  <div v-if="variant">
    <div class="card card-rounded-none mb-5">
      <div class="card-body">
        Rounded card with some variant
      </div>
    </div>
    <div class="card card-rounded-lg mb-5">
      <div class="card-body">
        Rounded card with some variant
      </div>
    </div>
    <div class="card card-rounded-2xl mb-5">
      <div class="card-body">
        Rounded card with some variant
      </div>
    </div>
  </div>
  <div v-else>
    <div class="card">
      <div class="card-body">
        This is some text within a card body.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['variant']
}
</script>
<style scoped>
@import '../../../src/components/_card.css';
</style>