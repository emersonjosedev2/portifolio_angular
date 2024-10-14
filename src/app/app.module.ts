import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  HttpClient,
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { TesteComponent } from './components/teste/teste.component';

import { HomeProjetosComponent } from './components/projetos/home-projetos/home-projetos.component';
import { LoginComponent } from './components/projetos/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { GridComponent } from './components/projetos/grid/grid.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    TesteComponent,

    HomeProjetosComponent,
      LoginComponent,
      GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatTooltipModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
