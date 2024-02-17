import {reactive} from 'vue'
import axios from 'axios';

export const state = reactive({
  /* Reactive object - global state */
  api_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
  cards: [],
  archetypes: [],
  selectedArchetype: '',
  fetchData(url) {
    axios.get(url)
      .then(response => {
        console.log(response.data.data);
        this.cards = response.data.data;
      })
      .catch(error => {
        console.error(error);
      });
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
})