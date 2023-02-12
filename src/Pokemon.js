import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Pokemon = () => {
//   try {
//     let pokemon = axios
//         .get('https://pokeapi.co/api/v2/pokemon')
//         .then(response => {
//           console.log(response.data.results);
//     });
//   } catch (err) {
//       console.log(err);
//   }
// }
// console.log(pokemon);

const [pokemon, setPokemon] = useState([]);

const getPokemon = async () => {
  try {
    const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon');
    return data.results
  } catch (err) {
    console.log(err);
  }
};
useEffect(() => {
  (async() => {
    const pokemonData = await getPokemon();
    console.log(pokemonData);
    setPokemon((pokemon) => [...pokemonData])
  }) ()
  return () => {};
}, []);

return (
  <>
    <h2>In Pokemon component</h2>
    <button onClick={getPokemon}>Get Pokemon</button>
    <div>
      {pokemon.map((pokemon, index) => {
        return <p key={index}>Pokemon's name: {pokemon.name}</p>
      })}
    </div>
  </>
)
}
export default Pokemon;