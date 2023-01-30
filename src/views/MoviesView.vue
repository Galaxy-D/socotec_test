<template>
    <div class="home">
      <MovieList/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import MovieList from '@/components/movieList.vue'
  
  export default {
    name: 'MoviesView',
    components: {
      MovieList
    },
    data () {
        return {
          page: 1,
        }
      },
  }
  </script>
  