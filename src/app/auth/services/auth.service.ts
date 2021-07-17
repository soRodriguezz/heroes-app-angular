import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Auth } from '../pages/interfaces/auth.interfaces';
import { tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth(){
    return { ...this._auth! }
  }

  constructor( private http: HttpClient) { } 

  verificaAuthenticacion(): Observable<boolean> {
    if( !localStorage.getItem('token') ){
      return of(false);
    }
    return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1`)
      .pipe(
        map( auth => {
          this._auth = auth;
          return true;
        })
      );
  }

  login(){
    return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1`)
      .pipe(
        tap( auth => this._auth = auth ),
        tap( auth => localStorage.setItem('token', auth.id ))
      );
  }

}
