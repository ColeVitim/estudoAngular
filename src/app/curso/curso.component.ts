import { Component, OnInit } from '@angular/core';
import { curso } from './curso';

@Component({
    selector: 'app-curso',
    templateUrl: './curso.component.html'
})

export class cursoComponent implements OnInit{

cursos: curso[];

ngOnInit(): void{
this.cursos =[
    {
        id: 1,
        nome: 'curso estudo angular iniciante',
        imageUrl: '/assets/images/animations.png',
        preco: 89.90,
        codigo: 'ewrwerwe-01',
        aprovacao: 1.3,
        duracao: 120,
        lancamento: 'janeiro, 3, 2019'
    },
    {
        id: 2,
        nome: 'curso estudo angular intermediario',
        imageUrl: '/assets/images/router.png',
        preco: 189.90,
        codigo: 'teste123-033',
        aprovacao: 3.8,
        duracao: 180,
        lancamento: 'abril, 7, 2019'
    },
    {
        id: 3,
        nome: 'curso estudo angular avançado',
        imageUrl: '/assets/images/http.png',
        preco: 389.90,
        codigo: 'terrrr123-01',
        aprovacao: 5.0,
        duracao: 300,
        lancamento: 'dezembro, 25, 2019'
    }
    
 ]





} 

    
}