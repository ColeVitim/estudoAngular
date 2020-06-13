import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //-------|
import { ReactiveFormsModule } from '@angular/forms';//|-- adicionei esses 2 imports para reslver um erro (Can't bind to 'ngModel' since it isn't a known property of 'input') que ocorria com o filtro de cursos

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { cursoComponent } from './curso/curso.component';
import { AprovacaoComponent } from './aprocavao/aprovacao.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error-page404/error-page404.component';
import { CursoInfoComponent } from './curso/curso-info.component';

/* quand crio modulos(componentes) tenho que declara eles no declarations */ 
@NgModule({
  declarations: [
    AppComponent,
    cursoComponent,
    AprovacaoComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CursoInfoComponent
  ],
  imports: [//tud que é modul eu declaro aqui no imports (no caso das rotas a declaração do mdulo de rotas da no arquivo app.routing.module)
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
