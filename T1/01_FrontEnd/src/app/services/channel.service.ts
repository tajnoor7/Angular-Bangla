import { Injectable } from '@angular/core';
import { DependServiceService } from './depend-service.service';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {


  // all services from "depend.service.ts" will be initialized/used within "channel.service.ts" class
  constructor(private dependService: DependServiceService) {  //dependService: DependServiceService => ref_variable: service_name
    console.log(dependService.log());
  }

  //function
  display(){
    return "this service is from 'services/channel' "
  }


  getValue(v: string){
    // console.log(v);
    return v;
  }

  // log() <= "depend.service.ts"
  dValue(){
    return this.dependService.log();
  }


}
