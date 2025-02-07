import { Component, OnInit, ViewChild } from '@angular/core';

import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

import { UserService } from '../user.service';
import { User } from 'src/app/core/models/User';
import { Pagination } from 'src/app/core/models/Pagination';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

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

  @ViewChild('userTable') grid!: Table;

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService
  ) {
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

  delete(user: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.userService.delete(user.id).subscribe(
          () => {
            this.grid.reset();
            this.messageService.add({
              severity: 'success',
              detail: 'Usuário excluído com sucesso!',
            });
          },
          (error) => this.errorHandler.handle(error)
        );
      },
    });
  }
}
