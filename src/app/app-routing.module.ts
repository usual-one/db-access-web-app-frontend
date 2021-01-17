import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacultySelectionComponent } from './shared/components';

import { IndexPageComponent,
         NotFoundPageComponent,
         StructurePageComponent,
         StudentsPageComponent,
         TeachersPageComponent} from './pages';
import { GroupSelectionComponent,
         StudentEditComponent,
         StudentListComponent } from './pages/students-page/components';
import { TeacherEditComponent,
         TeacherListComponent } from './pages/teachers-page/components';
import { GroupListComponent,
         GroupEditComponent,
         FacultyListComponent,
         FacultyEditComponent } from './pages/structure-page/components';

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
    path: 'structure',
    component: StructurePageComponent,
    children: [
      {
        path: '',
        redirectTo: 'faculty-list',
        pathMatch: 'full'
      },
      {
        path: 'group-list',
        component: GroupListComponent
      },
      {
        path: 'group-edit',
        component: GroupEditComponent
      },
      {
        path: 'group-create',
        component: GroupEditComponent
      },
      {
        path: 'faculty-list',
        component: FacultyListComponent
      },
      {
        path: 'faculty-edit',
        component: FacultyEditComponent
      },
      {
        path: 'faculty-create',
        component: FacultyEditComponent
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
