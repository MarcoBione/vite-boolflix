<template>
  <div>
    <headerComponent @on-search="getData" />
    <!-- la proprieta che deve rimanere in ascolto dell'evento necessita di una sintassi con il '-' perche l'html non vuole il camelcase -->

    <main>

      <!-- films -->
      <section class="container-fluid">
        <h2>Film</h2>

        <!-- componente 'card' il quale passo le proprità contenute nell'array in store + ciclo stampa -->
        <CardItem v-for="item, index in store.movies" :key="item.id" :title="item.title"
          :original_title="item.original_title" :original_language="item.original_language" :votes="item.vote_average" />

      </section>

      <!-- tv series -->
      <section class="container-fluid">
        <h2>Serie TV</h2>
        <!-- componente 'card' il quale passo le proprità contenute nell'array in store + ciclo stampa -->
        <CardItem v-for="item, index in store.series" :key="item.id" :title="item.name"
          :original_title="item.original_name" :original_language="item.original_language" :votes="item.vote_average" />
      </section>
    </main>


  </div>
</template>

<script>
import { store } from './store';
import axios from 'axios';

import headerComponent from './components/headerComponent.vue';
import mainComponent from './components/mainComponent.vue';
import footerComponent from './components/footerComponent.vue';

import CardItem from './components/cardItem.vue';

export default {
  //registro le chiavi dei componenti
  components: { headerComponent, mainComponent, footerComponent, CardItem },

  data() {
    return {
      store,
    }
  },

  methods: {
    getFilm() {
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
    },
    getSeries() {
      //creo url
      const url = store.baseUrl + store.endpoints.tv;
      //creao query
      const options = {
        params: store.params
      }
      //effettuo la chiamata
      axios.get(url, options).then((res) => {
        //recupero i dati
        //controllo dei dati chiamati
        console.log(res.data);
        this.store.series = res.data.results; //con this è più corretto
        //controllo l'array
        console.log(store.movies);
      });
    },
    getData() {
      this.getFilm(),
        this.getSeries()
    }
  },

  mounted() {

  },

}
</script>

<style lang="scss" scoped></style>
