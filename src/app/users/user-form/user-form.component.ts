import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Role } from 'src/app/core/models/Role';
import { User } from 'src/app/core/models/User';
import { UserService } from '../user.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User = new User();

  roles: Role[] = [
    { id: 1, authority: 'ROLE_FUNCTIONARY' },
    { id: 2, authority: 'ROLE_ADMIN' },
  ];

  select: number[] = [];

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private router: Router,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
  }

  save(form: NgForm){
    console.log(form.value);
    this.user.roles = form.value.roles;
    this.insert();
  }

  insert() {
    this.userService.insert(this.user).subscribe(
      () => {
        this.router.navigate(['/users/list']);
        this.messageService.add({ severity: 'success', detail: 'Usuário cadastrado com sucesso!' });
      },
      (error) => this.errorHandler.handle(error));

  }
}
