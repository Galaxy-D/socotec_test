<template>
    <div class="mx-3">
    <h2 class="mt-2 grey--text">Movies List</h2>
        <v-container fluid>
            <v-row>
                <v-col v-for="movie in moviesList" :key="movie.id">
                    <MovieCard :movie="movie"/>
                </v-col>
            </v-row>
            <v-pagination v-model="page" :length="3" color="#D81B60" circle  
                @input="getAllMovies(page)"
                @next="getAllMovies(page)"
                @previous="getAllMovies(page)"
            ></v-pagination>    
        </v-container>
    </div>
</template>

<script>
    import MovieCard from '../components/movieCard.vue';
    import { mapState, mapActions } from "vuex";
    export default {
        name: 'movieList',
        components:{
            MovieCard,
        },
        data() {
            return {      
                page: 1,
            }
        },
        computed: {
            ...mapState(['moviesList'])
        },
        methods: {
            ...mapActions(['getAllMovies']),
        },
        mounted() {
            this.getAllMovies(this.page);    
        }
    }
</script>

<style></style>