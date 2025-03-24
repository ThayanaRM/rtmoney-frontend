import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';

import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Category } from 'src/app/core/models/Category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  category: Category = new Category();

  constructor(
    private categoryService: CategoryService,
        private messageService: MessageService,
        private router: Router,
        private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
  }

    save(){
      console.log('Salvando a categoria');
        this.insert();
    }

    insert() {
      console.log('2º', this.category)
      this.categoryService.insert(this.category).subscribe(
        () => {
          this.router.navigate(['/categories/list']);
          this.messageService.add({ severity: 'success', detail: 'Categoria cadastrada com sucesso!' });
        },
        (error) => this.errorHandler.handle(error));

    }
}
