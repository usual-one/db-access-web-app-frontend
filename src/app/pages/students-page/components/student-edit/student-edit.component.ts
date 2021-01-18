import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from '../../../../shared/models';
import { BackendApiService,
         ErrorService,
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
              public errorService: ErrorService,
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
    this.errorService.invalidGroup = false;
    this.backend.createStudent(this.student).then(() => {
      this.exit();
    }).catch(() => {
      this.errorService.invalidGroup = true;
    });
  }

  public cancelChanges(): void {
    this.exit()
  }

  public confirmChanges(): void {
    this.errorService.invalidGroup = false;
    this.backend.updateStudent(this.student.id, this.student).then(() => {
      this.exit();
    }).catch(() => {
      this.errorService.invalidGroup = true;
    });
  }

  public removeStudent(): void {
    this.backend.removeStudent(this.student.id).then(() => {
      this.exit();
    });
  }

}
