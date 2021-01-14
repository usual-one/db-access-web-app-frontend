import { Component, OnInit } from '@angular/core';

import { StateService } from '../../shared/services';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent implements OnInit {

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.pageState = 'students';
    this.stateService.innerState = '';
  }

}
