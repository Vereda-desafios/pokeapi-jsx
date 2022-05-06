import background from '../../assets/backgrounHeader.png';
import pokeball from '../../assets/pokeball.png'
import { HeaderContainer } from './styled';

export default function Header() {
    return (
        <HeaderContainer>
            <img src={background} alt="header background" className="backgroundPokeball" />
            <img src={pokeball} alt="pokeball logo" className="pokeball" />
        </HeaderContainer>
    )
}