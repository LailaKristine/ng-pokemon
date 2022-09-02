import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CaughtPokemonService } from 'src/app/services/caught-pokemon.service';

@Component({
  selector: 'app-catch-pokemon-list',
  templateUrl: './catch-pokemon-list.component.html',
  styleUrls: ['./catch-pokemon-list.component.scss']
}) 
export class CatchPokemonListComponent implements OnInit {

  @Input() pokemonId: string ="";

  constructor(
    private readonly caughtPokemonService:CaughtPokemonService
  ) { }

  ngOnInit(): void {
  }

  onCatchClick(): void{
    // Add to caught list
    window.alert("Clicked to catch: "+this.pokemonId)
    this.caughtPokemonService.addToFavorites(this.pokemonId)
    .subscribe({
      next: (response:any) =>{
        console.log("NEXT", response);
        
      },
      error: (error: HttpErrorResponse) =>{
        console.log("ERROR", error.message);
        
      }
    })

    
  }

}
