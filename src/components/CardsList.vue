<script>
import CardItem from './CardItem.vue';

export default {
    name: 'CardsList',
    props: {
        cards: Array
    },
    components: { CardItem }
}
</script>

<template>
  <section class="cards">
    <div class="container">
      <div class="row">
        <div class="col" v-for="card in cards">
          
          <CardItem :card="card"></CardItem>
          
        </div>
      </div>
    </div>

  </section>
</template>


<style scoped></style>