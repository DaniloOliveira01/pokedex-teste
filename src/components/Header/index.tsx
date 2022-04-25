import * as S from './styles';

export const Header = () => {
  return (
    <S.Nav>
      <S.LogoPokeball>
        <S.Logo 
          src="/image/logo-pokedex.png" 
        />
      </S.LogoPokeball>
      
      <S.LogoSettings 
        src="/image/settings.svg" 
      />
    </S.Nav>
  );
};