import { Injectable } from '@angular/core';

type PageState = 'index' | 'not-found' | 'students' | 'teachers' | 'faculties' | 'groups';
type InnerState = '' | 'faculties' | 'groups' | 'edit' | 'create';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public pageState: PageState;

  public innerState: InnerState;

  constructor() { }

}
