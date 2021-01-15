import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PaginationButtonsComponent } from '../pagination-buttons/pagination-buttons.component';

import { BackendApiService,
         StateService,
         SelectedModelService } from '../../services';
import { Faculty } from '../../models';

@Component({
  selector: 'app-faculty-selection',
  templateUrl: './faculty-selection.component.html',
  styleUrls: ['./faculty-selection.component.scss']
})
export class FacultySelectionComponent implements OnInit, AfterViewInit {

  @ViewChild('pagination')
  private pagination: PaginationButtonsComponent;

  public facultiesDisplayed: number = 10;

  public faculties: Faculty[];

  constructor(private backend: BackendApiService,
              private modelService: SelectedModelService,
              private router: Router,
              private stateService: StateService) { 
  }

  ngOnInit(): void {
    this.stateService.innerState = 'faculties';
    this.modelService.faculty = null;
  }

  ngAfterViewInit(): void {
    this.pagination.page.next(1);
    this.pagination.page.subscribe(page => {
      this.backend.getFaculties(this.facultiesDisplayed, this.facultiesDisplayed * (page - 1))
        .then(faculties => {
          this.faculties = faculties;
        });;
    });
  }

  public selectFaculty(faculty: Faculty): void {
    this.modelService.faculty = faculty;
    if (this.stateService.pageState === 'students') {
      this.router.navigate(['students/groups']);
    } else if (this.stateService.pageState === 'teachers') {
      this.router.navigate(['teachers/list']);
    }
  }

}
