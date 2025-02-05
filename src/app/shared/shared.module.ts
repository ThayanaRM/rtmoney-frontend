import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FilterComponent } from './filter/filter.component';
import { MessageComponent } from './message/message.component';

import { IconsModule } from './icons/icons.module';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FilterComponent,
    MessageComponent,

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
    FilterComponent,
    MessageComponent
  ]
})
export class SharedModule { }
