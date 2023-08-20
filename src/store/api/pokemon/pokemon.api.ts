import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "../baseQuery";
import { IGetPokemonRequest, IGetPokemonResponse } from "./pokemon.interface";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getPokemon: builder.query<IGetPokemonResponse, IGetPokemonRequest>({
      query: (pokemon) => ({
        method: "GET",
        url: `pokemon/${pokemon}`,
      }),
    }),
  }),
});

export const { useLazyGetPokemonQuery } = pokemonApi;
