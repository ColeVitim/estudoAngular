import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { cursoComponent } from './curso/curso.component';
import { AprovacaoComponent } from './aprocavao/aprovacao.component';
/* quand crio modulos(componentes) tenho que declara eles no declarations */ 
@NgModule({
  declarations: [
    AppComponent,
    cursoComponent,
    AprovacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
