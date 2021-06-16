<template>
  <div class="card p-3">
    <div class="mb-3 grid grid-cols-12">
      <label for="staticEmail" class="col-span-2 form-label">Email</label>
      <div class="col-span-10">
        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
      </div>
    </div>
    <div class="mb-3 grid grid-cols-12">
      <label for="inputPassword" class="col-span-2 form-label">Password</label>
      <div class="col-span-10">
        <input type="password" class="form-control" id="inputPassword">
      </div>
    </div>
  </div>
</template>
<style scoped>
@import '../../../src/components/_forms.css';
@import '../../../src/components/_card.css';
</style>