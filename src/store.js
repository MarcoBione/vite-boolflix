import { reactive } from 'vue';

export const store = reactive({
    baseUrl: 'https://api.themoviedb.org/3',
    autenthenticationKey: '?api_key=441611ce009131739736fda64feaa3cb',
    movieEndpoint: '/movie',
    SeriesEndpoint: '/tv',
    logo: 'Netflix',
})