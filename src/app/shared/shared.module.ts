import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultySelectionComponent,
         NavBarComponent,
         PaginationButtonsComponent } from './components';


@NgModule({
  declarations: [
    FacultySelectionComponent,
    NavBarComponent,
    PaginationButtonsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FacultySelectionComponent,
    NavBarComponent,
    PaginationButtonsComponent
  ]
})
export class SharedModule { }
