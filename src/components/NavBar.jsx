import React from 'react';

const NavBar = (props) => {

    const pikaClick = (index) => {
        if (index === 3) {
        alert("pika pikachu !!!")
      }}

    console.log(props);
    return (
        <div>
        {props.listPokemon.map((pokemon, index) => (
            <div key={index}>
            <button onClick={() => {props.setPokemonIndex(index); pikaClick(index);}}>{pokemon.name}</button>
            </div>
        ))}
        </div>
    )
}

export default NavBar;