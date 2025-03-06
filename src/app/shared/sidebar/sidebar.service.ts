import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarVisible = new BehaviorSubject<boolean>(true);
  isSidebarVisible$ = this.sidebarVisible.asObservable();

  hideSidebar() {
    this.sidebarVisible.next(false);
  }

  showSidebar() {
    this.sidebarVisible.next(true);
  }
}
