import React from 'react';

const NavBar = (props) => {
    console.log(props);
    return (
        <div>
        {props.listPokemon.map((pokemon, index) => (
            <div key={pokemon.name}>
            <button onClick={() => props.setPokemonIndex(index)}>{pokemon.name}</button>
            </div>
        ))}
        </div>
    )
}

export default NavBar;