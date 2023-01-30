<template>
    <div class="mx-3">
    <h2 class="mt-2 grey--text">actors List</h2>
        <v-container fluid>
            <v-row>
                <v-col v-for="actor in actorsList" :key="actor.id">
                    <ActorCard :actor="actor"/>
                </v-col>
            </v-row>   
        </v-container>
    </div>
</template>

<script>
    import ActorCard from '../components/actorCard.vue';
    import { mapState, mapActions } from "vuex";
    export default {
        name: 'actorList',
        components:{
            ActorCard,
        },
        data() {
            return {      
            }
        },
        computed: {
            ...mapState(['actorsList'])
        },
        methods: {
            ...mapActions(['getAllActors']),
        },
        mounted() {
            this.getAllActors();    
        }
    }
</script>

<style></style>