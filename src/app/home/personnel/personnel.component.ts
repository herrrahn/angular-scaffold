import {Component, OnInit} from '@angular/core';
import {PersonnelViewController} from './personnel.view-controller';
import {PersonnelViewModel} from './personnel.view-model';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {
  personnelList: PersonnelViewModel[];

  constructor(private personnelViewController: PersonnelViewController) {
  }

  ngOnInit() {
    this.load();
  }

  async load() {
    this.personnelList = await this.personnelViewController.loadPersonnel();
  }

  async addPersonnel() {
    this.personnelList.push(await this.personnelViewController.addPersonnel(this.personnelViewController.buildPersonnel()));
  }

  async delete(id: number) {
    await this.personnelViewController.delete(id);
    this.load();
  }
}
