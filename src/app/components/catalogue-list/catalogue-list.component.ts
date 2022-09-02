import { Component, Input, OnInit } from '@angular/core';
import {PokemonCatalogueService} from '../../services/pokemon-catalogue.service'
//import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-catalogue-list',
  templateUrl: './catalogue-list.component.html',
  styleUrls: ['./catalogue-list.component.css']
})
export class CatalogueListComponent implements OnInit {

 // @Input() pokemons: Pokemon[] = [];

  totalPokemons: number;
  pokemons:any[] = [];
  page = 1;

  constructor(
    private pokemonService: PokemonCatalogueService
  ) { }

  ngOnInit(): void {
    this.getPokemon();

  }
  

  getPokemon(){
        //10 pokemon per page, page+0 means theres 10 pokmeon per page, so if we're on
    //page  2 we + with 0 to get 20 pokemon
    this.pokemonService.getPokemons(10,this.page+0)
    .subscribe((response:any) => {
      this.totalPokemons = response.count;
       
      response.results.forEach(result =>{
        this.pokemonService.getMoreData(result.name)
        .subscribe((uniqResponse: any) =>{
          this.pokemons.push(uniqResponse)
          console.log(this.pokemons);
          
        })
      })
      
    })
  }

}
