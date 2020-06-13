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
        //no oninit
        this.curso = this.servico.obterPorId(+this.activateRoute.snapshot.paramMap.get('id'));// o + na frente converte para number
    }

    Salvar(): void{
        this.servico.salvarCurso(this.curso);
    }

}