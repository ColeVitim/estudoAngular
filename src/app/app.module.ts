import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //-------|
import { ReactiveFormsModule } from '@angular/forms';//|-- adicionei esses 2 imports para reslver um erro (Can't bind to 'ngModel' since it isn't a known property of 'input') que ocorria com o filtro de cursos

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { cursoComponent } from './curso/curso.component';
import { AprovacaoComponent } from './aprocavao/aprovacao.component';
import { ReplacePipe } from './pipe/replace.pipe';

/* quand crio modulos(componentes) tenho que declara eles no declarations */ 
@NgModule({
  declarations: [
    AppComponent,
    cursoComponent,
    AprovacaoComponent,
    ReplacePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
