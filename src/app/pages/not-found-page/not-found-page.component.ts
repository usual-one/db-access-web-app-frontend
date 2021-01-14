import { Component, OnInit } from '@angular/core';

import { StateService } from '../../shared/services';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.pageState = 'not-found';
    this.stateService.innerState = '';
  }

}
