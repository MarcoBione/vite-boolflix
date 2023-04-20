import { reactive } from 'vue';

export const store = reactive({
    movies: [],
    series: [],
    baseUrl: 'https://api.themoviedb.org/3/',
    endpoints: {
        movie: 'search/movie',
        tv: 'search/tv'
    },
    params: {
        api_key: '441611ce009131739736fda64feaa3cb',
        query: '', //imput dato dall'utente.. le lettere della ricerca provenienti dal campo di imput vengono salvate qua
    },
    imagePath: 'https://image.tmdb.org/t/p/',
    fileSize: 'w342',

})