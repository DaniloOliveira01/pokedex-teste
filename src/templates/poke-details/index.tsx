import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import {SwitchTheme} from "@/components/Switch";
import * as S from "./styles";

import { typesColors } from "@/utils/types-and-colors";
import { atributes } from '@/utils/atribute-and-colors';
import {PokemonProps} from '@/types/pokemon';

import { 
  getFormattedCentimeter, 
  getFormattedCentimeterBR, 
  getFormattedWeight, 
  getFormattedKilogramBR 
} from "@/utils/getInfPokemon";
import { useAppTheme } from "@/contexts/theme";

export const PokeDetailsTemplates = ({
  name, 
  id, 
  front_default, 
  types, 
  height, 
  weight,
  stats,
}: PokemonProps) => { 
  const headerText = `#${String(id).padStart(3,'0')} - ${name} ${" "}`
  const {themeState, toogleTheme} = useAppTheme();

  return (
    <>
      <Head>
        <title>
          PokemonDetails - {name}
        </title>
      </Head>

      <S.Header>
        <S.NamePokeDiv>
          <S.NamePoke>
            {headerText} 
          </S.NamePoke>
          <Image 
            src={front_default} 
            alt={name} 
            width={120} 
            height={120}
          />
        </S.NamePokeDiv>
          <SwitchTheme 
            themeState={themeState}
            onToggleTheme={toogleTheme}
          />
      </S.Header>
    
      <S.Container>
        <S.ImagePoke>
          <S.PokeImg 
          src={front_default} 
          />
        </S.ImagePoke>
    
        <S.TypePoke>
          <p>Type:</p>

          {types?.map(({type}) => {
            return (
              <S.TypeText 
                color={typesColors[type.name]?.color}
                key={type.name}
              >
                {type.name}
              </S.TypeText> )
          })}
        </S.TypePoke>
    
        <S.DivHeightWeight>
          <S.HW>
            <span>
              Height: {getFormattedCentimeter(Number(height))} / {getFormattedCentimeterBR(Number(height))}
            </span>
          </S.HW>
          <S.HW>
            <span>
              <>
              Weight: {getFormattedWeight(Number(weight))} / {getFormattedKilogramBR(Number(weight))}
              </>
            </span>
          </S.HW>      
        </S.DivHeightWeight>
        
        <S.AtributesDiv>
          {stats?.map((stat) => {
            return ( 
            <S.Atribute 
              color={atributes[stat.stat.name]?.color}
              key={stat.stat.name}
            >
              {stat.base_stat} 
              {atributes[stat.stat.name]?.abreviacao}
            </S.Atribute> )
          })}
        </S.AtributesDiv>
        </S.Container>
    </>
  );
}