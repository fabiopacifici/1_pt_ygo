<script>
export default {
  name: 'AppHeader'
}
</script>
<template>
  <header>

    <div class="container">
      <img src="https://images.ygoprodeck.com/images/assets/ygoprodeck_header_logo.png" alt="">
      <span>Yugi-oh API</span>
    </div>
  </header>
</template>


<style scoped>

header {
  background-color: var(--ygo-lighter);
  color: var(--ygo-dark);
  padding: 0.5rem 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;
  }

  & span {
    font-size: 1.25rem;
    font-weight: 600;
  }
}

</style>