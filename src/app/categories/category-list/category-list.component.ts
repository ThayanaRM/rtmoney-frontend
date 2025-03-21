import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Category } from 'src/app/core/models/Category';
import { Pagination } from 'src/app/core/models/Pagination';
import { CategoryService } from '../category.service';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

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

    @ViewChild('categoryTable') grid!: Table;

  constructor(
    private categoryService: CategoryService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
  ) {
    this.pagination.linesPerPage = 3;
   }

  ngOnInit(): void {
    this.list();
  }

  list(page: number = 0): void {
    this.pagination.page = page;
    this.categoryService
      .list(this.pagination, this.filterName)
      .subscribe((data) => {
        this.categories = data.content;
        this.totalElements = data.totalElements;
      });
  }

  changePage(event: LazyLoadEvent) {
    const page = event!.first! / event!.rows!;
    this.list(page);
  }

  searchCategory(name: string) {
    this.filterName = name;
    this.list();
  }

}
