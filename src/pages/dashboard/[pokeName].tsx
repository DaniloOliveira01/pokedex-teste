/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import client from "@/utils/api";
import { GET_POKEMON_BY_NAME } from "@/querys/pokemons";
import Layout from "@/templates/Layout";
import { ReactElement } from "react";

import {PokemonProps} from '@/types/pokemon'
import { PokeDetailsTemplates } from "@/templates/poke-details";
import { useRouter } from "next/router";

type PokemonPage = {
  getLayout: (page: ReactElement) => JSX.Element
}

const Pokemon: NextPage<PokemonProps> & PokemonPage = (pokemon) => {
  const router = useRouter()

  if(router.isFallback) {
    return <p>Loading...</p>
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

type PokeNameParams = {
  pokeName: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { pokeName } = context.params as PokeNameParams
  const response = await client
  .query({
    query: GET_POKEMON_BY_NAME,
    variables: {
      name: pokeName
    }
  })
  return {
    props: {
      name: response.data.pokemon.name,
      id: response.data.pokemon.id,
      front_default: response.data.pokemon.sprites.front_default,
      height: response.data.pokemon.height,
      weight: response.data.pokemon.weight,
      types: response.data.pokemon.types,
      stats: response.data.pokemon.stats
    }
  }
}

export default Pokemon;