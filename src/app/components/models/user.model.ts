import { Pokemon } from "./pokemon.model";

//All information needed for User
export interface User{
    id: number,
    username: "",
    pokemon: Pokemon[];

}