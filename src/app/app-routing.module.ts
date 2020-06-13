import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { cursoComponent } from './curso/curso.component';
import { Error404Component } from './error-page404/error-page404.component';
import { CursoInfoComponent } from './curso/curso-info.component';

//aqui é colocado os path das rotas
const routes: Routes = [
  {
    path:'',redirectTo: 'cursos', pathMatch: 'full'//rota padrao do angular, no caso redirecina para cursos
  },  
  {
    path: 'cursos', component: cursoComponent
  },
  {
    path: 'curso/info/:id',component : CursoInfoComponent
  },
  {
    path: '**', component: Error404Component//roda padrão do angular que redireciona caso não exista o path
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
