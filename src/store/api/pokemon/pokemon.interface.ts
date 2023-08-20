import { IResponseBaseQuery } from "../baseQuery.interface";

export interface IGetPokemonResponse extends IResponseBaseQuery {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: any[]; // Don't do this
  forms: any[]; // Don't do this
  game_indicies: any[]; // Don't do this
  held_items: any[]; // Don't do this
  sprites: any; // Don't do this
}

export type IGetPokemonRequest = string;
