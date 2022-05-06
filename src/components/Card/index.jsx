import { CardContainer, PokemonInfo, PokemonImage } from './styles'
import pokeImg from '../../assets/poke_color _cinza.png'
import pokeImg3 from '../../assets/bulbasaurImg-removebg-preview.png'

export function Card({ types, name, pokemonImage }) {
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