const PokemonCard = (props) => {
    const pokemon = props.pokemon;
    console.log(props)
  return (
    <figure>
        {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.name} />) : (<p>???</p>)}
            <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
};

export default PokemonCard;