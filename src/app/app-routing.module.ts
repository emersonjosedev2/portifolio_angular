import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeProjetosComponent } from './components/projetos/home-projetos/home-projetos.component';
import { LoginComponent } from './components/projetos/login/login.component';
import path from 'path';
import { GridComponent } from './components/projetos/grid/grid.component';

const routes: Routes = [
  /* { path: '**', redirectTo: '' }, */
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
 
  { path: 'home-projetos', component: HomeProjetosComponent },
  { path: 'login', component: LoginComponent },
  
  { path: 'grid', component: GridComponent,},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
