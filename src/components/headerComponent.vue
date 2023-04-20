<template>
    <div>

        <header class="container-fluid d-flex justify-content-between align-items-center px-4">

            <div class="h-25 d-flex">
                <img src="/images/Boolflix.png" alt="App-logo" class="h-100">
                <p class="_mycommands">Home</p>
                <p class="_mycommands">La mia lista</p>
                <p class="_mycommands">Film</p>
                <p class="_mycommands">Serie TV</p>
            </div>

            <div class="d-flex justify-content-end">
                <input type="text"
                    class="form-control rounded-2 me-3 w-50 bg-transparent shadow-none border border-top-0 border-end-0 border-start-0 text-white"
                    v-model="store.params.query" @keyup.enter="$emit('onSearch')" placeholder="Cerca un titolo">
                <!--carico la ricerca effettuata dall'utente nella query -->
                <button class="btn btn-danger" @click="$emit('onSearch')">Cerca</button>
                <!-- aggiungo un evento con emit per trasmetterlo al padre 'app' -->
            </div>

        </header>

    </div>
</template>
  
<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    }
}
</script>
  
<style lang="scss" scoped>
header {
    width: 100%;
    height: 100px;
    background: linear-gradient(#000000, transparent);
}
</style>
  