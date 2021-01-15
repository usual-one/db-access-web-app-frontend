import { Injectable } from '@angular/core';

type PageState = 'index' | 'not-found' | 'students' | 'teachers';
type InnerState = '' | 'faculties' | 'groups' | 'edit' | 'create';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public pageState: PageState;

  public innerState: InnerState;

  constructor() { }

}
