import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Pagination } from 'src/app/core/models/Pagination';
import { Product } from 'src/app/core/models/Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  pagination: Pagination = new Pagination();

  totalElements: number = 0;

  filterName: string = '';

  @ViewChild('characterTable') grid!: Table;

  constructor(
    private productService: ProductsService,
  ) {
    this.pagination.linesPerPage = 3;
  }

  ngOnInit(): void {
  }

  list(page: number = 0): void {
    this.pagination.page = page;
    this.productService
      .list(this.pagination, this.filterName)
      .subscribe((data) => {
        this.products = data.content;
        this.totalElements = data.totalElements;
      });
  }

  changePage(event: LazyLoadEvent) {
    const page = event!.first! / event!.rows!;
    this.list(page);
  }

  search(name: string) {
    this.filterName = name;
    this.list();
  }

}
