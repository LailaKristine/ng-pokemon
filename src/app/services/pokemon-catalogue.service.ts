import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../components/models/pokemon.model';

const { apiPokemon } = environment;

@Injectable({
  providedIn: 'root'
})
export class PokemonCatalogueService {

  // Store Value
  private _pokemons: Pokemon[] = [];
  private _error: string = "";
  private _loading: boolean = false;

  get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  get error(): string {
    return this._error;
  }

  get loading(): boolean {
    return this._loading;
  }

  constructor(private readonly http: HttpClient) { }

  public findAllPokemon(): void {

    this._loading = true;

    this.http.get<Pokemon[]>(apiPokemon)
      .pipe(
        finalize(() => {
          this._loading = false;
        })
      )
      .subscribe({
        next: (pokemons: Pokemon[]) => {
          this._pokemons = pokemons;
        },
        error: (error: HttpErrorResponse) => {
          this._error = error.message;
        }
      })
  }

public pokmeonById(id: string):Pokemon | undefined{
  return this._pokemons.find((pokemon: Pokemon) => pokemon.id === id);
}

  getPokemons(Limit? : number, offset? : number){
    return this.http.get(apiPokemon+`?Limit=${Limit}&offset=${offset}`)
  }

  getMoreData(name:string){
    return this.http.get(apiPokemon+`/${name}`); 
  }
}