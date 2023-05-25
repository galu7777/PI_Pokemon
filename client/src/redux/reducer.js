import { CREATE_POKE, GET_ALL_POKE, GET_ALL_TYPES } from "./actions-types";


const stateInitial = {
    page: 12,
    allPokemons: [],
    pokemons: [],
    types: []
}


const reducer = ( state = stateInitial, { type, payload } ) => {
    switch(type){
        case GET_ALL_POKE:
            return {
                ...state,
                allPokemons: payload
            }
        case CREATE_POKE:
            return {
                ...state,
                pokemons: payload
            }
        case GET_ALL_TYPES:
            return {
                ...state,
                types: payload
            }
        default:
            return {...state}
    }
}

export default reducer;