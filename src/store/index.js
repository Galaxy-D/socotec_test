import Vue from 'vue';
import Vuex from 'vuex';
import moviesApiHandler from '../services/moviesApiHandler.js';
import actorsApiHandler from '../services/actorsApiHandler';
import reviewsApiHandler from '../services/reviewsApiHandler';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    moviesList: [],
    movieDetails: {},
    actorsList: [],
    actorDetails: {},
    reviewsList: [],
    newMovieDetails: {},
    newActorDetails: {},
    actorByMovie:[],
    movieReview:''
  },
  getters: {
  },
  mutations: {
    SET_MOVIES_LIST(state,moviesList){
      state.moviesList = moviesList;
    },
    SET_MOVIE_DETAILS(state,movieDetails){
      state.movieDetails = movieDetails;
    },
    SET_ACTORS_LIST(state,actorsList){
      state.actorsList = actorsList;
    },
    SET_ACTOR_DETAILS(state,actorDetails){
      state.actorDetails = actorDetails;
    },
    SET_REVIEWS_LIST(state,reviewsList){
      state.reviewsList = reviewsList;
    },
    SET_ACTOR_BY_MOVIE(state,actorByMovie){
      state.actorByMovie = actorByMovie;
    },    
    UPDATE_MOVIE_DETAILS(state,newMovieDetails){
      state.newMovieDetails = newMovieDetails;
    },
    UPDATE_ACTOR_DETAILS(state,newActorDetails){
      state.newActorDetails = newActorDetails;
    },
    ADD_MOVIE_REVIEW(state,movieReview){
      state.movieReview = movieReview;
    }
  },
  actions: {
    getAllMovies({commit}, payload){
      moviesApiHandler.fetchCurrentPageMovies(payload).then((res)=>{
        commit('SET_MOVIES_LIST',res.data.results);
      }).catch((err)=>{
        console.error(err)
      });
    },    
    getSingleMovie({commit}, payload){
      moviesApiHandler.fetchSingleMovie(payload).then((res)=>{
        commit('SET_MOVIE_DETAILS',res.data);
      }).catch((err)=>{
        console.error(err)
      });
    }, 
    getAllActors({commit}){
      actorsApiHandler.fetchAllActors().then((res)=>{
        commit('SET_ACTORS_LIST',res.data.results);
      }).catch((err)=>{
        console.error(err)
      });
    }, 
    getSingleActor({commit}, payload){
      actorsApiHandler.fetchSingleActor(payload).then((res)=>{
        commit('SET_ACTOR_DETAILS',res.data);
      }).catch((err)=>{
        console.error(err)
      });
    }, 
    getAllReviews({commit}){
      reviewsApiHandler.fetchAllReviews().then((res)=>{
        commit('SET_REVIEWS_LIST',res.data.results);
      }).catch((err)=>{
        console.error(err)
      });
    },
    getActorsByMovie({commit}, payload){
      actorsApiHandler.fetchActorsByMovie(payload).then((res)=>{
        commit('SET_ACTOR_BY_MOVIE',res);
      }).catch((err)=>{
        console.error(err)
      });
    },
    updateSingleMovie({commit},payload){   
      moviesApiHandler.updateMovieDetails(
        payload.id,
        payload.title,
        payload.description
      ).then((res)=>{ 
        commit('UPDATE_MOVIE_DETAILS',res.data);        
      }).catch((err)=>{
        console.error(err)
      });
    },
    updateSingleActor({commit},payload){   
      actorsApiHandler.updateActorDetails(
        payload.id,
        payload.first_name,
        payload.last_name
      ).then((res)=>{ 
        commit('UPDATE_ACTOR_DETAILS',res.data);        
      }).catch((err)=>{
        console.error(err)
      });
    },
    addMovieReview({commit},payload){
      reviewsApiHandler.createMovieReview(payload.movie,payload.grade).then((res)=>{
        commit('ADD_MOVIE_REVIEW',res.data);
      }).catch((err)=>{
        console.error(err)
      });
    }
  },
  modules: {
  }
})
