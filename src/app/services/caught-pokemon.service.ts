import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../components/models/pokemon.model';
import { User } from '../components/models/user.model';
import { PokemonCatalogueService } from './pokemon-catalogue.service';
import { UserService } from './user.service';

const { apiKey, apiUsers } = environment; 

@Injectable({
  providedIn: 'root'
})
export class CaughtPokemonService {

  private _loading: boolean = false;

  get loading(): boolean{
    return this._loading;
  }

  constructor(

    private http: HttpClient,
    private readonly pokemonService: PokemonCatalogueService,
    private readonly userService: UserService

  ) { }

  public addToFavorites(pokemonId:string): Observable<any>{
    if(!this.userService.user){
      throw new Error("addToCaught: There is no user");
    }

    const user: User = this.userService.user;

    const pokmeon: Pokemon | undefined = this.pokemonService.pokmeonById(pokemonId)

    if(!pokmeon){
      throw new Error("AddToPokemon: No pokemon with id "+ pokemonId);
    }

    if(this.userService.caughtPokemon(pokemonId)){
      throw new Error("AddToPokemon: Pokemon caught "+ pokemonId);
    }

    const headers = new HttpHeaders({
      'Content-type': 'application/jason',
      'x-api-key': apiKey
    })

    this._loading = true;

    return this.http.patch(`${apiUsers}/${user.id}`,{
      pokmeon:[...user.pokemon, pokmeon]
    },{
      headers
    })
    .pipe(
      finalize(() =>{
        this._loading = false;
      })
    )
  }
}
