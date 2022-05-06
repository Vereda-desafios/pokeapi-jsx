import styled from 'styled-components'
import pokeImg from '../../assets/poke_color _cinza.png'
import pokeImg2 from '../../assets/magnifying-glass.png'

export const CardContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    width: 220px;
    height: 180px;
    background-image: url(${pokeImg});
    background-color: #0BDB6D;
    border-radius: 30px;
    padding: 20px 10px;

    h2 {    
        font-size: 20px;
        color: white;
    }
`

export const PokemonInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 8px;

    div {
        width: auto;
        padding: 4px 12px;
        display: inline;
        background-color: #62F3A6;
        border-radius: 30px;
        text-transform: capitalize;
        color: white;
        font-size: 13px;
        box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
    }
`

export const PokemonImage = styled.div`
    position: relative;
    img {
        width: 60%;
        height: auto;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        opacity: 0.3;
        transition: all 0.2s;
    }

    img.pokemon-image {
        width: 40%;
        height: auto;
        opacity: 1;
        left: 110px;
    }

    &:hover {
        img {
            width: 62%;
        }

        img.pokemon-image {
            width: 42%;
        }
    }
`

