//sempre que quiser alterar exibição ou criar formataços nova usar o pipe
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replace'
})                                  //classe necessarioa pra fazer a transformação
export class ReplacePipe implements PipeTransform {

    transform(valor: string, caracter: string, valorDoReplace: string) {
        return valor.replace(caracter, valorDoReplace);

    }
}

//não esquecer de declara no app.module.ts , na parte de declarations