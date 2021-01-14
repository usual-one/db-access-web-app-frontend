import { Component, OnInit } from '@angular/core';

import { StateService } from '../../shared/services';

@Component({
  selector: 'app-teachers-page',
  templateUrl: './teachers-page.component.html',
  styleUrls: ['./teachers-page.component.scss']
})
export class TeachersPageComponent implements OnInit {

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.pageState = 'teachers';
    this.stateService.innerState = '';
  }

}
