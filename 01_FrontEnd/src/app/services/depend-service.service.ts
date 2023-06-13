import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DependServiceService {

  message = "My depend service data";

  constructor() { }

  // for using this 'log()' from 'channel.service.ts' => inject 'depend service' within constructor() of 'channel.service.ts'
  log(){
    return this.message;
  }
}
