import { Component, OnInit } from '@angular/core';

import { StateService } from '../../shared/services';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.pageState = 'index';
    this.stateService.innerState = '';
  }

}
