import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchService} from './search.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  private isVisible: boolean;
  private sub: Subscription;

  constructor(private searchService: SearchService) {
    this.sub = this.searchService.isSearchVisible.subscribe(visible => {
      this.isVisible = visible;
      if (this.isVisible) {
        setTimeout(() => {
          document.getElementById('s').focus();
        }, 0);
      }
    });
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  close(event) {
    if (event.key === 'Enter') {
      this.searchService.close();
    }
  }
}
