<script>
import axios from 'axios';
import { state } from '../state';
export default {
  name: 'AppMain',
  data() {
    return {
      state,
      archetypes: [],
      selectedArchetype: '',
    };
  },
  methods: {
    filterResults() {
      console.log('filter all cards');
      const url = `${state.api_url}&archetype=${this.selectedArchetype}`
      console.log(url);
      state.fetchData(url);

    },

    getArchetypesList(url) {
      axios.get(url)
        .then(response => {
          console.log(response.data);
          this.archetypes = response.data;
        })
        .catch(error => {
          console.log(error);
        })
    }

  },
  mounted() {

    /* Get all archetypes */
    this.getArchetypesList('https://db.ygoprodeck.com/api/v7/archetypes.php');
    /* Get all Cards */
    state.fetchData(state.api_url);

  },
}
</script>
<template>
  <main>
    MAIN Content

    <!-- filter  -->
    <select name="archetype" id="archetype" v-model="selectedArchetype" @change="filterResults">
      <option value="">All</option>
      <!-- all archetypes here -->
      <option :value="archetype.archetype_name" v-for="archetype in archetypes">
        {{ archetype.archetype_name }}
      </option>
    </select>

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