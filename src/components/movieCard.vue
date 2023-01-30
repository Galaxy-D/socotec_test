<template>
    <div>
        <v-card class="mx-auto my-12" max-width="300">
            <router-link :to="`/movies/${movie.id}`">
                <v-img height="250" src="https://via.placeholder.com/450x800" alt="this is a movie's poster"/>
            </router-link>

            <v-row class="mx-0">
            <v-card-title class="subtitle-2">{{movie.title}}</v-card-title>      
            </v-row>

            <v-card-text align="left">
                <v-row align="center" class="mx-0">
                    <h4>Rating</h4>
                    <v-spacer></v-spacer>
                    <v-rating readonly color="amber" dense half-increments hover>
                    </v-rating>
                </v-row>
                <v-row align="left" class="mx-0">
                    <div class="my-4 subtitle-2">
                        <h4>Actors</h4>
                        <span v-for="actor in actorByMovie" :key="actor.id" class="ml-1">
                            {{actor.first_name + ' ' + actor.last_name}}
                        <span v-if="(actorByMovie.length - 1 != index)">, </span>
                        </span>
                    </div>
                </v-row>
                <v-row align="left" class="mx-0">
                    <div>
                        <h4>Description</h4>
                        <p>{{ movie.description }}</p>
                    </div>
                </v-row>
            </v-card-text>     
        </v-card> 
    </div>  
</template>

<script>
  import { mapState, mapActions } from "vuex";
export default {
  data() {
    return { 
      rating: 0,
    }
  },
    props: {
        movie: {
            required: true,
        }
    },
    computed: {
      ...mapState(['actorByMovie'])
    },
    methods: {
      ...mapActions(['getActorsByMovie']),
    },
    async mounted() {   
      await this.getActorsByMovie(this.movie.actors);
    }

}
</script>

<style></style>