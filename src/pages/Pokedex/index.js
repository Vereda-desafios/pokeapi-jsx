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
            {pokemons.map((pokemon) => (
                <PokemonContainer key={pokemon.data.name}>
                    <div className="Pokemon-Name">{pokemon.data.name}</div>
                    <span>
                        {pokemon.data.types.map((type) => (
                            <div key={type.type.name}>{type.type.name}</div>
                        ))}
                    </span>
                    <img src={pokemon.data.sprites.front_default} alt="pokemon-img" />
                </PokemonContainer>
            ))}
        </>
    )
}