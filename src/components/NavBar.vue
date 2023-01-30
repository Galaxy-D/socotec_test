<template>
    <nav>
        <v-app-bar app color="blue" dark>
            <v-icon class="mr-2">fas fa-video</v-icon>
            <v-toolbar-title>SocoTech Movie App</v-toolbar-title>
            <v-btn text class="ml-2" to="/movies">Movies</v-btn>
            <v-btn text class="ml-2" to="/actors">Actors</v-btn>
            <v-spacer></v-spacer>          
        </v-app-bar>
    </nav>

</template>

<script>
export default {
    name:'NavBar',
}
</script>

<style>

</style>