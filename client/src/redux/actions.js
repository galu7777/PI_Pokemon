import axios from 'axios';
import { CREATE_POKE, GET_ALL_POKE, GET_ALL_TYPES } from './actions-types';

export const getAllPokemons = () => {
   return async (dispatch) => {
     try {
       const response = await axios.get(`http://localhost:3001/pokemon?limit=12`);
       const data = response.data;
       dispatch({ type: GET_ALL_POKE, payload: data });
     } catch (error) {
       console.error('Error fetching data:', error);
     }
   };
 };

 export const createPokemons = (pokemon) => {
   const endpoint = 'http://localhost:3001/pokemon';
   return async (dispatch) => {
     try {
       const response = await axios.post(endpoint, pokemon);
       const data = response.data;
       dispatch({
         type: CREATE_POKE,
         payload: data,
       });
     } catch (error) {
       console.error('Error creating pokemon:', error);
     }
   };
 };
 
 export const getAllTypes = () => {
   const endpoint = 'http://localhost:3001/pokemon/type';
   return async (dispatch) => {
     try {
       const response = await axios.get(endpoint);
       const data = response.data;
       dispatch({
         type: GET_ALL_TYPES,
         payload: data,
       });
     } catch (error) {
       console.error('Error getting all types:', error);
     }
   };
 };