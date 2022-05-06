import styled from 'styled-components';

export const PokemonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    span{
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-left: 10px;

        div {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 10px;
        }
    }
`