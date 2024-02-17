<script>
import {state} from '../state.js';
export default {
 name: 'ArchetypesFilter',
 emits: ['filter'],
 data(){
  return {
    state
  }
 },
 created(){
  this.state.getArchetypesList('https://db.ygoprodeck.com/api/v7/archetypes.php')
 }
}
</script>
<template>
  <select name="archetype" id="archetype" v-model="state.selectedArchetype" @change="$emit('filter')">
    <option value="">All</option>
    <!-- all archetypes here -->
    <option :value="archetype.archetype_name" v-for="archetype in state.archetypes">
      {{ archetype.archetype_name }}
    </option>
  </select>
</template>


<style scoped></style>