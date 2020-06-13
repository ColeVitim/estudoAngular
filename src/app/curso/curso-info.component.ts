import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { curso } from './curso';
import { CursoService } from './curso.service';

@Component({
    templateUrl: './curso-info.component.html'
})
export class CursoInfoComponent implements OnInit {

    curso: curso;

    //implementei o activaterouter pra poder pegar o paramentro que o component curso mandar no link no caso é o id do curso
    constructor(private activateRoute: ActivatedRoute,private servico: CursoService) {

    }

    ngOnInit(): void {        
       this.servico.obterPorId(+this.activateRoute.snapshot.paramMap.get('id')).subscribe({ // o + na frente converte para number
            next: curso => this.curso = curso,
            error: err => console.log('erro ', err)
       });
    }

    Salvar(): void{
      this.servico.salvarCurso(this.curso).subscribe({
          next: curso => console.log('salvo'),
          error: err => console.log('erro',err)
      });
    }

}