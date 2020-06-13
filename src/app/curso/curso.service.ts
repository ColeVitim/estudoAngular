import { curso } from './curso';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class CursoService {


    obterTOdosCursos(): curso[] {
        return CURSOS;
    }

    obterPorId(id: number): curso{
        return CURSOS.find((curso: curso) => curso.id == id);
    }

    salvarCurso(curso: curso): void{
        if(curso.id){
            const index = CURSOS.findIndex((cur: curso) => cur.id == curso.id);
            CURSOS[index] = curso;
        }
    }

}


var CURSOS: curso[] = [
    {
        id: 1,
        nome: 'Angular: CLI',
        lancamento: 'Janeiro 2, 2019',
        descricao: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duracao: 120,
        codigo: 'XLF-1212',
        aprovacao: 3,
        preco: 13.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 2,
        nome: 'Angular: Forms',
        lancamento: 'Abril 4, 2019',
        descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        duracao: 80,
        codigo: 'DWQ-3412',
        aprovacao: 3.5,
        preco: 27.99,
        imageUrl: '/assets/images/forms.png',
    },
    {
        id: 3,
        nome: 'Angular: HTTP',
        lancamento: 'Julho 8, 2019',
        descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
        duracao: 80,
        codigo: 'QPL-0913',
        aprovacao: 4.0,
        preco: 39.99,
        imageUrl: '/assets/images/http.png',
    },
    {
        id: 4,
        nome: 'Angular: Router',
        lancamento: 'Outubro 16, 2019',
        descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        duracao: 60,
        codigo: 'OHP-1095',
        aprovacao: 4.5,
        preco: 56.99,
        imageUrl: '/assets/images/router.png',
    },
    {
        id: 5,
        nome: 'Angular: Animations',
        lancamento: 'Dezembro 25, 2019',
        descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
        duracao: 80,
        codigo: 'PWY-9381',
        aprovacao: 5,
        preco: 66.99,
        imageUrl: '/assets/images/animations.png',
    }
];