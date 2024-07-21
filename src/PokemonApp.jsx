import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./api";

const PokemonApp = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPokemons());
    }, []);
    const { pokemons, isLoading, page } = useSelector(state => state.pokemons);
    return (
        <React.Fragment>
            <h1>Pokemon App</h1>
            <hr />
            <span>{!isLoading ? '' : 'Cargando...'}</span>
            <ul>
                {pokemons.map((pokemon) => (
                    <li key={Math.random()}>{pokemon.name}</li>
                ))}
            </ul>
            <button
                disabled={isLoading}
                onClick={() => dispatch(getPokemons(page))}
            >
				another {page * 10}
            </button>
        </React.Fragment>
    );
}

PokemonApp.propTypes = {}

export default PokemonApp