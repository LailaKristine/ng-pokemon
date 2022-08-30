import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { LoginPage } from './pages/login/login.page';
import { ProfilePage } from './pages/profile/profile.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: "/login"
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'profile',
    component: ProfilePage,
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
