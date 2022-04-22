import { gql } from '@apollo/client'

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        name
      }
    }
  }
`;
export const gqlVariables = {
  limit: 150,
  offset: 0,
};

export const GET_POKEMON_BY_NAME = gql`
query getPokemonByName($name: String!){
  pokemon(name: $name){
    name
    id
    sprites {
      front_default
      back_default
    }
    height
    weight
    types{
      type{
        name
      }
    }
    stats{
      base_stat
      stat{
        name
      }
    }
  }
}
`