/* eslint-disable jsx-a11y/alt-text */
import { NextPage } from "next";
import { ReactElement } from "react";
import Head from "next/head";
import Image from "next/image";

import Layout from "@/templates/Layout";
import { useAuth } from "@/contexts/auth";

import * as S from './styles'
import { SwitchTheme } from "@/components/Switch";
import { useAppTheme } from "@/contexts/theme";

type DashboardPage = {
  getLayout: (page: ReactElement) => JSX.Element
}

const Dashboard: NextPage & DashboardPage = () => {
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
            width={450} 
            height={200}
          />
          <h1>Seja <span>Bem-vindo</span></h1>
          <h2>{email}</h2>
          <Image 
            src="/image/charizard.png" 
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
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Dashboard;
