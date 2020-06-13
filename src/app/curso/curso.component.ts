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
        this.ObterTodosCursos();
    }

    ObterTodosCursos(): void{
        this.cursoServico.obterTOdosCursos().subscribe({
            next: cursos => {
                this._cursos = cursos;
                this.cursosFiltrados = this._cursos;
            },
            error: err => console.log('Error', err)
        })
    }

    deletarCurso(id: number): void {

        this.cursoServico.deletarCurso(id).subscribe({
            next: () => {
                console.log('deletado');
                this.ObterTodosCursos();
            },
            error: err => console.log('erro' , err)
        })
    }

    set filtro(valor: string){
        this._filtradoPor = valor;

        this.cursosFiltrados = this._cursos.filter((curso: curso) => curso.nome.toLocaleLowerCase().indexOf(this._filtradoPor.toLocaleLowerCase()) > -1)
    }

    get filtro(){
        return this._filtradoPor
    }


}