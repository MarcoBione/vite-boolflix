<template>
    <div>

        <header class="container-fluid d-flex justify-content-between align-items-center">

            <div class="h-25 d-flex">
                <img src="../../public/images/Boolflix.png" alt="App-logo" class="h-100">
                <p>Home</p>
                <p>La mia lista</p>
            </div>

            <div class="d-flex">
                <input type="text" class="form-control me-3 w-50" v-model="store.params.query"
                    @keyup.enter="$emit('onSearch')">
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
  