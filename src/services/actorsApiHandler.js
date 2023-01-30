import movieApi from './apiCall.js';

const END_POINT = 'actors';

export default {
    //CRUD OPERATION
    
    fetchAllActors(){
        return movieApi.get(END_POINT);
    },

    fetchSingleActor(id){
        return movieApi.get(END_POINT+`/${id}`);
    },

    updateActorDetails(id, newFirstName, newLastName){
        return movieApi.patch(END_POINT+`/${id}/`,{
            first_name: newFirstName,
            last_name: newLastName
        });
    }
}