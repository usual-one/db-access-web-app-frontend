import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PaginationButtonsComponent } from '../../../../shared/components';

import { Faculty } from '../../../../shared/models';
import { BackendApiService,
         SelectedModelService,
         StateService } from '../../../../shared/services';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.scss']
})
export class FacultyListComponent implements OnInit, AfterViewInit {

  @ViewChild('pagination')
  private pagination: PaginationButtonsComponent;

  public facultiesDisplayed: number = 10;

  public faculties: Faculty[];

  constructor(private backend: BackendApiService,
              private router: Router,
              private stateService: StateService,
              private modelService: SelectedModelService) { }

  ngOnInit(): void {
    this.stateService.pageState = 'faculties';
    this.stateService.innerState = '';

    this.modelService.faculty = null;
  }

  ngAfterViewInit(): void {
    this.pagination.page.next(1);
    this.pagination.page.subscribe(page => {
      this.backend.getFaculties(this.facultiesDisplayed, this.facultiesDisplayed * (page - 1))
        .then(faculties => {
          this.faculties = faculties;
        });
    });
  }

  public createFaculty(): void {
    this.modelService.faculty = null;
    this.router.navigate(['structure/faculty-create']);
  }

  public editFaculty(faculty: Faculty): void {
    this.modelService.faculty = faculty;
    this.router.navigate(['structure/faculty-edit']);
  }

  public selectFaculty(faculty: Faculty): void {
    this.modelService.faculty = faculty;
    this.router.navigate(['structure/group-list']);
  }

}
