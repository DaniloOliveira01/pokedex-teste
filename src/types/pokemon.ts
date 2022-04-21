export type PokemonProps= {
  name: string
  id: number
  front_default: string
  height: number
  weight: number

  types: {
    type: {
      name:  'fire' | 'water' | 'grass' | 'flying' | 'fighting' | 'poison' | 'ground' | 'rock' | 'psychic' | 'ice' | 'bug' | 'ghost' | 'steel' | 'dragon' | 'dark' | 'fairy' | 'electric'
    } 
  }[]

  stats:{
    base_stat: number
    stat: {
      name: 'special-attack' | 'speed' | 'special-defense' | 'defense' | 'attack' | 'hp'
    } 
  }[]
}
