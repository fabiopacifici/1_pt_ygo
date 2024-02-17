<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  name: 'App',
  data() {
    return {
      cards: [],
    };
  },
  mounted() {
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
      .then(response => {
        console.log(response.data.data);
        this.cards = response.data.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
  components: { AppHeader, AppMain }
}
</script>
<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>

  <div>

    <div class="card" v-for="card in cards">
      <img :src="card.card_images[0].image_url">
      <h3>{{ card.name }}</h3>
      <div>
        {{ card.archetype }}
      </div>
    </div>

  </div>
</template>


<style></style>