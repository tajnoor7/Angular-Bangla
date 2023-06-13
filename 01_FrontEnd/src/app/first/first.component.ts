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


  // all services from "ChannelService" will be initialized/used within "FirstComponent" class
  constructor(private channelService: ChannelService) {  //channelService: ChannelService => ref_variable: service name

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


  // getValue() <= from "channel.service.ts"
  sendValue(){
    return this.channelService.getValue(this.sendV);
  }

  

}
