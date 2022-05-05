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
