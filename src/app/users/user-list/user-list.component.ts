import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/core/models/User';
import { Pagination } from 'src/app/core/models/Pagination';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = []

  pagination: Pagination = new Pagination();

  totalElements: number = 0;

  filterName: string = '';

  constructor(private userService: UserService) {
    this.pagination.linesPerPage = 3;
   }

  ngOnInit(): void {
  }

  list(page: number = 0): void {
    this.pagination.page = page;

    this.userService
    .list(this.pagination, this.filterName)
      .subscribe((data) => {
        this.users = data.content;
        this.totalElements = data.totalElements;
      });
  }

  changePage(event: LazyLoadEvent){
    const page = event!.first! / event!.rows!;
    this.list(page);
  }

  searchUser(name: string) {
    console.log("Filtro recebido no UserListComponent: " + name);
    this.filterName = name;
    this.list();
  }
}
