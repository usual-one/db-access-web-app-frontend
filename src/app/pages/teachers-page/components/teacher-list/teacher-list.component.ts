import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Teacher } from '../../../../shared/models';
import { BackendApiService,
         SelectedModelService,
         StateService } from '../../../../shared/services';
import { PaginationButtonsComponent } from '../../../../shared/components';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit, AfterViewInit {

  @ViewChild('pagination')
  private pagination: PaginationButtonsComponent;

  public teachersDisplayed: number = 10;

  public teachers: Teacher[];

  constructor(private backend: BackendApiService,
              public modelService: SelectedModelService,
              private router: Router,
              private stateService: StateService) { }

  ngOnInit(): void {
    if (this.modelService.faculty === null) {
      this.router.navigate(['teachers/faculties']);
      return;
    }

    this.stateService.innerState = '';
    this.modelService.teacher = null;
  }

  ngAfterViewInit(): void {
    this.pagination.page.next(1);
    this.pagination.page.subscribe(page => {
      if (this.modelService.faculty === null) {
        return;
      }

      this.backend.getTeachers(this.modelService.faculty.id, this.teachersDisplayed, 
        this.teachersDisplayed * (page - 1))
        .then(teachers => {
          this.teachers = teachers;
        });
    });
  }

  public createTeacher(): void {
    this.modelService.teacher = null;
    this.router.navigate(['teachers/create']);
  }

  public editTeacher(teacher: Teacher): void {
    this.modelService.teacher = teacher;
    this.router.navigate(['teachers/edit']);
  }

}
