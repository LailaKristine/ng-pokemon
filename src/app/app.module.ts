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
import { CatalogueFormComponent } from './components/catalogue-form/catalogue-form.component';

// Decorator
@NgModule({
  declarations: [// Components
    AppComponent,
    LoginPage,
    ProfilePage,
    CataloguePage,
    LoginFormComponent,
    ProfileFormComponent,
    CatalogueFormComponent,
  ],
  imports: [// Modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
