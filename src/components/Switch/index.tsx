import Switch from 'react-switch'
import * as S from './styles'

import { 
  MdDarkMode as DarkModeIcon,
  MdLightMode as LightModeIcon
} from 'react-icons/md'

type SwitchThemeProps = {
  onToggleTheme: () => void
  themeState: boolean
}

export const SwitchTheme = ({ onToggleTheme, themeState }: SwitchThemeProps) => {
  return (
    <>
      <Switch 
        onChange={onToggleTheme}
        checked={themeState}
        offColor='#192a52'
        onColor='#39cfe3'
        checkedIcon={
          <S.IconWrapper>
            <LightModeIcon />
          </S.IconWrapper>
        }
        uncheckedIcon={
          <S.IconWrapper>
            <DarkModeIcon/>
          </S.IconWrapper>
        }
      />
    </>
  )
}