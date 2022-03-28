import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Registration } from './registration';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  //a funcn in which obj of Registration.ts filr obj passed as arg
  postRegistrationForm(register :Registration)
  {
    return of(register);
    //of() keyword used to return the object

  }
}
