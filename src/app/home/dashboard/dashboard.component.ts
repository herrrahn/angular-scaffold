import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {SearchService} from './search/search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {


  private isVisible: boolean;
  private sub: Subscription;

  constructor(private searchService: SearchService) {
    this.sub = this.searchService.isSearchVisible.subscribe( visible => {
      this.isVisible = visible;
    });
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  open() {
    this.searchService.show();
  }
}
