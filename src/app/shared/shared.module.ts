import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from './icons/icons.module';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FilterComponent

  ],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule,
    FormsModule,
    IconsModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FilterComponent
  ]
})
export class SharedModule { }
