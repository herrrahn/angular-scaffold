import {PersonnelType} from './personnel.type';

export class PersonnelViewModel {
  id: number;
  name: string;
  email: string;
  birthday: Date;
  yearsOld: number;
  type: PersonnelType;
}
