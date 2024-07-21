import {set, startLoading} from '../store/slices/pokemon/pokemonSlice';
import fetchConfig from './fetchConfig';

export const getPokemons = (page = 0) => {
    return async (dispatch) => {
        dispatch(startLoading());
        await fetch(`${fetchConfig.baseUrl}pokemon?limit=10&offset=${page * 10}`, {method: 'GET', mode: 'cors'})
            .then((res) => res.json())
            .then((data) => {
                dispatch(set({pokemons: data.results, page: page + 1}));
            })
            .catch((err) => {
                console.log(err);
            });
		
    }

}