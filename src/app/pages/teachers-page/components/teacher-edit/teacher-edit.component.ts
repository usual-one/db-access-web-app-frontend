import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Teacher } from '../../../../shared/models';
import { BackendApiService,
         SelectedModelService,
         StateService } from '../../../../shared/services';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.scss']
})
export class TeacherEditComponent implements OnInit {

  public teacher: Teacher;

  constructor(private backend: BackendApiService,
              private modelService: SelectedModelService,
              private router: Router,
              public stateService: StateService) { }

  ngOnInit(): void {
    this.teacher = this.modelService.teacher;
    if (this.teacher === null) {
      this.stateService.innerState = 'create';
      this.teacher = {
        id: 0,
        name: '',
        faculty: {
          id: 0,
          name: '',
          briefName: this.modelService.faculty.briefName
        }
      }
    } else {
      this.stateService.innerState = 'edit';
    }
  }

  private exit(): void {
      this.router.navigate(['teachers/list']);
  }

  public confirmCreation(): void {
    this.backend.createTeacher(this.teacher).then(() => {
      this.exit();
    });
  }

  public cancelChanges(): void {
    this.exit()
  }

  public confirmChanges(): void {
    this.backend.updateTeacher(this.teacher.id, this.teacher).then(() => {
      this.exit();
    });
  }

  public removeTeacher(): void {
    this.backend.removeTeacher(this.teacher.id).then(() => {
      this.exit();
    });
  }

}
