import {HttpClient} from '@angular/common/http';
import {PersonnelEntity} from './personnel.entity';
import {Injectable} from '@angular/core';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:8080/personnel';

@Injectable()
export class PersonnelService {
  constructor(private http: HttpClient) {

  }

  loadPersonnel(): Promise<PersonnelEntity[]> {

    return this.http.get<PersonnelEntity[]>('./assets/personnel.json')
      .pipe(
        tap( () => {}, error => console.log('e:', error))
      )
      .toPromise();

  }

  addPersonnel(p: PersonnelEntity): Promise<PersonnelEntity> {
    return this.http.post<PersonnelEntity>(API_URL, p).toPromise();
  }

  addPersonnelO(p: PersonnelEntity): Observable<PersonnelEntity> {
    return this.http.post<PersonnelEntity>(API_URL, p).pipe(
      map( data => data),
    );
  }

  delete(id: number): Promise<boolean> {
    return this.http.delete<boolean>(`${API_URL}/${id}`).toPromise();
  }
}
