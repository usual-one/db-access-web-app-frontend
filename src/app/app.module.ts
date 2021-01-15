import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { IndexPageComponent,
         NotFoundPageComponent,
         StudentsPageComponent,
         TeachersPageComponent } from './pages';
import { GroupSelectionComponent, 
         StudentEditComponent,
         StudentListComponent } from './pages/students-page/components';
import { TeacherEditComponent,
         TeacherListComponent } from './pages/teachers-page/components';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    StudentsPageComponent,
    TeachersPageComponent,
    NotFoundPageComponent,
    StudentListComponent,
    StudentEditComponent,
    TeacherEditComponent,
    TeacherListComponent,
    GroupSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
