import axios from 'axios';
import { CREATE_POKE, GET_ALL_TYPES } from './actions-types';

export const createPokemons = (pokemon) => {
    const endpoint = 'http://localhost:3001/pokemon';
      return (dispatch) => {
         axios.post(endpoint, pokemon).then(({ data }) => {
            return dispatch({
               type: CREATE_POKE,
               payload: data,
            });
         });
      };
};


export const getAllTypes = () => {
   const endpoint = 'http://localhost:3001/pokemon/type';
   return (dispatch) => { 
      axios.get(endpoint).then(({ data }) => { 
         return dispatch({
            type: GET_ALL_TYPES,
            payload: data,
         })
      })
   }
}