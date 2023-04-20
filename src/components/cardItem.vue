<template>
    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2">
        <!-- carta con le proprietà passate dal genitore tramite props -->
        <div class="card">
            <img :src="store.imagePath + store.fileSize + image" alt="" class="img-fluid">
            <p>{{ title }}</p>
            <!-- <p>{{ original_title }}</p> -->
            <img :src="'/images/' + checkFlags + '.png'" :alt="original_language" class="w-25">
            <p>{{ votes }}</p>
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
                return 'flying';
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>