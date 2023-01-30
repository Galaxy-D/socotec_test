<template>
    <div class="actors">
      <ActorList/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import ActorList from '@/components/actorList.vue'
  
  export default {
    name: 'ActorsView',
    components: {
        ActorList
    },
    data () {
        return {
        }
      },
  }
  </script>