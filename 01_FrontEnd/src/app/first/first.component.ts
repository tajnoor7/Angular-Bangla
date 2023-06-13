import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../services/channel.service';  //receaving data from "channel.service.ts"

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  // property
  title = "Angualr Course";

  sendV = "This is sendV from 'first.component.ts by sendValue() to 'channel.service.ts' by getValue() ";

  // array
  items: any[] = [
    "id", "name", "age"
  ]


  // all services from "channel.service.ts" will be initialized/used within "first.component.ts" class
  constructor(private channelService: ChannelService) {  //channelService: ChannelService => ref_variable: service_name

  }


  ngOnInit():void {
    this.f();
    this.f2();
    this.sendValue();
  }


  //function -> f(){}
  f(){
    console.log("Hello Bangladesh");
  }


  f2(){
    return this.title;
  }


  sum(){
    return 20+10;
  }


  // display()  <= from "channel.service.ts"
  message(){
    return this. channelService.display();
  }


  // getValue() <= "channel.service.ts"
  sendValue(){
    return this.channelService.getValue(this.sendV);
  }

  // dValue() <= "channel.service.ts"
  dValueF(){
    return this.channelService.dValue();
  }


}
