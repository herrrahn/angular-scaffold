import {Component, OnInit} from '@angular/core';
import {PersonnelViewController} from './personnel.view-controller';
import {PersonnelViewModel} from './personnel.view-model';
import {PersonnelEntity} from './personnel.entity';
import {PersonnelType} from './personnel.type';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {
  private personnelList: PersonnelViewModel[];

  constructor(private personnelViewController: PersonnelViewController) {
  }

  ngOnInit() {
    this.load();
  }

  async load() {
    this.personnelList = await this.personnelViewController.loadPersonnel();
    console.log(this.personnelList);
  }

  async addPersonnel() {
    this.personnelList.push(await this.personnelViewController.addPersonnel(this.buildPersonnel()));
  }

  private buildPersonnel() {
    const p: PersonnelEntity = new PersonnelEntity();
    const firstName = this.personnelViewController.findFirstName();
    const lastName = this.personnelViewController.findLastName();

    p.full_name = `${firstName} ${lastName}`;
    p.birthday = new Date();
    p.pers_type = PersonnelType.CUSTOMER;
    p.pers_id = Math.random() * 1000;
    p.email = `${firstName.toLowerCase()}@${lastName.toLowerCase()}.de`;
    return p;
  }

  async delete(id: number) {
    if (await this.personnelViewController.delete(id)) {
      this.load();
    }
  }
}
