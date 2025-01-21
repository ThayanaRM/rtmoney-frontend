import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users = [
    {
      name: 'Axl Fernandez',
      email: 'axl@email.com',
      role: 'ROLE_ADMIN',
    },
    {
      name: 'Rose Oliveira',
      email: 'rose@email.com',
      role: 'ROLE_ANALYST',
    },
    {
      name: 'Flávia Durval',
      email: 'flavia@email.com',
      role: 'ROLE_ADMIN',
    },
    {
      name: 'Luciano Santos',
      email: 'luciano@email.com',
      role: 'ROLE_ANALYST',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
