<template>
  <div>

  </div>
</template>

<script>
export default {
  mounted () {
    localStorage.setItem('nuxt-color-mode', 'light');
    let toggle = document.querySelector('footer')
    setTimeout(() => {
      toggle.classList.add('hidden');
    }, 500);
  }
}
</script>