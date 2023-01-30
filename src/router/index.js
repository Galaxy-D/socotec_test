import Vue from 'vue'
import VueRouter from 'vue-router'
import MoviesView from '../views/MoviesView.vue'
import ActorsView from '../views/ActorsView.vue'
import MovieDetails from '../components/movieDetails.vue'
import ActorDetails from '../components/actorDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/movies',
    name: 'movies',
    component: MoviesView
  },
  {
    path: '/movies/:id',
    name: 'movie',
    component: MovieDetails
  },
  {
    path: '/actors',
    name: 'actors',
    component: ActorsView
  },
  {
    path: '/actors/:id',
    name: 'actor',
    component: ActorDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
