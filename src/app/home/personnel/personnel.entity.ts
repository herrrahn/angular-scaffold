import {PersonnelType} from './personnel.type';

export interface PersonnelEntity {
  pers_id: number;
  full_name: string;
  email: string;
  birthday: Date;
  pers_type: PersonnelType;
}
