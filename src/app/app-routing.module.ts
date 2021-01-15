import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacultySelectionComponent } from './shared/components';

import { IndexPageComponent,
         NotFoundPageComponent,
         StudentsPageComponent,
         TeachersPageComponent } from './pages';
import { GroupSelectionComponent,
         StudentEditComponent,
         StudentListComponent } from './pages/students-page/components';
import { TeacherEditComponent,
         TeacherListComponent } from './pages/teachers-page/components';

const routes: Routes = [
  {
    path: '',
    component: IndexPageComponent
  },
  {
    path: 'students',
    component: StudentsPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'faculties',
        pathMatch: 'full'
      },
      {
        path: 'faculties',
        component: FacultySelectionComponent
      },
      {
        path: 'groups',
        component: GroupSelectionComponent
      },
      {
        path: 'list',
        component: StudentListComponent
      },
      {
        path: 'edit',
        component: StudentEditComponent
      },
      {
        path: 'create',
        component: StudentEditComponent
      }
    ]
  },
  {
    path: 'teachers',
    component: TeachersPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'faculties',
        pathMatch: 'full'
      },
      {
        path: 'faculties',
        component: FacultySelectionComponent
      },
      {
        path: 'list',
        component: TeacherListComponent
      },
      {
        path: 'edit',
        component: TeacherEditComponent
      },
      {
        path: 'create',
        component: TeacherEditComponent
      }
    ]
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
