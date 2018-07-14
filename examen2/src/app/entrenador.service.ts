import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Entrenador } from './entrenador';

@Injectable({
  providedIn: 'root'
})
export class EntrenadorService {

private entrenadorUrl = 'http://localhost:1337/entrenadores';

  constructor(private http: HttpClient) {

  }

  getEntrenadores (): Observable<Entrenador[]> {
    return this.http.get<Entrenador[]>(this.entrenadorUrl)
    .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
