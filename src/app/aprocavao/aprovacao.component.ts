import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'app-aprovacao',
    templateUrl: './aprovacao.component.html',
    styleUrls: ['./aprovacao.component.css']
})


export class AprovacaoComponent implements OnChanges{


    @Input()//serve para outro componente ter acesso a variaveis
    rating: number = 0;

    ratingwidth: number;//vai servir para ajustar o tamanho da div das estrelas 
ngOnChanges(): void{
 this.ratingwidth = this.rating * 74 / 5;//calculo usado pra trabalhar o width do rating vai ser utilizado com o font-awesome
}

}