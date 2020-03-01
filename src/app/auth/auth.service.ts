import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Token} from './token';
import {tap} from 'rxjs/operators';

const API_URL = 'http://localhost:8080/token';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  requestToken(): Observable<Token> {
    return this.http.get<Token>(API_URL).pipe(tap(x => window.sessionStorage.setItem('token', JSON.stringify(x))));
  }
  refreshToken(token: Token): Observable<Token> {
    return this.http.post<Token>(API_URL, token.refreshToken.id).pipe(tap(x => window.sessionStorage.setItem('token', JSON.stringify(x))));
  }

  testToken(token: Token) {
    return this.http.post(API_URL + '/test', null);
  }

  logout() {
    window.sessionStorage.removeItem('token');
    console.log('logout...');
  }

  getAccessToken() {
    const token = JSON.parse(window.sessionStorage.getItem('token'));
    return token.id;
  }

  refreshAccessToken() {
    let token: Token;

    token = JSON.parse(window.sessionStorage.getItem('token'));
    console.log('refreshAccessToken:' + token.refreshToken.id);
    return this.refreshToken(token);
  }
}
