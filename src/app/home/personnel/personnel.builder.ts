import {PersonnelEntity} from './personnel.entity';
import {PersonnelType} from './personnel.type';
import {Injectable} from '@angular/core';

@Injectable()
export class PersonnelBuilder {
  public build(): PersonnelEntity {
    const p: PersonnelEntity = new PersonnelEntity();
    this.fillFields(p);
    return p;
  }

  private fillFields(p: PersonnelEntity) {
    const {firstName, lastName} = this.findNames();

    p.full_name = `${firstName} ${lastName}`;
    p.birthday = new Date();
    p.pers_id = Math.random() * 1000;
    p.pers_type = (Math.round(p.pers_id) % 2 >= 1) ? PersonnelType.EMPLOYER : PersonnelType.CUSTOMER;
    p.email = `${firstName.toLowerCase()}@${lastName.toLowerCase()}.de`;
  }

  private findNames() {
    const firstName = this.findFirstName();
    const lastName = this.findLastName();
    return {firstName, lastName};
  }

  private findFirstName(): string {
    const names = ['Rafael', 'Ronaldo', 'Ben', 'Paul', 'Anna', 'Mia', 'Sofia', 'Carlo', 'Luis', 'Boris'];
    return this.sortName(names);
  }

  private findLastName(): string {
    const names = ['Rahn', 'Klemz', 'Becker', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Gates'];
    return this.sortName(names);
  }

  private sortName(names: string[]): string {
      return names[Math.floor(Math.random() * 10)];
  }
}
