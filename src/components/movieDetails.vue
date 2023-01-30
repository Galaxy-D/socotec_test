<template>
    <div>
      <v-container>
          <v-row>
              <v-col cols="12" sm="4">
                  <v-hover v-slot="{ hover }" open-delay="200">
                      <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
                        <v-img src="https://via.placeholder.com/75x100" alt="this is a movie's poster"/>
                      </v-card>
                  </v-hover>
              </v-col>
              <v-col cols="12" sm="8" align="left">
                  <h1 class="grey--text text-darken-3 mt-5">{{movieDetails.title}}</h1>
                  <v-row>
                    <v-rating :value="avrg_rating" color="amber" dense half-increments hover readonly></v-rating>
                    <p>{{ avrg_rating }}</p>
                  </v-row>   
                  <v-row>  
                    <div>
                      <h4 class="grey--text text-darken-3 mt-5">Actors</h4>
                      <span v-for="(actor, index) in actorByMovie" :key="actor.id" class="ml-1">
                        {{actor.first_name + ' ' + actor.last_name}}
                        <span v-if="(actorByMovie.length - 1 != index)">, </span>
                      </span>
                    </div>
                  </v-row>
                  <v-row>
                    <div>
                        <h4  class="grey--text text-darken-3 mt-5">Description</h4>
                        <p>{{movieDetails.description}}</p>
                    </div>
                  </v-row>
                  <v-row>
                    <v-dialog v-model="dialog" max-width="600px" transition="dialog-top-transition">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn color="purple" dark v-bind="attrs" v-on="on">Edit Movie Details</v-btn>
                      </template>
                      <v-card>
                        <v-card-title class="purple">
                          <span class="text-h5">Movie Details Editor</span>
                        </v-card-title>
                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Title" required v-model="newDetails.title"></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-textarea outlined label="Movie Description" required v-model="newDetails.description"></v-textarea>
                              </v-col>
                              <v-col cols="12" sm="6">
                                <v-select :items="['1', '2', '3', '4','5']" label="Rating" required v-model.number="newDetails.rating"></v-select>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                          <v-btn color="blue darken-1" text @click.prevent="handelSubmit">Save</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-row>
              </v-col>
          </v-row>        
      </v-container>
    </div>
    
  </template>
  
  <script>
    import { mapState, mapActions } from "vuex";
  
    export default {
      name: 'movieDetail',
      components: {
      },
      data() {
        return {      
          page: 1,
          dialog: false,
          newDetails: {
            title:'',
            description:'',  
            rating: 0,
          },
          avrg_rating: 0,
        }
      },
      computed: {
        ...mapState(['movieDetails','actorByMovie','reviewsList'])
      },
      methods: {
        ...mapActions(['getSingleMovie','getActorsByMovie','updateSingleMovie','addMovieReview', 'getAllReviewsByMovie']),     
        async handelSubmit(){
          let moviePayload = {
            id:this.$route.params.id, 
            title:this.newDetails.title,
            description:this.newDetails.description
          }
          let reviewPayload = {
            movie:this.$route.params.id, 
            grade:this.newDetails.rating,
          }
          await this.updateSingleMovie(moviePayload);  
          await this.addMovieReview(reviewPayload);
          this.dialog = false;       
        },
        reviewAvrg(){          
          let gradeTab = [];
          this.reviewsList.forEach((el)=>{
            gradeTab.push(el.grade);
          })
          let avrg =  gradeTab.reduce((acc, curr) => acc + curr,0) / gradeTab.length;
          return this.avrg_rating = avrg;
        }
      },
      async mounted() {
        await this.getSingleMovie(this.$route.params.id);       
        await this.getActorsByMovie(this.movieDetails.actors);
        await this.getAllReviewsByMovie(this.$route.params.id);
        await this.reviewAvrg();
      }
    }
  </script>
  
  <style>
  </style>