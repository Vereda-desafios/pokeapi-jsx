import { useEffect, useState } from "react";
import { getPokemon, getPokemonURL } from "../../api";

import { PokemonContainer } from "./styled";

export default function Pokedex() {
    const [pokemons, setPokemons] = useState([])
    
    useEffect(() => {
        async function PokemonList() {
            const data = await getPokemon()
            const result = data.map(async (pokemon) => getPokemonURL(pokemon.url))

            const finish = await Promise.all(result);
            setPokemons(finish)

        }

        PokemonList();
    }, [])

    return (
        <>
            <div className="searchbar">
                <input type="search" />
            </div>
            <PokemonContainer>
                {pokemons.map((pokemon) => (
                    <div key={pokemon.data.name} className="pokemon-card-container">
                        <div className="pokemon-strings">
                            <span className="pokemon-name">{pokemon.data.name}</span>
                            <div>
                                {pokemon.data.types.map((type) => (
                                    <span key={type.type.name}>{type.type.name}</span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <span className="pokemon-id">#{pokemon.data.id}</span>
                            <img src={pokemon.data.sprites.front_default} alt="pokemon-img" />
                        </div>
                    </div>
                ))}
            </PokemonContainer>
        </>
    )
}