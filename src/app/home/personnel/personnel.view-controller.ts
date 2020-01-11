import {PersonnelService} from './personnel.service';
import {PersonnelViewModel} from './personnel.view-model';
import {PersonnelEntity} from './personnel.entity';
import {Injectable} from '@angular/core';
import {PersonnelBuilder} from './personnel.builder';

@Injectable()
export class PersonnelViewController {

  constructor(private personnelService: PersonnelService,
              private personnelBuilder: PersonnelBuilder) {
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
    personnel.yearsOld = Math.floor(Math.random() * 10) + 25;
    return personnel;
  }

  async addPersonnel(p: PersonnelEntity): Promise<PersonnelViewModel> {
    return this.toViewModel(await this.personnelService.addPersonnel(p));
  }

  async delete(id: number): Promise<boolean> {
    return await this.personnelService.delete(id);
  }


  buildPersonnel(): PersonnelEntity {
    return this.personnelBuilder.build();
  }
}
