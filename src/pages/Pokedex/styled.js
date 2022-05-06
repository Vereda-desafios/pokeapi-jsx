import styled from 'styled-components';

export const PokemonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    
    margin-top: 4rem;

    .pokemon-card-container {
        display: flex;
        justify-content: space-between;

        width: 20%;

        border: 1px solid #eee;
        border-radius: 30px;

        margin-left: 10px;
    }

    .pokemon-strings {
        display: flex;
        flex-direction: column;

        font-weight: 700;
    }
    
    .pokemon-name {
        margin-bottom: 5px;
        padding: 10px;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-left: 10px;


        div {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 10px;
        }
    }
`