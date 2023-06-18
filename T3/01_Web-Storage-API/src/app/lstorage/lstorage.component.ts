import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lstorage',
  templateUrl: './lstorage.component.html',
  styleUrls: ['./lstorage.component.css']
})
export class LstorageComponent implements OnInit {

  //initialization
  name: any;

  namesArray: any;
  nm: any;

  listArray: any;
  ls: any;


  //set items
  names: string[] = [" Sabbir", " Adit", " Robin"];  // array string

  //set items
  messages = {
    list: [
      {
        id: 1,
        body: 'Abid'
      },
      {
        id: 2,
        body: 'Nehal'
      }
    ]
  }

  constructor() {}

  ngOnInit(): void {
    
    // localStorage.setItem('name', 'grade')
    // localStorage.setItem('name2', 'grade2')
    // localStorage.setItem('name3', 'grade3')

    // localStorage.removeItem('name3');

    // localStorage.clear();

    // let name = localStorage.getItem('name')
    // console.log(name);

    // this.name = localStorage.getItem('name')

    //array
    // localStorage.setItem('names', JSON.stringify(this.names));
    // this.namesArray = localStorage.getItem('names');
    // this.nm = JSON.parse(this.namesArray);
    // console.log(this.nm);

    // list array
    // localStorage.setItem('messages', JSON.stringify(this.messages));
    // this.listArray = localStorage.getItem('messages');
    // this.ls = JSON.parse(this.listArray);
    // console.log(this.ls);


    // localStorage.clear();

  }

  display(){
    this.listArray = localStorage.getItem('messages');
    this.ls = JSON.parse(this.listArray);
    console.log(this.ls);

    this.namesArray = localStorage.getItem('names');
    this.nm = JSON.parse(this.namesArray);
    console.log(this.nm);
  }


  storage(){
    localStorage.setItem('messages', JSON.stringify(this.messages));

    localStorage.setItem('names', JSON.stringify(this.names)); 
  }

  

}
