import { Dispatch, SetStateAction } from "react";

export interface ISwitchThemeProps {
    onToggleTheme: () => void
    themeState: boolean
}

export interface IMenuMobileProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}
  
export interface IActiveProps {
    Active: boolean
}

export interface ISearchProps {
    search: string
    setSearch: Dispatch<SetStateAction<string>>
}

export interface IPokeList {
    search: string;
    setIsOpen?: (isOpen: boolean) => void;
}

export interface IPokeListNameId {
    id: number
    name: string
}