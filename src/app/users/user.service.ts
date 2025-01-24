import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AppConstants } from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    const users: Observable<any> = this.http.get<any>(AppConstants.backendServer + 'users');
    users.subscribe((data) => {
      console.log('UserService - Usuários carregados', data.content);


    });
    return users;
  }
}
