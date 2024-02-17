<script>
import axios from 'axios';
import { state } from '../state';
import ArchetypesFilter from './ArchetypesFilter.vue';
import CardsList from './CardsList.vue';
export default {
  name: 'AppMain',
  components: { ArchetypesFilter, CardsList },
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
    /* Get all Cards */
    state.fetchData(state.api_url);
  },
}
</script>
<template>
  <main>

    <!-- filter  -->
    <ArchetypesFilter @filter="filterResults"></ArchetypesFilter>
    <!-- total results -->
    <div>
      {{ state.cards.length }}
    </div>

    <!-- cards list -->
    <CardsList :cards="state.cards"></CardsList>

  </main>
</template>


<style scoped></style>