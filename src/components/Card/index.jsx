import { CardContainer, PokemonInfo, PokemonImage } from './styles'
import pokeImg from '../../assets/poke_color _cinza.png'
import pokeImg3 from '../../assets/bulbasaurImg-removebg-preview.png'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

export function Card({ url, name, types, pokemonImage }) {

    useEffect(() => {
        const getData = async () => {
            const path = await axios.get(url)
            const res = path.data.sprites.front_default
            console.log("effect do card", path.data.sprites.front_default)
        }
        getData();
    }, [])

    return (
        <CardContainer>
            <h2>{name}</h2>
            <div>
                <PokemonInfo>
                    <div>{types}</div>
                    <div>{types}</div>
                </PokemonInfo>
                <PokemonImage>
                    <img src={pokeImg} />
                    <img className="pokemon-image" src={pokemonImage} />
                </PokemonImage>
            </div>
        </CardContainer>
    )
}