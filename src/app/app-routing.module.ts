import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPageComponent,
         NotFoundPageComponent,
         StudentsPageComponent,
         TeachersPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: IndexPageComponent
  },
  {
    path: 'students',
    component: StudentsPageComponent
  },
  {
    path: 'teachers',
    component: TeachersPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
