import axios from './services/axios';

export const getPokemon = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
    const data = response.data.results;
    return data;
}

export const getPokemonURL = async (url) => {
    const result = await axios.get(url)
    return result;
}