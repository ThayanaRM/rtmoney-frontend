import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Category } from 'src/app/core/models/Category';
import { Pagination } from 'src/app/core/models/Pagination';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = []

    pagination: Pagination = new Pagination();

    totalElements: number = 0;

    filterName: string = '';

    @ViewChild('userTable') grid!: Table;

  constructor() { }

  ngOnInit(): void {
  }

}
