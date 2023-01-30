<template>
    <div>
    <v-card class="mx-auto my-12" max-width="300">       
        <router-link :to="`/actors/${actor.id}`">              
            <v-img height="250" src="https://via.placeholder.com/450x800" alt="this an actor's picture"/>
        </router-link> 
        <v-card-text align="left">
            <p>{{ actor.first_name }}</p>
            <p>{{ actor.last_name }}</p>
        </v-card-text>
    </v-card>  
    </div>
</template>

<script>
export default {
    props: {
        actor: {
            required: true,
        }
    }
}
</script>

<style>

</style>