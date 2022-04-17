import { Logo, LogoPokeball, LogoSettings, Nav, Settings } from './styles';

const Header = () => {
  return (
    <Nav>
      <LogoPokeball>
        <Logo 
        src="/image/logo-pokedex.png" 
        />
      </LogoPokeball>
      <LogoSettings src="/image/settings.svg" />
    </Nav>
  );
};

export default Header;