import { Injectable } from '@angular/core';

import { Faculty,
         Group,
         Student,
         Teacher } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SelectedModelService {

  public student: Student = null;

  public teacher: Teacher = null;

  public group: Group = null;

  public faculty: Faculty = null;

  constructor() { }
}
