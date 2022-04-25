import Head from 'next/head'
import Image from 'next/image';

import * as S from './styles'

import { useAuth } from "@/contexts/auth";

export const DashboardTemplate = () => {
  const { email } = useAuth();

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
            alt="pokemon-logo"
            width={450} 
            height={200}
          />
          <h1>Seja <span>Bem-vindo</span></h1>
          <h2>{email}</h2>
          <Image 
            src="/image/charizard.png"
            alt="charizard" 
            width={250} 
            height={250}
          />
        </S.Content>
      </S.Container>
  </>
  );
}