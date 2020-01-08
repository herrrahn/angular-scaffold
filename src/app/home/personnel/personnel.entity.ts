import {PersonnelType} from './personnel.type';

export class PersonnelEntity {
  pers_id: number;
  full_name: string;
  email: string;
  birthday: Date;
  pers_type: PersonnelType;
}
