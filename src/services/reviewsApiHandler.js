import movieApi from './apiCall.js';

const END_POINT = 'reviews/';

export default {    
    //CRUD OPERATION    
    fetchAllReviews(){
        return movieApi.get(END_POINT);
    },
    createMovieReview(movieId,gradeValue){
        return movieApi.post(END_POINT,{
            movie: movieId,
            grade:gradeValue,
        });
    },
}
