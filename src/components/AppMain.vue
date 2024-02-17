<script>
import axios from 'axios';
import { state } from '../state';
import ArchetypesFilter from './ArchetypesFilter.vue';
export default {
  name: 'AppMain',
  data() {
    return {
      state,
    };
  },
  methods: {
    filterResults() {
      console.log('filter all cards');
      let url;
      console.log(url);
      if (state.selectedArchetype === '') {
        url = state.api_url;
      } else {
        url = `${state.api_url}&archetype=${state.selectedArchetype}`;
      }
      state.fetchData(url);
    },
  },
  mounted() {
    /* Get all archetypes */
    //this.getArchetypesList('https://db.ygoprodeck.com/api/v7/archetypes.php');
    /* Get all Cards */
    state.fetchData(state.api_url);
  },
  components: { ArchetypesFilter }
}
</script>
<template>
  <main>
    MAIN Content

    <!-- filter  -->
    <ArchetypesFilter @filter="filterResults"></ArchetypesFilter>
    <!-- total results -->

    <!-- cards list -->

    <section class="cards">
      <div class="container">
        <div class="row">
          <div class="col" v-for="card in state.cards">
            <div class="card">
              <img :src="card.card_images[0].image_url">
              <h3>{{ card.name }}</h3>
              <div>
                {{ card.archetype }}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  </main>
</template>


<style scoped></style>