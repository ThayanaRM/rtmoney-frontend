import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppConstants } from 'src/app/app-constants';
import { Pagination } from '../core/models/Pagination';
import { User } from '../core/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  list(pagination: Pagination, filterName: string): Observable<any> {
    let params = new HttpParams()
    .set('name', filterName)
    .set('page', pagination.page)
    .set('linesPerPage', pagination.linesPerPage)
    .set('direction', String(pagination.direction))
    .set('orderBy', String(pagination.orderBy));

    console.log("Chamando API com filtros:", params.toString());

    return this.http.get<any>(AppConstants.backendServer + 'users', { params });
  }

  insert(user: User) : Observable<any> {
    return this.http.post<any>(AppConstants.backendServer + 'users', user);
  }

  findById(id: any): Observable<any> {
    return this.http.get<any>(AppConstants.backendServer + 'users/' + id);
  }

  update(user: User) : Observable<any> {
    console.log(user);
    return this.http.put<any>(AppConstants.backendServer + 'users/' + user.id, user);
  }

  delete(id: Number): Observable<any> {
    return this.http.delete(AppConstants.backendServer + 'users/' + id);
  }
}
