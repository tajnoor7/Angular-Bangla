import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor() { }

  //function
  display(){
    return "this service is from 'services/channel' "
  }


  getValue(v: string){
    // console.log(v);
    return v;
  }


}
