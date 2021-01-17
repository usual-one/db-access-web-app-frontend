import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PaginationButtonsComponent } from '../../../../shared/components';

import { Group } from '../../../../shared/models';
import { BackendApiService,
         SelectedModelService,
         StateService } from '../../../../shared/services';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit, AfterViewInit {

  @ViewChild('pagination')
  private pagination: PaginationButtonsComponent;

  public groupsDisplayed: number = 10;

  public groups: Group[];

  constructor(private backend: BackendApiService,
              private router: Router,
              private stateService: StateService,
              public modelService: SelectedModelService) { }

  ngOnInit(): void {
    if (this.modelService.faculty === null) {
      this.router.navigate(['structure/faculty-list']);
      return;
    }

    this.stateService.pageState = 'groups';
    this.stateService.innerState = '';

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

  public createGroup(): void {
    this.modelService.group = null;
    this.router.navigate(['structure/group-create']);
  }

  public editGroup(group: Group): void {
    this.modelService.group = group;
    this.router.navigate(['structure/group-edit']);
  }

}
