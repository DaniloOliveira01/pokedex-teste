import { GetStaticPaths, 
  GetStaticProps, 
  NextPage 
} from "next";
import { useRouter } from "next/router";
import { ReactElement } from "react";

import client from "@/services/api";
import { GET_POKEMON_BY_NAME } from "@/querys/pokemon";
import { IPokemonProps } from '@/@types/pokemon'
import Layout from "@/templates/Layout";
import { PokeDetailsTemplates } from "@/templates/poke-details";
import { Fallback } from "@/templates/fallback";
import { IPokemonPage, IPokeNameParams } from "@/@types/type-pages";

const Pokemon: NextPage<IPokemonProps> & IPokemonPage = (pokemon) => {
  const router = useRouter()

  if(router.isFallback) {
    return <Fallback />
  }

  return <PokeDetailsTemplates { ...pokemon }/>
};

Pokemon.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { pokeName } = context.params as unknown as IPokeNameParams
  const response = await client
  .query({
    query: GET_POKEMON_BY_NAME,
    variables: {
      name: pokeName
    }
  })
  return {
    props: {
      ...response.data.pokemon,
      front_default: response.data.pokemon.sprites.front_default,
    }
  }
}

export default Pokemon;