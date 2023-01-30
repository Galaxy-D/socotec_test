<template>
    <div>    
        <h2 align="left">Reviews</h2>
      <v-container>
        <v-row>
            <v-col cols="12" sm="8" align="left">
                <v-row>
                  <v-dialog v-model="dialog" max-width="600px" transition="dialog-top-transition">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="purple" dark v-bind="attrs" v-on="on">Add review</v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="purple">
                        <span class="text-h5">Review box</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12">
                              <v-textarea outlined label="New Comment" required v-model="newComment"></v-textarea>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
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
  name: 'reviewList',
  data() {
    return {      
      dialog: false,
      newComment:''

    }
  },
  computed: {
    ...mapState(['reviewsList'])
  },
  methods: {
    ...mapActions(['getAllReviews']),
  },
  mounted() {
    this.getAllReviews();    
  }
}
</script>

<style>

</style>