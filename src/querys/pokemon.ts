import { gql } from "@apollo/client";

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