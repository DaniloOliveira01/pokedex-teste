import { MenuMobile } from "@/components/MenuMobile";
import { ReactNode, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Menu } from "@/components/Menu";

import * as S from "./styles";

import { ILayoutProps } from "@/@types/type-pages";

const Layout = ({children}: ILayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Container>
      <MenuMobile 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Menu />
      <S.IconHamburguer>
        <IoMenu 
          size={43} 
          onClick={() => setIsOpen(true)}
        />
      </S.IconHamburguer>
      <S.Content>
        {children}
      </S.Content>
    </S.Container>
  );
};

export default Layout;