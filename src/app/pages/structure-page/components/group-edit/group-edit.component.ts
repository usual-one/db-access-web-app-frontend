import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Group } from '../../../../shared/models';
import { BackendApiService,
         ErrorService,
         SelectedModelService,
         StateService } from '../../../../shared/services';

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.scss']
})
export class GroupEditComponent implements OnInit {

  public group: Group

  constructor(private backend: BackendApiService,
              public errorService: ErrorService,
              private modelService: SelectedModelService,
              private router: Router,
              public stateService: StateService) { }

  ngOnInit(): void {
    this.group = this.modelService.group;
    if (this.group === null) {
      this.stateService.innerState = 'create';
      this.group = {
        id: 0,
        name: '',
        year: 1,
        type: 'bachelor',
        faculty: this.modelService.faculty
      }
    } else {
      this.stateService.innerState = 'edit';
    }
  }

  private exit(): void {
      this.router.navigate(['structure/group-list']);
  }

  public confirmCreation(): void {
    this.errorService.invalidFaculty = false;
    this.backend.createGroup(this.group).then(() => {
      this.exit();
    }).catch(() => {
      this.errorService.invalidFaculty = true;
    });
  }

  public cancelChanges(): void {
    this.exit()
  }

  public confirmChanges(): void {
    this.errorService.invalidFaculty = false;
    this.backend.updateGroup(this.group.id, this.group).then(() => {
      this.exit();
    }).catch(() => {
      this.errorService.invalidFaculty = true;
    });
  }

  public removeStudent(): void {
    this.backend.removeGroup(this.group.id).then(() => {
      this.exit();
    });
  }

}
