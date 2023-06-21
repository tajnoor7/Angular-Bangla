
import { Component } from '@angular/core';
import { Todo } from './model';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todolist: Todo []=[];

  todo: Todo = {
    Title: '',
    Id: null
  }

   
  addTodo(): void {
    console.log(this.todo);

    this.todo.Id = this.todolist.length +1;  //incresing Id number ++

    this.todolist.push({...this.todo});  //push to todo list

    console.log(this.todolist)

    this.todo = {
      Title: '',
      Id: null
    }
  }


}
