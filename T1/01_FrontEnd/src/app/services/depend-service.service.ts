import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DependServiceService {

  message = "this data is from depend.service.ts via  {'first.component.ts / 'channel.service.ts'} ";

  constructor() { } 

  // for using this 'log()' from 'channel.service.ts' => inject 'depend service' within constructor() of 'channel.service.ts'
  log(){
    return this.message;
  }
}
