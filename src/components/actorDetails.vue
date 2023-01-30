<template>
    <div>
      <v-container>
        <v-row>
            <v-col cols="12" sm="4">
                <v-hover v-slot="{ hover }" open-delay="200">
                    <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
                      <v-img src="https://via.placeholder.com/75x100" alt="this is an actor's picture"/>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col cols="12" sm="8" align="left">
                <v-row>  
                  <div>
                    <p>{{ actorDetails.first_name }}</p>
                    <p>{{ actorDetails.last_name }}</p>
                  </div>
                </v-row>
                <v-row>
                  <v-dialog v-model="dialog" max-width="600px" transition="dialog-top-transition">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="purple" dark v-bind="attrs" v-on="on">Edit Actor Details</v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="purple">
                        <span class="text-h5">Actor Details Editor</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field label="Actor first name" required v-model="newDetails.first_name"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field label="Actor last name" required v-model="newDetails.last_name"></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" text @click="handelSubmit">Save</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-row>
            </v-col>
        </v-row>
        <v-divider class="mt-2"></v-divider>
      </v-container>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: 'actorDetail',
  data() {
    return {      
      dialog: false,
      newDetails: {
          first_name:'',
          last_name:''
        }
    }
  },
  computed: {
    ...mapState(['actorDetails'])
  },
  methods: {
    ...mapActions(['getSingleActor','updateSingleActor']),
    async handelSubmit(){
        let payload = {
          id:this.$route.params.id, 
          first_name:this.newDetails.first_name,
          last_name:this.newDetails.last_name
        }
        await this.updateSingleActor(payload);  
        this.dialog = false;       
      }
  },
  mounted() {
    this.getSingleActor(this.$route.params.id);    
  }
}
</script>

<style>

</style>