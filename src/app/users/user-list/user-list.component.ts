import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { UserService } from '../user.service';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.userService
    .list()
      .subscribe((data) => {
        this.users = data.content;
        console.log('UserListComponent - Usuários carregados:', this.users);
      });
  }
}
