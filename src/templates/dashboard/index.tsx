import Head from 'next/head'
import Image from 'next/image';

import * as S from './styles'

import { SwitchTheme } from "@/components/Switch";
import { useAuth } from "@/contexts/auth";
import { useAppTheme } from "@/contexts/theme";

export const DashboardTemplate = () => {
  const { email } = useAuth();
  const { themeState, toogleTheme } = useAppTheme();

  return (
    <>
    <Head>
      <title>
        Dashboard
      </title>
    </Head>

    <S.Container>
      <S.Content>
        <Image 
          src="/image/pokemon-logo.png" 
          alt='pokemon-logo'
          width={450} 
          height={200}
        />
        <h1>Seja <span>Bem-vindo</span></h1>
        <h2>{email}</h2>
        <Image 
          src="/image/charizard.png"
          alt='charizard' 
          width={250} 
          height={250}
        />
      </S.Content>
      <SwitchTheme
        themeState={themeState}
        onToggleTheme={toogleTheme}
      />
    </S.Container>
  </>
  );
}