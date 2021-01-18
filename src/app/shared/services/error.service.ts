import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  public invalidGroup: boolean = false;

  public invalidFaculty: boolean = false;

  constructor() { }
}
