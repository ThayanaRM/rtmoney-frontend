import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';
import { Pagination } from '../core/models/Pagination';
import { Category } from '../core/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  list(pagination: Pagination, filterName: string): Observable<any> {
    let params = new HttpParams()
    .set('name', filterName)
    .set('page', String(pagination.page))
    .set('size', String(pagination.linesPerPage))
    .set('sort', `${pagination.orderBy},${pagination.direction.toLowerCase()}`);

    console.log('[03 - CategoryService] Params usados:', params.toString());

    return this.http.get<any>(AppConstants.backendServer + 'categories', { params });
  }

  insert(category: Category) : Observable<any> {
    return this.http.post<any>(AppConstants.backendServer + 'categories', category);
  }
}
