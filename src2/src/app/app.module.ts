import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import { ServicosComponent } from './servicos/servicos.component';
import { CarrosselPrincipalComponent } from './carrossel-principal/carrossel-principal.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { NossosServicosComponent } from './nossos-servicos/nossos-servicos.component';
import { CarrosselServicosComponent } from './carrossel-servicos/carrossel-servicos.component';
import { CarrosselDepoimentosComponent } from './carrossel-depoimentos/carrossel-depoimentos.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    HomeComponent,
    ServicosComponent,
    CarrosselPrincipalComponent,
    QuemSomosComponent,
    NossosServicosComponent,
    CarrosselServicosComponent,
    CarrosselDepoimentosComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
