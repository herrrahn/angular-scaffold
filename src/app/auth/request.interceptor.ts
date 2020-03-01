import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {AuthService} from './auth.service';
import {catchError, filter, switchMap, take} from 'rxjs/operators';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(public authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.method.toUpperCase() === 'GET') {
      console.log('Skipped...');
      return next.handle(request);
    }
    if (this.authService.getAccessToken()) {
      request = this.addToken(request, this.authService.getAccessToken(), 'c');
    }

    return next.handle(request).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        console.log('R: ' + this.isRefreshing);
        return this.handle401Error(request, next);
      } else {
        console.log('Error: ' + error);
        return throwError(error);
      }
    }));
  }

  private addToken(request: HttpRequest<any>, token: string, where: string) {
    console.log(where + ' - adding token:', token);
    return request.clone({
      setHeaders: {
        'token': `${token}`
      }
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshAccessToken().pipe(
        switchMap((token: any) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token.refreshToken.id);
          return next.handle(this.addToken(request, token.id, 'a'));
        }));

    } else {
      console.log('handle401Error ELSE');
      this.isRefreshing = false;
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(request, jwt, 'b'));
        }),
        catchError(err => {
          this.isRefreshing = false;
          console.log('set refreshing to false');
          return throwError(err);
        }));
    }
  }

}
