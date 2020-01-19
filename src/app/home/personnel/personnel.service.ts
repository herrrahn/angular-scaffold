import {HttpClient} from '@angular/common/http';
import {PersonnelEntity} from './personnel.entity';
import {Injectable} from '@angular/core';
import {catchError, tap} from 'rxjs/operators';

const API_URL = 'http://localhost:8080/personnel';

@Injectable()
export class PersonnelService {
  constructor(private http: HttpClient) {

  }

  loadPersonnel(): Promise<PersonnelEntity[]> {

    return this.http.get<PersonnelEntity[]>(API_URL)
      .pipe(
        tap( () => {}, error => console.log('e:', error))
      )
      .toPromise();

  }

  addPersonnel(p: PersonnelEntity): Promise<PersonnelEntity> {
    return this.http.post<PersonnelEntity>(API_URL, p).toPromise();
  }

  delete(id: number): Promise<boolean> {
    return this.http.delete<boolean>(`${API_URL}/${id}`).toPromise();
  }
}
