import { ReactNode } from "react";

import Menu from "../../components/Menu";
import * as S from "./styles";

type LayoutProps = {
  children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <S.Container>
      <Menu />
      <S.Content>
        {children}
      </S.Content>
    </S.Container>
  );
};

export default Layout;