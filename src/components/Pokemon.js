import React, {useState, useEffect} from 'react';

const  Pokemon = props => {
    const[pokemon, setPokemon] = useState([]);

    // useEffect(() => {
    //     fetch ('https://pokeapi.co/api/v2/pokemon/')
    //         .then(response => response.json())
    //         .then(response => setPokemon(response.results))
    // }, []);


    const fetchPokemon = () =>{
        fetch ('https://pokeapi.co/api/v2/pokemon/')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }


    return (
        <div>
            <button onClick= {fetchPokemon}>Fetch Pokemon</button>
            {pokemon.map((pokemon, i) =>{
                return (<div key = {i}> {pokemon.name}</div>)
            })}
        </div>
    );
}
export default Pokemon;