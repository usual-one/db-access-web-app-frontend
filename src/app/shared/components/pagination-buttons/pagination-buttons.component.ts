import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-pagination-buttons',
  templateUrl: './pagination-buttons.component.html',
  styleUrls: ['./pagination-buttons.component.scss']
})
export class PaginationButtonsComponent implements OnInit {

  public page = new BehaviorSubject<number>(1);

  constructor() { }

  ngOnInit(): void {
  }

  public firstPage(): void {
    this.page.next(1);
  }

  public nextPage(): void {
    this.page.next(this.page.value + 1);
  }

  public previousPage(): void {
    if (this.page.value === 1) {
      return 
    }
    this.page.next(this.page.value - 1);
  }

}
