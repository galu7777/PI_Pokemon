import { CREATE_POKE, GET_ALL_TYPES } from "./actions-types";


const stateInitial = {
    pokemons: [],
    types: []
}


const reducer = ( state = stateInitial, { type, payload } ) => {
    switch(type){
        case CREATE_POKE:
            return {
                ...state,
                pokemons: [...state.pokemons, payload]
            }
        case GET_ALL_TYPES:
            return {
                ...state,
                types: [state.types, payload]
            }
        default:
            return {...state}
    }
}

export default reducer;