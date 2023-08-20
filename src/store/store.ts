import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "@api/pokemon/pokemon.api";

const rtkReducers = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export const store = configureStore({
  reducer: rtkReducers,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware().concat([pokemonApi.middleware]),
  ],
});
