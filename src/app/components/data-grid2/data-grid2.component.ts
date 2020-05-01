import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-grid2',
  templateUrl: './data-grid2.component.html',
  styleUrls: ['./data-grid2.component.scss']
})
export class DataGrid2Component implements OnInit {
  dataSource = [
    {Name: 'Some file name that is very long', Date: '08/30/2017', Uploader: 'Some uploader name that is very long'},
    {Name: 'Some file name that is very long', Date: '08/30/2017', Uploader: 'Some uploader name that is very long'}
  ];

  displayedColumns = ['Name', 'Date', 'Uploader'];

  constructor() {
  }

  ngOnInit() {
  }

}
