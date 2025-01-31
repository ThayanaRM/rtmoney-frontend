import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app-constants';
import { Pagination } from '../core/models/Pagination';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  list(pagination: Pagination): Observable<any> {
    let params = new HttpParams()
    .set('page', pagination.page)
    .set('linesPerPage', pagination.linesPerPage)
    .set('direction', String(pagination.direction))
    .set('orderBy', String(pagination.orderBy));

    return this.http.get<any>(AppConstants.backendServer + 'users', { params });
  }
}
