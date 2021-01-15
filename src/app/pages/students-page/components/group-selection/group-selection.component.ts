import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PaginationButtonsComponent } from '../../../../shared/components';

import { Faculty, 
         Group } from '../../../../shared/models';
import { BackendApiService,
         SelectedModelService,
         StateService } from '../../../../shared/services';

@Component({
  selector: 'app-group-selection',
  templateUrl: './group-selection.component.html',
  styleUrls: ['./group-selection.component.scss']
})
export class GroupSelectionComponent implements OnInit, AfterViewInit {

  @ViewChild('pagination')
  private pagination: PaginationButtonsComponent;

  public groupsDisplayed: number = 10;

  public groups: Group[];

  constructor(private backend: BackendApiService,
              private router: Router,
              private stateService: StateService,
              private modelService: SelectedModelService) { }

  ngOnInit(): void {
    if (this.modelService.faculty === null) {
      this.router.navigate(['students/faculties']);
      return;
    }

    this.stateService.innerState = 'groups';
    this.modelService.group = null;
  }

  ngAfterViewInit(): void {
    this.pagination.page.next(1);
    this.pagination.page.subscribe(page => {
      if (this.modelService.faculty === null) {
        return;
      }

      this.backend.getGroups(this.modelService.faculty.id, this.groupsDisplayed, 
        this.groupsDisplayed * (page - 1))
        .then(groups => {
          this.groups = groups;
        });
    });
  }

  public selectGroup(group: Group): void {
    this.modelService.group = group;
    this.router.navigate(['students/list']);
  }

}
