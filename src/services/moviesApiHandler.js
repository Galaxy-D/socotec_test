import movieApi from './apiCall.js';

const END_POINT = 'movies';

export default {
    
    //CRUD OPERATION    
    fetchCurrentPageMovies(page){
        return movieApi.get(END_POINT+`/?page=${page}`);
    },

    fetchSingleMovie(id){
        return movieApi.get(END_POINT+`/${id}`);
    },
    updateMovieDetails(id, newTitle, newDescription, newRating){
        return movieApi.patch(END_POINT+`/${id}/`,{
            title:newTitle,
            description:newDescription,
            avg_grade: newRating
        });
    },
}
