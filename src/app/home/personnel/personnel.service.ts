import {HttpClient} from '@angular/common/http';
import {PersonnelEntity} from './personnel.entity';
import {Injectable} from '@angular/core';
import {of} from 'rxjs';

@Injectable()
export class PersonnelService {
  constructor(private http: HttpClient) {

  }

  loadPersonnel(): Promise<PersonnelEntity[]> {

    const promise = new Promise<PersonnelEntity[]>((resolve, reject) => {
      this.http.get<PersonnelEntity[]>('./assets/personnel.json')
        .toPromise()
        .then(
          res => { // Success
            resolve(res['personnel']);
          }
        );
    });
    return promise;
  }
}
