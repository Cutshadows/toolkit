import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        set: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = [...state.pokemons, action.payload.pokemons];
        },
    },
});


// Action creators are generated for each case reducer function
export const { startLoading, set } = pokemonSlice.actions;