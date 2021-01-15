import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from '../../../../shared/models';
import { BackendApiService,
         SelectedModelService,
         StateService } from '../../../../shared/services';
import { PaginationButtonsComponent } from '../../../../shared/components';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit, AfterViewInit {

  @ViewChild('pagination')
  private pagination: PaginationButtonsComponent;

  public studentsDisplayed: number = 10;

  public students: Student[];

  constructor(private backend: BackendApiService,
              public modelService: SelectedModelService,
              private router: Router,
              private stateService: StateService) { }

  ngOnInit(): void {
    if (this.modelService.group === null) {
      this.router.navigate(['students/groups']);
      return;
    }

    this.stateService.innerState = '';
    this.modelService.student = null;
  }

  ngAfterViewInit(): void {
    this.pagination.page.next(1);
    this.pagination.page.subscribe(page => {
      if (this.modelService.group === null) {
        return;
      }

      this.backend.getStudents(this.modelService.group.id, this.studentsDisplayed, 
        this.studentsDisplayed * (page - 1))
        .then(students => {
          this.students = students;
        });
    });
  }

  public createStudent(): void {
    this.modelService.student = null;
    this.router.navigate(['students/create']);
  }

  public editStudent(student: Student): void {
    this.modelService.student = student;
    this.router.navigate(['students/edit']);
  }

}
