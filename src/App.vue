<template>
  <div>
    <headerComponent />

    <ul>
      <li v-for="film in store.movies">
        <!-- controllo che tutto funzioni -->
        {{ film.title }}
        {{ film.original_title }}
        {{ film.original_language }}
        {{ film.vote_average }}
      </li>
    </ul>
  </div>
</template>

<script>
import { store } from './store';
import axios from 'axios';

import headerComponent from './components/headerComponent.vue';
import mainComponent from './components/mainComponent.vue';
import footerComponent from './components/footerComponent.vue';

export default {

  components: { headerComponent, mainComponent, footerComponent },

  data() {
    return {
      store,
    }
  },

  methods: {
    getData() {
      //creo url
      const url = store.baseUrl + store.endpoints.movie;
      //creao query
      const options = {
        params: store.params
      }
      //effettuo la chiamata
      axios.get(url, options).then((res) => {
        //recupero i dati
        //controllo dei dati chiamati
        console.log(res.data);
        this.store.movies = res.data.results; //con this è più corretto
        //controllo l'array
        console.log(store.movies);
      });
    }
  },

  mounted() {
    this.getData()
  },

}
</script>

<style lang="scss" scoped></style>
