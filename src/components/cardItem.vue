<template>
    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 position-relative">
        <!-- carta con le proprietà passate dal genitore tramite props -->
        <div class="card bg-dark border border-0">
            <img :src="store.imagePath + store.fileSize + image" alt="" class="img-fluid d-block">
        </div>

        <!-- informazioni legate al film -->
        <div class="_myinfocard text-center d-flex flex-column align-items-center justify-content-around">
            <p class="m-0 fs-5 text-white">{{ title }}</p>
            <!-- votazioni -->
            <div>
                <p class="text-warning fw-semibold">Voti:</p>
                <p class="text-warning fw-semibold">{{ votes }}</p>
            </div>
            <!-- nazionalità del film -->
            <img :src="'/images/' + checkFlags + '.png'" :alt="original_language" class="w-25">
        </div>
    </div>
</template>

<script>
import { store } from '../store';
export default {
    name: 'cardItem',
    //passaggio proprieta per creare le carte contenenti i film
    props: [
        'title',
        'original_title',
        'original_language',
        'votes',
        'image',
    ],
    data() {
        return {
            store,
            //gestione mancanza flags
            flags: [
                'en',
                'it',
                'us',
                'es',
                'ja',
                'fr',
            ],
        }
    },

    computed: {
        checkFlags() {
            if (this.flags.includes(this.original_language)) {
                return this.original_language;
            } else {
                return 'out-of-stock';
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>