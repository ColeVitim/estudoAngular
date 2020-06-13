import { curso } from './curso';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class CursoService {

    private cursoAPIUrl: string = 'http://localhost:3100/api/curso';

    //injeção de dependecia para consumir API
    constructor(private httpClient: HttpClient){

    }

    obterTOdosCursos(): Observable<curso[]> {
        return this.httpClient.get<curso[]>(this.cursoAPIUrl);
    }

   obterPorId(id: number): Observable<curso>{
        return this.httpClient.get<curso>(`${this.cursoAPIUrl}/${id}`);
    }
 
    salvarCurso(curso: curso): Observable<curso>{
        if(curso.id){
            return this.httpClient.put<curso>(`${this.cursoAPIUrl}/${curso.id}`, curso)
        }else{
            return this.httpClient.post<curso>(`${this.cursoAPIUrl}/${curso.id}`, curso)
        }
    }

    deletarCurso(id: number): Observable<any>{
        return this.httpClient.delete<any>(`${this.cursoAPIUrl}/${id}`);
    }

}
