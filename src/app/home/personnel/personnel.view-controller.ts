import {PersonnelService} from './personnel.service';
import {PersonnelViewModel} from './personnel.view-model';
import {PersonnelEntity} from './personnel.entity';
import {Injectable} from '@angular/core';

@Injectable()
export class PersonnelViewController {
  constructor(private personnelService: PersonnelService) {
  }

  async loadPersonnel(): Promise<PersonnelViewModel[]> {
     return (await this.personnelService.loadPersonnel()).map(p => this.toViewModel(p));
  }

  toViewModel(p: PersonnelEntity): PersonnelViewModel {
    const personnel: PersonnelViewModel = new PersonnelViewModel();
    personnel.name = p.full_name;
    personnel.email = p.email;
    personnel.id = p.pers_id;
    personnel.type = p.pers_type;
    personnel.birthday = p.birthday;
    personnel.yearsOld = 36;
    return personnel;
  }

}
