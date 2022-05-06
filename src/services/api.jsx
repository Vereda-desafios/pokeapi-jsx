import axios from "axios"

export const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/?offset=151&limit=302'
});
