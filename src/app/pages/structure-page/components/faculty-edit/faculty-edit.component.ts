import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Faculty } from '../../../../shared/models';
import { BackendApiService,
         SelectedModelService,
         StateService } from '../../../../shared/services';

@Component({
  selector: 'app-faculty-edit',
  templateUrl: './faculty-edit.component.html',
  styleUrls: ['./faculty-edit.component.scss']
})
export class FacultyEditComponent implements OnInit {

  public faculty: Faculty;

  constructor(private backend: BackendApiService,
              private modelService: SelectedModelService,
              private router: Router,
              public stateService: StateService) { }

  ngOnInit(): void {
    this.faculty = this.modelService.faculty;
    if (this.faculty === null) {
      this.stateService.innerState = 'create';
      this.faculty = {
        id: 0,
        name: '',
        briefName: ''
      }
    } else {
      this.stateService.innerState = 'edit';
    }
  }

  private exit(): void {
      this.router.navigate(['structure/faculty-list']);
  }

  public confirmCreation(): void {
    this.backend.createFaculty(this.faculty).then(() => {
      this.exit();
    });
  }

  public cancelChanges(): void {
    this.exit()
  }

  public confirmChanges(): void {
    this.backend.updateFaculty(this.faculty.id, this.faculty).then(() => {
      this.exit();
    });
  }

  public removeStudent(): void {
    this.backend.removeFaculty(this.faculty.id).then(() => {
      this.exit();
    });
  }

}
