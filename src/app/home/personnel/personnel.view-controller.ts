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
    personnel.yearsOld = Math.floor(Math.random() * 10) + 25;
    return personnel;
  }

  async addPersonnel(p: PersonnelEntity): Promise<PersonnelViewModel> {
    return this.toViewModel(await this.personnelService.addPersonnel(p));
  }

  async delete(id: number) {
    return await this.personnelService.delete(id);
  }


  findFirstName(): string {
    const names = ['Rafael', 'Ronaldo', 'Ben', 'Paul', 'Anna', 'Mia', 'Sofia', 'Carlo', 'Luis'];
    return this.sortName(names);
  }

  findLastName(): string {
    const names = ['Rahn', 'Klemz', 'Becker', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner'];
    return this.sortName(names);
  }

  private sortName(names: string[]) {
    return names[Math.floor(Math.random() * 10)];
  }
}
