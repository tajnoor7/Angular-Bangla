import { Component,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }

  //instance of FormControl
  color = new FormControl('');

  name = '';


}
