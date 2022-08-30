import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { LandingPage } from './pages/landing/landing.page';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: "/login"
    // component: LandingPage,
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'register',
    component: RegisterPage,
  },
  {
    path: 'catalogue',
    component: CataloguePage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
