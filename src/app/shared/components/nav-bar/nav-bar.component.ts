import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public openIndexPage(): void {
    this.router.navigate(['']);
  }

  public openStudentsPage(): void {
    this.router.navigate(['students']);
  }

  public openTeachersPage(): void {
    this.router.navigate(['teachers']);
  }

}
