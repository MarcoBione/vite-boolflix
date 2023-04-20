<template>
  <div class="application">
    <main class="overflow-x-auto px-4">

      <headerComponent class="fixed-top" @on-search="getData" />
      <!-- la proprieta che deve rimanere in ascolto dell'evento necessita di una sintassi con il '-' perche l'html non vuole il camelcase -->

      <!-- films -->
      <h2 class="fs-1 mt-4">Film</h2>
      <section class="container-fluid">

        <div class="row w-100 overflow-auto d-flex flex-nowrap">
          <!-- componente 'card' il quale passo le proprità contenute nell'array in store + ciclo stampa -->
          <CardItem v-for="item, index in store.movies" :key="item.id" :title="item.title"
            :original_title="item.original_title" :original_language="item.original_language" :votes="item.vote_average"
            :image="item.poster_path" />
        </div>

      </section>

      <!-- tv series -->
      <h2 class="fs-1 mt-4">Serie TV</h2>
      <section class="container-fluid">

        <div class="row w-100 overflow-auto d-flex flex-nowrap mt-0">
          <!-- componente 'card' il quale passo le proprità contenute nell'array in store + ciclo stampa -->
          <CardItem v-for="item, index in store.series" :key="item.id" :title="item.name"
            :original_title="item.original_name" :original_language="item.original_language" :votes="item.vote_average"
            :image="item.poster_path
            " />
        </div>

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
        //console.log(res.data);
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
        //console.log(res.data);
        this.store.series = res.data.results; //con this è più corretto
        //controllo l'array
        console.log(store.series);
      });
    },
    getData() {
      this.getFilm(), this.getSeries()
    }
  },

  mounted() {

  },

}
</script>

<style lang="scss" scoped>
.application {
  background-color: black;
}

main {
  width: 100%;
  height: 100%;
  padding-top: 100px;

  h2 {
    color: white;
    opacity: 50%;
    transition: opacity .3s;

    &:hover {
      opacity: 100%
    }
  }
}
</style>
