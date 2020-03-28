import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  isSearchVisible = new BehaviorSubject<boolean>(false);

  close() {
    this.isSearchVisible.next(false);
  }

  show() {
    this.isSearchVisible.next(true);
  }
}
