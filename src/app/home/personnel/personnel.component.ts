import { Component, OnInit } from '@angular/core';
import {PersonnelViewController} from './personnel.view-controller';
import {PersonnelViewModel} from './personnel.view-model';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {
  private personnelList: PersonnelViewModel[];

  constructor(private personnelViewController: PersonnelViewController) { }

  ngOnInit() {
    this.load();
  }

  private async load() {
    this.personnelList = await this.personnelViewController.loadPersonnel();
    console.log(this.personnelList);
  }
}
