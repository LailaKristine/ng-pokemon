import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './pages/profile/profile.page';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { CatalogueListComponent } from './components/catalogue-list/catalogue-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CatchPokemonListComponent } from './components/catch-pokemon-list/catch-pokemon-list.component';


// Decorator
@NgModule({
  declarations: [// Components
    AppComponent,
    LoginPage,
    ProfilePage,
    CataloguePage,
    LoginFormComponent,
    ProfileFormComponent,
    CatalogueListComponent,
    NavbarComponent,
    CatchPokemonListComponent,
  ],
  imports: [// Modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
