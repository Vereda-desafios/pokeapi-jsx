import React from 'react'
import top from '../assets/desafio-vereda-assets/top.png'
import pokeball1 from '../assets/desafio-vereda-assets/pokeball-png.png'
import search from '../assets/desafio-vereda-assets/magnifying-glass.png'
import { StyledHeader, Image, Pokeball, Input, Title, Button, Container, Icon } from './Header.style'

export default function Header() {
  return (

    <StyledHeader>
        <Image src={top}/>
        <Pokeball src={pokeball1}/>

        
            <Input type='text'/>
            
        <Container>
            
                <Icon src={search} />
            
            
        </Container>
        <Title>Pokédex</Title>
    </StyledHeader>

  )
}
