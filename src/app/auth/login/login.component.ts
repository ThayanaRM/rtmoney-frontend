import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { SidebarService } from 'src/app/shared/sidebar/sidebar.service';
import { AuthService } from '../auth.service';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(
    private authService: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router,
    private messageService: MessageService,
    private sidebarService: SidebarService

  ) {
    const hiddenRoutes = ['/auth/login'];

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (hiddenRoutes.includes(event.url)) {
          this.sidebarService.hideSidebar();
        } else {
          this.sidebarService.showSidebar();
        }
      }
    });
  }
  ngOnInit(): void {
  }

  save() {
    console.log('1 - LoginComponent.ts - save(): Iniciando login...');

    this.authService.requestToken(this.user).subscribe(
      (data) => {
        console.log('3 - LoginComponent - save(): Token recebido:', data);
      if(data && data.access_token){
        this.authService.saveToken(data.access_token);
        console.log('6 - LoginComponent - save():Token salvo com sucesso!');
        this.messageService.add({
          severity: 'success',
          detail: 'Usuário autenticado no sucesso!',
        });
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['users/list']);
      }

      },
      () =>
        this.errorHandler.handle(
          'Erro ao tentar efetuar a autenticação do usuário! Favor conferir o usuário e a senha. '
        )
    );
  }
}
