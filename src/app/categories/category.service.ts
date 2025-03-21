import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';
import { Pagination } from '../core/models/Pagination';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  list(pagination: Pagination, filterName: string): Observable<any> {
    let params = new HttpParams()
    .set('name', filterName)
    .set('page', String(pagination.page))
    .set('linesPerPage', String(pagination.linesPerPage))
    .set('direction', String(pagination.direction))
    .set('orderBy', String(pagination.orderBy));

    return this.http.get<any>(AppConstants.backendServer + 'categories', { params });
  }
}
