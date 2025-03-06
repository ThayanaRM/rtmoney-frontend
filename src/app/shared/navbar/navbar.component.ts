import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  showMenu: boolean = false;
  userLoggedIn: string = this.authService.decodedToken?.user_name;

  constructor(private authService: AuthService, private router: Router) {
    AuthService.emitiLogin.subscribe((data) => {
      this.userLoggedIn = data;
    });

  }

  // logout(){
  //   this.authService.logout();
  //   this.router.navigate(['/auth/login']);
  // }

  ngOnInit(): void {}

  haveRole(role: string){
    return this.authService.haveRole(role);
  }
}
