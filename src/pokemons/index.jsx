import axios from "axios"
import React, { useState, useEffect } from "react"
import { api } from "../services/api"
import { PokemonMain, PokeCard } from "./styles"
import { Card } from "../Card2/index"

export function PokemonContainer() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        api.get()
            .then((response) => {
                setPokemons(response.data.results)

            })
        console.log("pokemons", pokemons);
    }, [])

    console.log("pokemons", pokemons);

    return (
        <PokemonMain>
            <PokeCard>
                {pokemons.map((pokemon, index) => {
                    return <>
                        <Card props={pokemon} />
                    </>
                })}
            </PokeCard>
        </PokemonMain>)
}

