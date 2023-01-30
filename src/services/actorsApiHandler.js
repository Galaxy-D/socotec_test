import movieApi from './apiCall.js';
import axios from 'axios';

const END_POINT = 'actors';

export default {
    //CRUD OPERATION
    
    fetchAllActors(){
        return movieApi.get(END_POINT);
    },

    fetchSingleActor(id){
        return movieApi.get(END_POINT+`/${id}`);
    },
    async fetchActorsByMovie(ids){
        const requests = ids.map((id) => movieApi.get(END_POINT+`/${id}`));
        let actors = [];
        await axios.all(requests).then((responses) => {
            responses.forEach((resp) => {
              actors.push(resp.data);
            });
        });
        return actors;
    },

    updateActorDetails(id, newFirstName, newLastName){
        return movieApi.patch(END_POINT+`/${id}/`,{
            first_name: newFirstName,
            last_name: newLastName
        });
    }
}