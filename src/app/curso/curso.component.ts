import { Component, OnInit } from '@angular/core';
import { curso } from './curso';
import { CursoService } from './curso.service';


@Component({
    selector: 'app-curso',
    templateUrl: './curso.component.html'
})

export class cursoComponent implements OnInit {

    cursosFiltrados: curso[] = [];
    
    //underline antes das variaveis é um convenção pra dizer que ela não vai ser modificada
    _cursos: curso[];
    _filtradoPor: string;

    //construtor e a injeção de dependencia do curso
    constructor(private cursoServico: CursoService) {

    }

    ngOnInit(): void {
        this._cursos = this.cursoServico.obterTOdosCursos();
        this.cursosFiltrados = this._cursos
    }

    set filtro(valor: string){
        this._filtradoPor = valor;

        this.cursosFiltrados = this._cursos.filter((curso: curso) => curso.nome.toLocaleLowerCase().indexOf(this._filtradoPor.toLocaleLowerCase()) > -1)
    }

    get filtro(){
        return this._filtradoPor
    }


}