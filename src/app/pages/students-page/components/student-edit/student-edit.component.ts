import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from '../../../../shared/models';
import { BackendApiService,
         SelectedModelService,
         StateService } from '../../../../shared/services';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {

  public student: Student;

  constructor(private backend: BackendApiService,
              private modelService: SelectedModelService,
              private router: Router,
              public stateService: StateService) { }

  ngOnInit(): void {
    this.student = this.modelService.student;
    if (this.student === null) {
      this.stateService.innerState = 'create';
      this.student = {
        id: 0,
        name: '',
        group: {
          id: 0,
          name: this.modelService.group.name,
          year: 1,
          type: 'bachelor',
          faculty: {
            id: 0,
            name: '',
            briefName: ''
          }
        },
        state: 'studying'
      }
    } else {
      this.stateService.innerState = 'edit';
    }
  }

  private exit(): void {
      this.router.navigate(['students/list']);
  }

  public confirmCreation(): void {
    this.backend.createStudent(this.student).then(() => {
      this.exit();
    });
  }

  public cancelChanges(): void {
    this.exit()
  }

  public confirmChanges(): void {
    this.backend.updateStudent(this.student.id, this.student).then(() => {
      this.exit();
    });
  }

  public removeStudent(): void {
    this.backend.removeStudent(this.student.id).then(() => {
      this.exit();
    });
  }

}
