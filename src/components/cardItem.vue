<template>
    <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <!-- carta con le proprietà passate dal genitore tramite props -->
            <div class="card">
                <p>{{ title }}</p>
                <p>{{ original_title }}</p>
                <img :src="'/images/' + original_language + '.png'" :alt="original_language" class="w-25">
                <p>{{ votes }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cardItem',
    //passaggio proprieta per creare le carte contenenti i film
    props: [
        'title',
        'original_title',
        'original_language',
        'votes',
    ],
    data() {
        return {
            //gestione mancanza flags
            flags: [
                'en',
                'it',
                'us',
                'es',
                'ja',
                'fr',
                'kn',

            ],
        }
    }
}
</script>

<style lang="scss" scoped></style>